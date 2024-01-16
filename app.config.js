module.exports = {
  name: 'Eltarot',
  slug: "Eltarot",
  version: "2.6.6",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#f3f0ea"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.t2madrid.Eltarot"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#f3f0ea"
    },
    // config: {
    //   googleMobileAdsAppId: "ca-app-pub-2941690616570089~9044230200"
    // },
    package: "com.t2madrid.Eltarot",
    permissions: [],
    versionCode: 16
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    // apiKey: process.env.EXPO_FIREBASE_KEY,
    // appId: process.env.EXPO_FIREBASE_ID,
    // learnBanner: process.env.EXPO_LEARN_BANNER,
    // readsBanner: process.env.EXPO_READS_BANNER,
    // savedReadsBanner: process.env.EXPO_SAVED_READS_BANNER,
    // cardDetailsBanner: process.env.EXPO_CARD_DETAILS_BANNER,
    // readerBanner: process.env.EXPO_READER_BANNER,
    // myReadsInterstitial: process.env.EXPO_MY_READS_INTERSTITIAL,
    // savedReadsInterstitial: process.env.EXPO_SAVED_READS_INTERSTITIAL,
    // readReward: process.env.EXPO_READS_REWARD,
    eas: {
      projectId: "a745e38a-2adb-40fd-8481-f320a1b1358f"
    }
  }
}
