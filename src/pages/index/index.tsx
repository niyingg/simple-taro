import { View, Text, Lottie } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
// import { functionA } from "./test.js";
// import { func } from "lottiecomp";
import LottieWarp, { version1 } from "lottiecomp";
import "./index.scss";

// functionA();
export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
    // console.log(func(true)());
    console.log(version1);
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <LottieWarp />
    </View>
  );
}

Lottie;
