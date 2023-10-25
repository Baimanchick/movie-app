import { View, Text, Dimensions, Platform } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { theme } from "../theme";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function Loading() {
  return (
    <View
      style={{ height, width }}
      className="absolute flex-row justify-center items-center"
    >
      <Progress.CircleSnail
        thickness={12}
        size={160}
        color={theme.background}
      />
    </View>
  );
}
