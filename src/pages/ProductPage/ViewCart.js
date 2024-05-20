import React from "react";
import { useState } from "react";
import { Text, TouchableOpacity, View, Modal, ScrollView } from "react-native";
import { pushOrderDataToDb } from "../data/pushData";

const ViewCart = ({ navigation, cart, userData }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      {+cart?.totalPrice !== 0 && cart?.totalPrice !== "NaN" ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            setModalShow(true);
          }}
          style={{
            alignItems: "center",
            position: "absolute",
            alignSelf: "center",
            bottom: 30,
            zIndex: 999,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "black",
              borderRadius: 30,
              width: 200,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                paddingVertical: 15,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              ViewCart{" "}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}

      <Modal
        animationType="slide"
        visible={modalShow}
        transparent={true}
        onRequestClose={() => {
          setModalShow(false);
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setModalShow(false);
          }}
        >
          <View
            style={{
              height: 1000,
              position: "absolute",
              width: "100%",
              zIndex: 1,
              backgroundColor: "black",
              opacity: 0.5,
            }}
          ></View>
        </TouchableOpacity>
        <View
          style={{
            minHeight: 450,
            maxHeight: 500,
            backgroundColor: "white",
            position: "absolute",
            width: "100%",
            bottom: 0,
            zIndex: 5,
            boxShadow: "100 100 100 grey",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 15,
            }}
          >
            Cart
          </Text>
          <ScrollView>
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
                    paddingBottom: 15,
                    paddingHorizontal: 15,
                  }}
                >
                  <Text
                    style={{ width: "50%", fontSize: 15, fontWeight: "700" }}
                  >
                    {data?.name}
                  </Text>
                  <Text style={{ width: "15%", fontSize: 15 }}>
                    {data?.quantity}
                  </Text>
                  <Text style={{ fontSize: 15 }}>
                    ₹{parseFloat(data?.price)}
                  </Text>
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
                paddingBottom: 15,
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
            <TouchableOpacity
              onPress={() => {
                setModalShow(false);
                navigation.navigate("ThankyouPage", {
                  cart: cart,
                  userData: userData,
                });
                pushOrderDataToDb("orderData", {
                  userData: userData,
                  cartData: cart,
                });
              }}
            >
              <View
                style={{
                  backgroundColor: "black",
                  borderRadius: 30,
                  width: 200,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    paddingVertical: 15,
                    fontSize: 17,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Place Order
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default ViewCart;
