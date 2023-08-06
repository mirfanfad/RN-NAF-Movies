import { View, Text, Dimensions } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

const { height, width } = Dimensions.get("window");

export default function Loading() {
	return (
		<View
			style={{ height, width }}
			className="absolute flex-row items-center justify-center"
		>
			<Progress.CircleSnail
				color={["#F24F04", "#F2CB04", "#04F2B6", "#04A6F2", "#F204E7"]}
				size={width * 0.4}
				thickness={8}
			/>
		</View>
	);
}
