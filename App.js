// Importing necessary modules and components
import "react-native-gesture-handler"; // This is a dependency that handles touch gestures in react-native apps
import { SafeAreaProvider } from "react-native-safe-area-context"; // This is a provider for safe area insets, it's used to handle view padding in devices with notches or rounded corners
import Navigation from "./navigation"; // This is your navigation component, it probably contains the navigation structure of your app
import { useColorScheme } from "react-native"; // This is a hook that gets the color scheme of the user's device
import { useLoadedAssets } from "./hooks/useLoadedAssets"; // This is a custom hook, it probably handles the loading of some assets in your app

// The main component of your app
export default function App() {
  // Using the hooks to get the color scheme and the loading state
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  // If the assets are not yet loaded, the app renders nothing
  if (!isLoadingComplete) {
    return null;
  } else {
    // Once the assets are loaded, the app renders the Navigation component inside the SafeAreaProvider
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}