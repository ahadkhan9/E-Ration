import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { imageComp } from "../../assets/ImageComp";

export function HeaderMainPage({ navigation, otherPage = false }) {
  return (
    <View
      style={{
        ...style.container,
        justifyContent: otherPage ? "center" : "space-between",
      }}
    >
      {!otherPage && (
        <TouchableOpacity
          style={style.personIcon}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Text>
            <Ionicons size={30} name="ios-menu" />
          </Text>
        </TouchableOpacity>
      )}

      <View style={style.imageContainer}>
        <Image style={style.image} source={imageComp["GovLogo"]} />
        <Text style={style.rationText}>E-Ration</Text>
      </View>

      {!otherPage && (
        <TouchableOpacity style={style.menu}>
          <View>
            <Ionicons size={26} name="ios-person-outline" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    height: 75,
    paddingBottom: 20,
    flexDirection: "row",
    position: "relative",
    // top: Platform.OS === "android" ? 20 : 0,
  },
  menu: {
    alignSelf: "center",
    marginRight: 8,
  },
  image: {
    width: 30,
    height: 50,
    marginRight: 10,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rationText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  personIcon: {
    marginLeft: 8,
    alignSelf: "center",
  },
});
