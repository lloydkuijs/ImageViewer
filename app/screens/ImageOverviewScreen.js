import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import { Card, ListItem, Button, Icon, Text } from "react-native-elements";
import Carousel from "react-native-snap-carousel";
import { Svg, Path } from "react-native-svg";

import * as objects from "../Objects";
import Theme from "../config/Theme";

const renderItem = ({ item }) => (
  <View>
    <Image style={styles.item} source={{ uri: item.url }} />
    <Text
      style={{
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
      }}
    >
      {item.name}
    </Text>
  </View>
);

function mobileScreen(navigation) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View
      style={{
        flex: 1,
        paddingTop: "10%",
      }}
    >
      <View
        style={{
          backgroundColor: Theme.colors.primary,
          height: 15,
          width: "100%",
          position: "absolute",
        }}
      />
      <Svg
        height={100}
        width="100%"
        viewBox="0 0 1440 320"
        style={{ position: "absolute", top: 0 }}
      >
        <Path
          fill={Theme.colors.primary}
          d="M0,192L34.3,170.7C68.6,149,137,107,206,101.3C274.3,96,343,128,411,122.7C480,117,549,75,617,96C685.7,117,754,203,823,218.7C891.4,235,960,181,1029,165.3C1097.1,149,1166,171,1234,149.3C1302.9,128,1371,64,1406,32L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        />
      </Svg>
      <Carousel
        sliderWidth={windowWidth}
        itemWidth={300}
        itemHeight={windowHeight}
        layout={"default"}
        data={objects.images}
        renderItem={renderItem}
        keyExtractor={(item) => item.url} // All urls are Imgur urls which are automatically unique
      />

      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 50,
          paddingRight: 50,
          marginBottom: 30,
        }}
      >
        <Button icon={<Icon name="favorite-border" />} type="outline" />
        <Button
          icon={<Icon name="share" />}
          type="outline"
          onPress={() => share}
        />
        <Button icon={<Icon name="delete" />} type="outline" />
      </View>
    </View>
  );
}
const ImageOverviewScreen = ({ navigation }) => {
  switch (Platform.OS) {
    case "ios":
    case "android":
      return mobileScreen(navigation);
    default:
      return <Text style={{ fontSize: 19 }}>Not supported UwU</Text>;
  }
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 15,
    height: 400,
    width: 300,
    alignSelf: "center",
  },
});

export default ImageOverviewScreen;
