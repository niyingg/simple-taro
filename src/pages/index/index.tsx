import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
// import { functionA } from "./test.js";
import { func } from "lottiecomp";
import "./index.scss";

// functionA();
export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
    console.log(func(true)());
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
    </View>
  );
}
