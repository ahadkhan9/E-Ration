import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import CustomModal from "../components/CustomModal";
import TextField from "../components/TextField";
import { getDataFirebase } from "./data/getData";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";
import { HeaderTop } from "./mainPageComp/mainPage.style";

function EmployeeLoginPage({ navigation }) {
  const [data, setData] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    mobileNo: "",
    aadharNo: "",
  });
  const [error, setError] = useState({
    mobileNoError: "",
    aadharNoError: "",
  });

  useEffect(() => {
    if (data && data !== "Data Not Found") {
      navigation.navigate("ShopkeeperProductPage", { userData: data });
    } else if (data === "Data Not Found") {
      setVisibleModal(true);
      setTimeout(() => {
        setVisibleModal(false);
      }, 3000);
    }
  }, [data]);

  return (
    <>
      {/* Top Header ======> */}
      <HeaderTop />
      <HeaderMainPage navigation={navigation} />
      {/* =======> */}
      <View style={style.container}>
        <View style={style.content}>
          <Text style={style.loginText}>Employee Login</Text>
          <TextField
            label="Aadhaar Card"
            type="numeric"
            placeholder="Aadhaar Card No."
            maxValue={12}
            error={error.aadharNoError}
            value={userData.aadharNo}
            onChange={(e) => {
              //set error as null when uer enter the value again
              if (error?.aadharNoError) {
                if (e !== userData.aadharNo) {
                  setError((prev) => {
                    return { ...prev, aadharNoError: "" };
                  });
                }
              }
              if (+e.length <= 12)
                setUserData((prev) => {
                  return { ...prev, aadharNo: e };
                });
            }}
          />
          <TextField
            label="Mobile Number"
            type="numeric"
            placeholder="Mobile No."
            error={error.mobileNoError}
            value={userData.mobileNo}
            maxValue={10}
            onChange={(e) => {
              //set error as null when user enter a new data
              if (error?.mobileNoError) {
                if (e !== userData.mobileNo) {
                  setError((prev) => {
                    return { ...prev, mobileNoError: "" };
                  });
                }
              }
              if (+e.length <= 10)
                setUserData((prev) => {
                  return { ...prev, mobileNo: e };
                });
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Create New Employee")}
          >
            <Text style={{ color: "#0280fa", marginVertical: 10 }}>
              Create New Account?
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ButtonCustom
              style={{ marginBottom: 20, marginTop: 10 }}
              title="Login"
              onClick={() => {
                if (userData.aadharNo.length < 12) {
                  setError((prev) => {
                    return {
                      ...prev,
                      aadharNoError: "Enter the 12 digit Aadhaar no.",
                    };
                  });
                }
                if (userData.mobileNo.length < 10) {
                  setError((prev) => {
                    return {
                      ...prev,
                      mobileNoError: "Enter the 10 digit Mobile no.",
                    };
                  });
                }

                //get data from firebase
                if (
                  error.aadharNoError === "" &&
                  error.mobileNoError === "" &&
                  userData.aadharNo &&
                  userData.mobileNo
                ) {
                  getDataFirebase(
                    "employeeData",
                    userData.aadharNo,
                    setData,
                    setLoading
                  );
                }
              }}
            />

            {loading && (
              <ActivityIndicator
                style={{ marginLeft: 10, paddingBottom: 5 }}
                size="large"
                color="#777"
              />
            )}
          </View>
        </View>
      </View>
      {visibleModal && (
        <CustomModal
          dataStatus=""
          visibleModal={visibleModal}
          errorShow="Account Not Found"
        />
      )}
    </>
  );
}

export default EmployeeLoginPage;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#eee",
    width: "90%",
    minHeight: "45%",
    marginBottom: "40%",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  loginText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
