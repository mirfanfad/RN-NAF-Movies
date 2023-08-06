import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	TouchableWithoutFeedback,
	Dimensions,
} from "react-native";
import React from "react";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

var { height, width } = Dimensions.get("window");

export default function MovieList({ title, data, hideSeeAll }) {
	let movieName = "Ant-Man and the Wasp: Quantumania";
	const navigation = useNavigation();
	return (
		<View className="mb-8 space-y-4">
			<View className="flex-row items-center justify-between mx-4">
				<Text className="text-xl text-white">{title}</Text>
				{!hideSeeAll && (
					<TouchableOpacity>
						<Text style={styles.text} className="text-lg">
							See All
						</Text>
					</TouchableOpacity>
				)}
			</View>

			{/* movie row */}
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 15 }}
			>
				{data.map((item, index) => (
					<TouchableWithoutFeedback
						key={index}
						onPress={() => {
							navigation.navigate("Movie", item);
						}}
					>
						<View className="mr-4 space-y-2">
							<Image
								source={require("../assets/images/moviePoster2.png")}
								style={{
									width: width * 0.33,
									height: height * 0.22,
								}}
								className="rounded-xl"
							/>
							<Text className="ml-1 text-neutral-300">
								{movieName.length > 14
									? movieName.slice(0, 14) + "..."
									: movieName}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				))}
			</ScrollView>
		</View>
	);
}
