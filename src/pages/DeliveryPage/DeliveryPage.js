import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { HeaderMainPage } from "../mainPageComp/HeaderMainPage";
import CustomerDetails from "../ThankyouPage/CostumerDetails";
import OrderDetails from "../ThankyouPage/OrderDetails";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

function DeliveryPage({ navigation, route }) {
  const { oderDeliverData } = route.params;
  const faceDataValidation = route?.params?.faceDataValidation
    ? route?.params?.faceDataValidation
    : "NotValidate";

  console.log(faceDataValidation);

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <HeaderMainPage otherPage={true} />
      <ScrollView>
        <CustomerDetails userData={oderDeliverData?.userData} />
        <OrderDetails cart={oderDeliverData?.cartData} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
            justifyContent: "space-around",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "400" }}>
            Deliver this product :{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FaceDetection", {
                returnPage: "DeliveryPage",
                userFaceData: oderDeliverData,
              });
            }}
          >
            <View
              style={{
                width: 150,
                paddingHorizontal: 7,
                paddingVertical: 6,
                backgroundColor: "lightgreen",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "500" }}>
                {faceDataValidation === "Successful"
                  ? "Delivered"
                  : "Deliver Now"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DeliveryPage;
