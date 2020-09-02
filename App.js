import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import { TouchableHighlight } from "react-native-gesture-handler";
import ListItemDeleteAction from "./app/components/ListItemDeleteAction";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  // const [category, setCategory] = useState(categories[0]);
  return (
    //<ViewImageScreen />
    // <MessagesScreen />
    //<AccountScreen />
    // <ListingsScreen />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput placeholder="Username" icon="email" />
    // </Screen>
    <Screen>
      {/* <ListItem
        title="Test new sgsdgsdg sgdsg ssdgsdg sg sgsd sdggs snbgfsdhbgfhsdfsd sdhgfhdsfds sdgfhsdgfsd fgbsdhfgsd fsd fhdsgfhdsbf sdghfhsdfds fhdsgfsd fsdbhfsd fvbshdvbf  dsbj  jsdgvfjsdv fb sdfv sdhf sdjfgbjsdbfnds fjsdgfsd fjnsdbfujsdfndsb fnsdbfjsdvf"
        subTitle="New subtitle dvfdsafbsdkfjbskdfnksdjfksd bsdkjfbsdjn fs dfsdkfbsdkbfjsdbf sdbfjdsbfnsd  kjsdfns dfsdfbskdfbksdf dksjfsdkbfkds sdkjfsdkbf dskfjbnsdkf dskfjsdk skdfsdkb sdkfndskbf sdkfjdsk "
        image={require("./app/assets/protik.jpg")}
        onPress={() => console.log}
        renderRightActions={ListItemDeleteAction}
      /> */}
      {/* <ListingEditScreen /> */}

      {/* <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );
}
