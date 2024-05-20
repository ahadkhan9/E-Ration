import styled from "styled-components/native";

export const MainContainer = styled.View`
  /* margin-top: 20px; */
  height: 100%;
`;

export const ImageContainer = styled.View`
  width: 100%;
  background-color: #eee;
  align-self: center;
  overflow: hidden;
  border-radius: 4px;
  /* margin-top: 10px; */
`;

export const ImageDot = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  z-index: 1;
  position: relative;
  margin-top: 5px;
  /* margin-bottom: 5px; */
`;

export const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 400px;
`;

export const HeaderTop = styled.View`
  background-color: #fff;
  width: 100%;
  height: 100px;
  position: absolute;
  top: -80px;
`;

export const ImgContainer = styled.View`
  background-color: #eee;
  width: 100%;
  padding-top: 8px;
  width: 96%;
  align-self: center;
  border-radius: 8px;
  margin-top: -10px;
  height: 100%;
`;

export const ImageBar = styled.View`
  width: ${(prop) => (prop.isSelected ? "15px" : "8px")};
  height: 8px;
  border-radius: 20px;
  background-color: ${(prop) => prop.color};
  align-self: center;
  margin-left: 5px;
  margin-right: 5px;
`;

export const StackView = styled.ScrollView`
  /* margin-top: 20px; */
  background-color: #fff;
  height: 100%;
  padding: 0px;
`;
