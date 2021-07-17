<h1 align="center">
  <img alt="GamePlay" height="80" title="Plant Manager" src=".github/logo.png" />
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">

 <a href="https://linkedin.com/in/natan-tavares" target="_blank">
    <img src="https://img.shields.io/static/v1?label=Linkedin&message=Natan%20Tavares&color=E51C44&labelColor=0A1033" alt="Linkedin Badge">
  </a>

 <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=E51C44&labelColor=0A1033" alt="NLW 06" />
</p>

![cover](.github/cover.png?style=flat)

## 💻 Project

Application to help you connect and organize fun and play with friends. Create groups to play your favorite games with your friends with this App that has Discord authentication.

## :hammer_and_wrench: Features

- OAuth2 Social Authentication with Discord server.
- Gets the user's Discord profile (username and avatar);
- Lists the Discord servers the user is part of;
- Allows for the scheduling of matches;
- Allows you to filter the matches by category;
- Displays whether the match was scheduled on a own server (host) or on others' servers (guest);
- Shares the invitation to join the user's server;
- Allows redirecting the user to his own server;
- Provides the Logout function.

## ✨ Technologies

- React Native
- Typescript
- Expo
- Context API
- Async Storage
- Vector Icons
- React Native Svg e Svg Transform
- Axios
- Gradient colors
- OAuth2 Discord
- Expo Google Fonts
- React Navigation Stack
- React Native Gesture Handler
- Expo Authentication
- React Native Share
- Deep Link

## 🔖 Layout

You can view the project layout through [this link](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together?node-id=58913%3A83). You must have a [Figma](http://figma.com/) account to access it.

## Running the project

Use **yarn** or **npm install** to install the project dependencies.
Then start the project.

```cl
expo start
```

Remember to create your App on the Discord server to get the authentication credentials. Then define your App settings in the .env file (remove the example from the .env.example file).

```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.
