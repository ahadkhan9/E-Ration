import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { HeaderMainPage } from "../mainPageComp/HeaderMainPage";
import ShopkeeperOrderBox from "./ShopkeeperOrderBox";
import { getOrderDataFirebase } from "../data/getData";
import { ActivityIndicator } from "react-native";

function ShopkeeperProductPage({ navigation, route }) {
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getOrderDataFirebase("orderData", setOrderData, setIsLoading);
  }, []);

  console.log(orderData);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{
          backgroundColor: "white",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator
          style={{ marginLeft: 10, paddingBottom: 5 }}
          size="large"
          color="#777"
        />
      </SafeAreaView>
    );
  }

  if (!isLoading) {
    return (
      <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
        <HeaderMainPage otherPage={true} />
        <ShopkeeperOrderBox orderData={orderData} navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default ShopkeeperProductPage;
