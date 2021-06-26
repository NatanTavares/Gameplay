import React, { ReactNode } from "react";
import {
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Background } from "../Background";

import { styles } from "./styles";

type ModalViewProps = ModalProps & {
  children: ReactNode;
  onCloseModal: () => void;
};

export function ModalView({ children, onCloseModal, ...rest }: ModalViewProps) {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />

              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
