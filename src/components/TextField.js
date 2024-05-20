import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

function TextField({
  onChange = () => {},
  value,
  label,
  type,
  placeholder = "",
  error = "",
  disable = "false",
  maxValue = "",
}) {
  return (
    <View style={style.container}>
      {label && <Text style={style.label}>{label} :</Text>}
      <CustomInput
        style={style.inputBox}
        onChangeText={(e) => {
          onChange && onChange(e);
        }}
        value={value}
        maxLength={maxValue}
        placeholder={placeholder}
        keyboardType={type}
        error={error}
        placeholderTextColor="#777"
        disable={disable}
        TextInput={disable}
      />
      {error && <Text style={style.error}>{error}</Text>}
    </View>
  );
}

export default TextField;

const style = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 3,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  inputBox: {
    width: "96%",
    backgroundColor: "#fff",
    height: 50,
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    color: "#77777",
  },
  label: {
    marginLeft: "2%",
    fontSize: 16,
    marginBottom: 5,
  },
  error: {
    marginLeft: "2%",
    marginTop: 2,
    fontSize: 14,
    color: "red",
  },
});

const CustomInput = styled.TextInput`
  border: 1px solid ${(prop) => (prop.error ? "red" : "#777")};
`;
