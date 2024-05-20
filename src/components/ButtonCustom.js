import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonContainer, ButtonText } from "./buttonCustom.styled";

function ButtonCustom({ title, customCss = {}, onClick = () => {}, ...prop }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick && onClick();
      }}
    >
      <ButtonContainer customCss={customCss} {...prop}>
        <ButtonText>{title}</ButtonText>
      </ButtonContainer>
    </TouchableOpacity>
  );
}

export default ButtonCustom;
