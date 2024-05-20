import React from "react";
import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { HeaderMainPage } from "../mainPageComp/HeaderMainPage";
import OrderDetails from "./OrderDetails";
import CustomerDetails from "./CostumerDetails";

function ThankyouPage({ navigation, route }) {
  const { cart, userData } = route?.params;
  console.log(userData, "nhsdbh");
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <HeaderMainPage otherPage={true} />
      <ScrollView>
        <View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a4zxZpBL9oV6FpB7u57C0ME2z_sqwzHD4ZMhhjz9&s",
              }}
              style={{
                width: "30%",
                height: 100,
                marginBottom: 5,
                marginTop: 4,
                borderRadius: 5,
                marginRight: 20,
                marginLeft: 5,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "800",
                width: "80%",
                textAlign: "center",
                marginBottom: 20,
                color: "green",
              }}
            >
              Thank You {userData?.fullName}!
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                width: "80%",
                textAlign: "center",
              }}
            >
              Your Order Successfully accepted by the Ration shopkeeper.
            </Text>
          </View>

          <CustomerDetails userData={userData} />

          <OrderDetails cart={cart} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ThankyouPage;
