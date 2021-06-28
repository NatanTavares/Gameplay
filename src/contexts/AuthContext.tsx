import React, { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";

import { COLLECTION_USERS } from "../configs/database";
import { api } from "../services/api";

const { CDN_IMAGE } = process.env;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;
const { SCOPE } = process.env;

type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string | null;
  email: string;
  token: string;
};

type AuthContextType = {
  loading: boolean;
  user: User | null;
  onSignIn: () => Promise<void>;
  onSignOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSignIn() {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success" && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const { data } = await api.get("/users/@me");
        const firstName = data.username.split(" ")[0];

        if (data.avatar) {
          data.avatar = `${CDN_IMAGE}/avatars/${data.id}/${data.avatar}.png`;
        } else {
          data.avatar = null;
        }

        const userData = { ...data, firstName, token: params.access_token };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUser(userData);
      }
    } catch {
      throw new Error("Não foi possível autenticar");
    } finally {
      setLoading(false);
    }
  }

  async function onSignOut() {
    await AsyncStorage.removeItem(COLLECTION_USERS);
    setUser(null);
  }

  async function loadUserStorageDatabase() {
    const storedData = await AsyncStorage.getItem(COLLECTION_USERS);

    if (!!storedData) {
      const userLogged = JSON.parse(storedData);
      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserStorageDatabase();
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, onSignIn, onSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}
