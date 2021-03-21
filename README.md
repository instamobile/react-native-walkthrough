# Walkthrough Flow in React Native

Check our this implementation of a walkthrough flow in React Native. Beautiful design, clean and extensible code and modularized flow.

## Features

- Highly customizable source code
- Unlimited number of steps
- Optimized for both iOS and Android

## Previews

<a href="https://www.instamobile.io/app-templates/react-native-walkthrough-flow/"><img src="https://www.instamobile.io/wp-content/uploads/2019/01/Simulator-Screen-Shot-iPhone-X-2019-01-20-at-13.59.45-473x1024.png" alt="educational walkthrough flow react native" width="210" height="456"/></a>
<a href="https://www.instamobile.io/app-templates/react-native-walkthrough-flow/"><img src="https://www.instamobile.io/wp-content/uploads/2019/01/Simulator-Screen-Shot-iPhone-X-2019-01-20-at-13.59.17-473x1024.png" alt="react native walkthrough" width="210" height="456" /></a>
<a href="https://www.instamobile.io/app-templates/react-native-walkthrough-flow/"><img src="https://www.instamobile.io/wp-content/uploads/2019/01/Simulator-Screen-Shot-iPhone-X-2019-01-20-at-13.59.14-473x1024.png" alt="react native walkthrough onboarding flow" width="210" height="456"/></a>

## Get Started

```
const WalkthroughAppConfig = {
  onboardingConfig: {
    walkthroughScreens: [
      {
        icon: require("../assets/react-native.png"),
        title: "React Native Walkthrough",
        description: "Welcome your users with a beautiful app walkthrough.",
      },
      {
        icon: require("../assets/educate.png"),
        title: "Educate",
        description:
          "Showcase features to new users so that they get to love your app.",
      },
      {
        icon: require("../assets/bell.png"),
        title: "Get Notified",
        description: "Describe the value proposition of each core feature.",
      },
    ],
  },
};

const lightColorSet = {
  mainThemeBackgroundColor: "#ffffff",
  mainThemeForegroundColor: "#788eec",
};

const darkColorSet = {
  mainThemeBackgroundColor: "#121212",
  mainThemeForegroundColor: "#788eec",
};

const colorSet = {
  ...lightColorSet,
  light: lightColorSet,
  dark: darkColorSet,
  "no-preference": lightColorSet,
};

const DynamicAppStyles = {
  colorSet,
};

<WalkthroughScreen
  appConfig={WalkthroughAppConfig}
  appStyles={DynamicAppStyles}
/>

```

Coded with ❤️ by <a href="https://www.instamobile.io">Instamobile</a> and <a href="https://www.iosapptemplates.com">Swift Projects</a>.
