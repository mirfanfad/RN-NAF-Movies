import {
	View,
	Text,
	Dimensions,
	TextInput,
	TouchableOpacity,
	ScrollView,
	TouchableWithoutFeedback,
	Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";

const { height, width } = Dimensions.get("window");

export default function SearchScreen() {
	const navigation = useNavigation();
	const [results, setResults] = useState([]);

	const [loading, setLoading] = useState(false);

	const movieName = "Ant-Man and the Wasp : Quantumania";
	return (
		<SafeAreaView className="flex-1 bg-neutral-800">
			<View className="flex-row items-center justify-between mx-4 mb-3 border rounded-full border-neutral-500">
				<TextInput
					className="flex-1 pb-1 pl-6 text-base font-semibold tracking-wider text-white"
					placeholder="Search Movie"
					placeholderTextColor="lightgray"
					style={{ height: 40 }}
				/>
				<TouchableOpacity
					className="p-3 m-1 rounded-full bg-neutral-500"
					onPress={() => navigation.navigate("Home")}
				>
					<XMarkIcon size="25" color="white" />
				</TouchableOpacity>
			</View>

			{/* result movies */}
			{loading ? (
				<Loading />
			) : results.length > 0 ? (
				<ScrollView
					showsVerticalScrollIndicator={false}
					className="mt-2 space-y-3"
					contentContainerStyle={{ paddingHorizontal: 15 }}
				>
					<Text className="ml-1 font-semibold text-white">
						Result ({results.length})
					</Text>
					<View className="flex-row flex-wrap justify-between">
						{results.map((item, index) => {
							return (
								<TouchableWithoutFeedback
									key={index}
									onPress={() => {
										navigation.navigate("Movie", item);
									}}
								>
									<View className="mb-4 space-y-2">
										<Image
											source={require("../assets/images/moviePoster2.png")}
											style={{
												width: width * 0.44,
												height: height * 0.3,
											}}
											className="rounded-xl"
										/>
										<Text className="ml-1 text-neutral-300">
											{movieName.length > 20
												? movieName.slice(0, 20) + "..."
												: movieName}
										</Text>
									</View>
								</TouchableWithoutFeedback>
							);
						})}
					</View>
				</ScrollView>
			) : (
				<>
					<View className="flex-row justify-center">
						<Image
							source={require("../assets/images/movieTime.png")}
							className="w-96 h-96"
						/>
					</View>
					<Text className="text-2xl font-semibold text-center text-white">
						No Results Found
					</Text>
				</>
			)}
		</SafeAreaView>
	);
}
