const {
  View,
  StyleSheet,
  Animated,
  Text,
  Modal,
  Image,
} = require("react-native");
import React from "react";

const ModalPopUp = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

function CustomModal({
  visibleModal = "false",
  dataStatus = "",
  errorShow = "",
}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backfaceVisibility: "visible",
        position: "absolute",
      }}
    >
      <ModalPopUp visible={visibleModal}>
        <View style={{ alignItems: "center" }}></View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={
              dataStatus?.status === "successful"
                ? require("../assets/check.png")
                : require("../assets/delete.png")
            }
            style={{ height: 100, width: 100, marginVertical: 10 }}
          />
        </View>

        <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}>
          {dataStatus?.status === "successful"
            ? errorShow
              ? errorShow
              : "Account successfully created!"
            : errorShow
            ? errorShow
            : "Due to some error account not created!"}
        </Text>
      </ModalPopUp>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "visible",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default CustomModal;
