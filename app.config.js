export default () => ({
    expo: {
        name: "Siti",
        slug: "siti",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        splash: {
            image: "./assets/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff",
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ["**/*"],
        ios: {
            supportsTablet: true,
        },
        android: {
            config: {
                googleMaps: {
                    apiKey: process.env.GOOGLE_API_KEY,
                },
            },
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#FFFFFF",
            },
            permissions: ["android.permission.RECORD_AUDIO"],
            package: "com.dzajlopment.siti",
        },
        plugins: [
            [
                "expo-image-picker",
                {
                    cameraPermission: "The app needs access to your camera in order to take photos.",
                    photosPermission: "The app accesses your photos to let you share them in reports.",
                },
            ],
        ],
        extra: {
            eas: {
                projectId: "674111fa-2fd1-40fa-99d0-2cdb667826df",
            },
            GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
            BACKEND_URL: process.env.BACKEND_URL,
        },
    },
});
