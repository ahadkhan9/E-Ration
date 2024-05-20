import React from "react";
import { Text, View } from "react-native";

function OrderDetails({ cart }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          marginLeft: 20,
          marginVertical: 10,
          marginTop: 30,
        }}
      >
        Order Details :
      </Text>
      <View
        style={{
          backgroundColor: "#eee",
          width: "88%",
          borderRadius: 10,
          alignSelf: "center",
        }}
      >
        {cart.items?.map((data, idx) => {
          return (
            <View
              key={idx}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
                marginHorizontal: 15,
                borderBottomWidth: 1,
                borderColor: "#777",
                paddingBottom: 8,
                paddingHorizontal: 5,
                paddingTop: 9,
              }}
            >
              <Text style={{ width: "50%", fontSize: 15, fontWeight: "700" }}>
                {data?.name}
              </Text>
              <Text style={{ width: "15%", fontSize: 15 }}>
                {data?.quantity}
              </Text>
              <Text style={{ fontSize: 15 }}>₹{parseFloat(data?.price)}</Text>
            </View>
          );
        })}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
            marginHorizontal: 15,
            paddingBottom: 10,
            paddingHorizontal: 2,
          }}
        >
          <Text style={{ width: "50%", fontSize: 18, fontWeight: "bold" }}>
            Total
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            ₹{cart.totalPrice}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default OrderDetails;
