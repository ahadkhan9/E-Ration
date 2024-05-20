import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import TextField from "../components/TextField";
import { customerDataSchema } from "./data/schemaData";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";
import { HeaderTop } from "./mainPageComp/mainPage.style";
import React, { useEffect, useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { aadhaarCardValidation, mobileValitaion } from "../Validations";
import { KeyboardAvoidingView } from "react-native";
import { pushDataToDb } from "./data/pushData";
import CustomModal from "../components/CustomModal";

function FillUserData({ navigation, route }) {
  const [newCustomerData, setNewCustomerData] = useState({
    fullName: "",
    fatherHusbandName: "",
    aadhaarCard: "",
    dob: "",
    address1: "",
    address2: "",
    pinCode: "",
    mobileNo: "",
    faceData: {},
  });

  const faceData = route?.params?.faceData ? route?.params?.faceData : {};

  const [dataStatus, setDataStatus] = useState("");

  const [error, setError] = useState({
    fullName: "",
    fatherHusbandName: "",
    aadhaarCard: "",
    dob: "",
    address1: "",
    address2: "",
    pinCode: "",
    mobileNo: "",
    faceData: "",
  });

  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    if (dataStatus?.status === "successful") {
      setVisibleModal(true);
      setNewCustomerData([]);
      setTimeout(() => {
        setVisibleModal(false);
        setDataStatus("");
      }, 1000);
    } else if (dataStatus?.status === "unsuccessful") {
      setVisibleModal(true);
      setTimeout(() => {
        setVisibleModal(false);
        setDataStatus("");
      }, 1000);
    }
  }, [dataStatus]);

  console.log(faceData);

  return (
    <>
      {/* Top Header ======> */}
      <HeaderTop />
      <HeaderMainPage navigation={navigation} />
      {/* =======> */}
      <KeyboardAvoidingView behavior="padding" style={style.container}>
        <ScrollView contentContainerStyle={style.scrollView} width="100%">
          <Text style={style.loginText}>Create New Customer</Text>
          <View style={style.content}>
            {/* Schema====> */}
            {customerDataSchema.map((schema, idx) => {
              return schema.type === "date" ? (
                <View key={idx} style={{ width: "90%" }}>
                  <View style={style.datePickerStyle}>
                    <Text style={{ fontSize: 16 }}>Date of Birth * :</Text>
                    {/* <RNDateTimePicker
                      value={
                        newCustomerData?.dob ? newCustomerData?.dob : new Date()
                      }
                      onChange={(e, value) => {
                        // let date = JSON.stringify(value).split("T")[0];
                        // date = date.slice(1);
                        setNewCustomerData((prev) => ({ ...prev, dob: value }));
                        setError((prev) => ({ ...prev, dob: "" }));
                      }}
                      mode="date"
                      dateFormat="dayofweek day month"
                      maximumDate={new Date()}
                      positiveButton={{ label: "OK", textColor: "green" }}
                      themeVariant="light"
                      display="default"
                    /> */}
                  </View>
                  {error?.dob && (
                    <Text style={{ color: "red", textAlign: "left" }}>
                      {error.dob}
                    </Text>
                  )}
                </View>
              ) : schema.type === "FaceDetection" ? (
                <View key={idx} style={{ width: "90%" }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      ...style.datePickerStyle,
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>Take Face Image * :</Text>
                    <TouchableOpacity
                      style={{ marginVertical: 10, alignSelf: "center" }}
                      onPress={() => {
                        setError((prev) => {
                          return {
                            ...prev,
                            faceData: "",
                          };
                        });
                        navigation.navigate("FaceDetection", {
                          returnPage: "Create New Customer",
                        });
                      }}
                    >
                      <View
                        style={{
                          minWidth: 70,
                          paddingHorizontal: 7,
                          paddingVertical: 6,
                          backgroundColor: newCustomerData?.faceData?.faceID
                            ? "lightgreen"
                            : "white",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 5,
                          marginRight: 30,
                        }}
                      >
                        <Text style={{ fontSize: 17, fontWeight: "500" }}>
                          Take Image
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  {faceData?.imageUri && (
                    <Image
                      source={{ uri: faceData?.imageUri }}
                      style={{
                        flex: 1,
                        width: 100,
                        height: 100,
                        alignSelf: "flex-end",
                        marginRight: 55,
                      }}
                    />
                  )}
                  {error?.faceData && (
                    <Text style={{ color: "red", textAlign: "left" }}>
                      {error.faceData}
                    </Text>
                  )}
                </View>
              ) : (
                <TextField
                  key={idx}
                  label={schema.label}
                  type={schema.type}
                  maxValue={
                    schema.key === "mobileNo"
                      ? 10
                      : schema.key === "aadhaarCard"
                      ? 12
                      : schema.key === "pinCode"
                      ? 6
                      : 30
                  }
                  placeholder={schema.placeholder}
                  value={newCustomerData[schema?.key]}
                  error={error[schema?.key]}
                  onChange={(e) => {
                    if (error[schema?.key]) {
                      if (e !== newCustomerData[schema?.key]) {
                        setError((prev) => {
                          let temp = {};
                          temp[schema.key] = "";
                          return { ...prev, ...temp };
                        });
                      }
                    }
                    setNewCustomerData((prev) => {
                      let temp = {};
                      temp[schema.key] = e;
                      return { ...prev, ...temp };
                    });
                  }}
                />
              );
            })}
            {/* ======> */}

            <ButtonCustom
              style={{ marginBottom: 20, marginTop: 10 }}
              title="Create"
              onClick={() => {
                if (!mobileValitaion(newCustomerData?.mobileNo)) {
                  setError((prev) => {
                    return {
                      ...prev,
                      mobileNo: "Please enter the 10 digit No",
                    };
                  });
                }
                if (!aadhaarCardValidation(newCustomerData.aadhaarCard)) {
                  setError((prev) => {
                    return {
                      ...prev,
                      aadhaarCard: "Please enter valid Aadhaar Card No",
                    };
                  });
                }

                Object.keys(newCustomerData)?.map((dataKey) => {
                  if (dataKey !== "aadhaarCard" || dataKey !== "mobileNo") {
                    if (newCustomerData[dataKey] === "") {
                      setError((prev) => {
                        let temp = {};
                        temp[dataKey] = "This field is required.";
                        return { ...prev, ...temp };
                      });
                    }
                  }
                  if (dataKey === "faceData") {
                    if (!(faceData?.faceID || faceData)) {
                      setError((prev) => {
                        let temp = {};
                        temp[dataKey] = "This field is required.";
                        return { ...prev, ...temp };
                      });
                    }
                  }
                });

                if (
                  !(
                    newCustomerData.fullName === "" ||
                    newCustomerData.fatherHusbandName === "" ||
                    newCustomerData.aadhaarCard === "" ||
                  //  newCustomerData.dob === "" ||
                    newCustomerData.address1 === "" ||
                    newCustomerData.address2 === "" ||
                    newCustomerData.pinCode === "" ||
                    newCustomerData.mobileNo === "" 
                   // newCustomerData.faceData.imageUri === ""
                  )
                ) {
                  pushDataToDb(
                    "userData",
                    { ...newCustomerData, faceData },
                    setDataStatus
                  );
                }
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {visibleModal && (
        <CustomModal dataStatus={dataStatus} visibleModal={visibleModal} />
      )}
    </>
  );
}

export default FillUserData;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "top",
  },
  content: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  scrollView: {
    width: "95%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#eee",
    paddingVertical: 10,
    borderRadius: 10,
  },
  loginText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  datePickerStyle: {
    width: "92%",
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
