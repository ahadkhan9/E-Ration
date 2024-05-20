import React from "react";
import { Text, View } from "react-native";

const CustomerDetails = ({ userData }) => {
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
        Customer Details :
      </Text>
      <View
        style={{
          backgroundColor: "#eee",
          width: "88%",
          borderRadius: 10,
          alignSelf: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              width: "35%",
            }}
          >
            Name :
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginLeft: 5,
            }}
          >
            {userData?.fullName}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              width: "35%",
            }}
          >
            Father Name :
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginLeft: 5,
            }}
          >
            {userData?.fatherHusbandName}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              width: "35%",
            }}
          >
            Address :
          </Text>
          <View style={{ display: "flex" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                marginLeft: 5,
              }}
            >
              {userData?.address1}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                marginLeft: 5,
                marginTop: 2,
              }}
            >
              {userData?.address2}
            </Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              width: "35%",
            }}
          >
            Mobile No. :
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginLeft: 5,
            }}
          >
            +91 {userData?.mobileNo}
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              width: "35%",
            }}
          >
            Pin Code :
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              marginLeft: 5,
            }}
          >
            {userData?.pinCode}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomerDetails;
