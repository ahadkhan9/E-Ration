import React from "react";
import { SafeAreaView } from "react-native";
import { MainContainer } from "./mainPageComp/mainPage.style";
import MainPageContent from "./mainPageComp/MainPageContent";
import LoginPage from "./LoginPage";
import EmployeeLoginPage from "./EmployeeLoginPage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FillUserData from "./FillUserData";
import FillEmployeeData from "./FillEmployeeData";

function MainPage() {
  const Drawer = createDrawerNavigator();

  const DrawerItems = [
    {
      name: "home",
      Name: "Home",
    },
    {
      name: "loginPage",
      Name: "Customer Login",
    },
    {
      name: "employeeLoginPage",
      Name: "Employee Login",
    },
    {
      name: "createNewCustomer",
      Name: "Create New Customer",
    },
    {
      name: "createNewEmployee",
      Name: "Create New Employee",
    },
  ];

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
      }}
    >
      <MainContainer>
        {/* <MainPageStack.Navigator screenOptions={{ headerShown: false }}>
          <MainPageStack.Screen name="home" component={MainPageContent} />
          <MainPageStack.Screen name="loginPage" component={LoginPage} />
          <MainPageStack.Screen
            name="employeeLoginPage"
            component={EmployeeLoginPage}
          />
        </MainPageStack.Navigator> */}

        <Drawer.Navigator
          drawerType="front"
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
            overlayColor: 0.5,
            drawerStyle: {
              backgroundColor: "#fff",
              width: 250,
            },
            drawerLabelStyle: {
              color: "black",
              fontSize: 17,
              fontWeight: "600",
            },
          }}
        >
          {DrawerItems.map((drawer) => (
            <Drawer.Screen
              key={drawer.name}
              name={drawer.Name}
              component={
                drawer.name === "home"
                  ? MainPageContent
                  : drawer.name === "loginPage"
                  ? LoginPage
                  : drawer.name === "employeeLoginPage"
                  ? EmployeeLoginPage
                  : drawer.name === "createNewCustomer"
                  ? FillUserData
                  : drawer.name === "createNewEmployee"
                  ? FillEmployeeData
                  : MainPageContent
              }
            />
          ))}
        </Drawer.Navigator>
      </MainContainer>
    </SafeAreaView>
  );
}

export default MainPage;
