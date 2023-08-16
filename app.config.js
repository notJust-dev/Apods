import 'dotenv/config'

export default {
  "expo": {
    "name": "Apods",
    "slug": "Apods",
    "scheme": "notJustAstromy",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png",
      "bundler": "metro",
      "output": "static"
    },
    "plugins": [
      [
        "expo-router",
        {
          "asyncRoutes": "development"
        }
      ]
    ],
    "experiments": {
      "tsconfigPaths": true,
      "typedRoutes": true
    },
    "extra": {
      firebaseApiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.REACT_APP_FIREBASE_APP_ID
    }
  }
}
