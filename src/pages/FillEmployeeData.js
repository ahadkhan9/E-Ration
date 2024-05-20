import { useEffect } from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import DatePicker from "react-native-datepicker";
import ButtonCustom from "../components/ButtonCustom";
import CustomModal from "../components/CustomModal";
import TextField from "../components/TextField";
import { aadhaarCardValidation, mobileValitaion } from "../Validations";
import { pushDataToDb } from "./data/pushData";
import { employeeDataSchema } from "./data/schemaData";
import { HeaderMainPage } from "./mainPageComp/HeaderMainPage";
import { HeaderTop } from "./mainPageComp/mainPage.style";

function FillEmployeeData({ navigation }) {
  const [newEmployeeData, setNewEmployeeData] = useState({
    fullName: "",
    aadhaarCard: "",
    address1: "",
    address2: "",
    pinCode: "",
    mobileNo: "",
  });

  const [error, setError] = useState({
    fullName: "",
    aadhaarCard: "",
    address1: "",
    address2: "",
    pinCode: "",
    mobileNo: "",
  });

  const [dataStatus, setDataStatus] = useState("");

  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    if (dataStatus?.status === "successful") {
      setVisibleModal(true);
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

  return (
    <>
      {/* Top Header ======> */}
      <HeaderTop />
      <HeaderMainPage navigation={navigation} />
      {/* =======> */}
      <KeyboardAvoidingView behavior="padding" style={style.container}>
        <ScrollView contentContainerStyle={style.scrollView} width="100%">
          <Text style={style.loginText}>Create New Employee</Text>
          <View style={style.content}>
            {/* Schema====> */}
            {employeeDataSchema.map((schema, idx) => {
              return (
                <TextField
                  key={idx}
                  label={schema.label}
                  type={schema.type}
                  placeholder={schema.placeholder}
                  value={newEmployeeData[schema?.key]}
                  maxValue={
                    schema.key === "mobileNo"
                      ? 10
                      : schema.key === "aadhaarCard"
                      ? 12
                      : schema.key === "pinCode"
                      ? 6
                      : 30
                  }
                  error={error[schema?.key]}
                  onChange={(e) => {
                    //set error as null when user enter another value
                    if (error[schema?.key]) {
                      if (e !== newEmployeeData[schema?.key]) {
                        setError((prev) => {
                          let temp = {};
                          temp[schema.key] = "";
                          return { ...prev, ...temp };
                        });
                      }
                    }
                    setNewEmployeeData((prev) => {
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
                if (!mobileValitaion(newEmployeeData?.mobileNo)) {
                  setError((prev) => {
                    return {
                      ...prev,
                      mobileNo: "Please enter the 10 digit No",
                    };
                  });
                }
                if (!aadhaarCardValidation(newEmployeeData.aadhaarCard)) {
                  setError((prev) => {
                    return {
                      ...prev,
                      aadhaarCard: "Please enter valid Aadhaar Card No",
                    };
                  });
                }

                Object.keys(newEmployeeData)?.map((dataKey) => {
                  if (dataKey !== "aadhaarCard" || dataKey !== "mobileNo") {
                    if (newEmployeeData[dataKey] === "") {
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
                    error.aadhaarCard ||
                    error.address1 ||
                    error.address2 ||
                    error.fatherHusbandName ||
                    error.fullName ||
                    error.mobileNo ||
                    error.pinCode
                  )
                ) {
                  pushDataToDb("employeeData", newEmployeeData, setDataStatus);
                  setNewEmployeeData([]);
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

export default FillEmployeeData;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
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
});
