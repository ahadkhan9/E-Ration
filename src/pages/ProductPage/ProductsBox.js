import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

function ProductsBox({ setCart, item }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ marginBottom: 10, alignItems: "center" }}
    >
      <View
        style={{
          marginTop: 10,
          padding: 5,
          backgroundColor: "#eee",
          borderRadius: 5,
          width: "90%",
        }}
      >
        <Product item={item} setCart={setCart} />
      </View>
    </TouchableOpacity>
  );
}

export default ProductsBox;

const Product = ({ item, setCart }) => {
  const [addCart, SetAddCart] = useState("Add");
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Image
        source={{
          uri: item.image,
        }}
        style={{
          width: "25%",
          height: 90,
          marginBottom: 5,
          marginTop: 4,
          borderRadius: 5,
          marginRight: 20,
          marginLeft: 5,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "53%", alignItems: "flex-start" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 14, color: "grey", marginVertical: 4 }}>
            Cost : ₹{item.price}
          </Text>
          <Text style={{ fontSize: 14, color: "grey" }}>
            Quantity : {item.quantity}
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ marginVertical: 10, alignSelf: "center" }}
            onPress={() => {
              if (addCart == "Add") {
                SetAddCart("Added");
                setCart((prev) => {
                  let items = [...prev.items, item];
                  let price = +prev.totalPrice + +item.price;
                  return { items: items, totalPrice: price };
                });
              } else {
                SetAddCart("Add");
                setCart((prev) => {
                  let items = [];
                  prev?.items?.map((it) => {
                    if (it.name !== item.name) {
                      items = [...items, it];
                    }
                  });
                  let price = +prev.totalPrice - +item.price;
                  return { items: items, totalPrice: price };
                });
              }
            }}
          >
            <View
              style={{
                minWidth: 70,
                paddingHorizontal: 7,
                paddingVertical: 6,
                backgroundColor: addCart === "Added" ? "lightgreen" : "white",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "500" }}>{addCart}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
