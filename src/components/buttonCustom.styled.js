import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  min-width: 80px;
  background-color: #0280fa;
  padding: 8px 10px;
  border-radius: 5px;
  ${(prop) => prop.customCss};
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 500;
`;
