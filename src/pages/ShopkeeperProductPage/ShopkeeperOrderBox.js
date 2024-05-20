import React, { useState } from "react";

import { Text, TouchableOpacity, View, ScrollView } from "react-native";

function ShopkeeperOrderBox({ orderData, navigation }) {
  return (
    <View
      activeOpacity={0.8}
      style={{ marginBottom: 10, alignItems: "center", paddingBottom: 60 }}
    >
      <ScrollView
        style={{
          width: "90%",
        }}
      >
        {orderData.map((item, idx) => {
          return (
            <View
              key={idx}
              style={{
                marginBottom: 10,
                backgroundColor: "#eee",
                marginTop: 10,
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Product item={item} navigation={navigation} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default ShopkeeperOrderBox;

const Product = ({ item, navigation }) => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: 5,
        }}
      >
        <View style={{ width: "69%", alignItems: "flex-start" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {item?.userData?.fullName}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                marginVertical: 4,
                marginRight: 4,
              }}
            >
              Address :
            </Text>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ fontSize: 14, color: "grey", marginVertical: 4 }}>
                {item?.userData?.address1}
              </Text>
              <Text style={{ fontSize: 14, color: "grey", marginVertical: 4 }}>
                {item?.userData?.address2}
              </Text>
            </View>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                marginVertical: 4,
                marginRight: 4,
              }}
            >
              Pin Code :
            </Text>
            <Text style={{ fontSize: 14, color: "grey", marginVertical: 4 }}>
              {item?.userData?.pinCode}
            </Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                marginVertical: 4,
                marginRight: 4,
              }}
            >
              Mobile No. :
            </Text>
            <Text style={{ fontSize: 14, color: "grey", marginVertical: 4 }}>
              {item?.userData?.mobileNo}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ marginVertical: 10, alignSelf: "center" }}
            onPress={() => {
              navigation.navigate("DeliveryPage", { oderDeliverData: item });
            }}
          >
            <View
              style={{
                minWidth: 70,
                paddingHorizontal: 7,
                paddingVertical: 6,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "500" }}>
                See Details
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
