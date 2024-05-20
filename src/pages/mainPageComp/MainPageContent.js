import { useEffect, useState } from "react";
import { Image, ImageBackground } from "react-native";
import { imageComp } from "../../assets/ImageComp";
import ButtonCustom from "../../components/ButtonCustom";
import { HeaderMainPage } from "./HeaderMainPage";
import {
  ButtonContainer,
  HeaderTop,
  ImageBar,
  ImageContainer,
  ImageDot,
  ImgContainer,
  StackView,
} from "./mainPage.style";

function MainPageContent({ navigation }) {
  const [imageSelect, setImageSelect] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSelect((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <StackView>
      {/* Top Header ======> */}
      <HeaderTop />
      <HeaderMainPage navigation={navigation} />
      {/* =======> */}

      <ImgContainer>
        <ImageContainer>
          <ImageBackground
            style={{ width: "100%", height: 670 }}
            resizeMode="cover"
            source={imageComp[`${imageSelect + 1}`]}
          >
            <ButtonContainer>
              <ButtonCustom
                style={{ marginBottom: 30, marginTop: 20 }}
                title="Customer Login"
                onClick={() => {
                  navigation.navigate("Customer Login");
                }}
              />
              <ButtonCustom
                title="Employee Login"
                onClick={() => {
                  navigation.navigate("Employee Login");
                }}
              />
            </ButtonContainer>
          </ImageBackground>
        </ImageContainer>
        <ImageDot>
          <ImageBar
            color={imageSelect === 0 ? "#777" : "white"}
            isSelected={imageSelect === 0}
          />
          <ImageBar
            color={imageSelect === 1 ? "#777" : "white"}
            isSelected={imageSelect === 1}
          />
        </ImageDot>
      </ImgContainer>
    </StackView>
  );
}

export default MainPageContent;
