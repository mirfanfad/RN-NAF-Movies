import {
	View,
	Text,
	Dimensions,
	Platform,
	ScrollView,
	TouchableOpacity,
	Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { styles, theme } from "../theme";
import MovieList from "../components/movieList";
import Loading from "../components/loading";

const { height, width } = Dimensions.get("window");
const ios = Platform.OS === "ios";

const verticalMargin = ios ? "" : "my-3";

export default function PersonScreen() {
	const navigation = useNavigation();
	const [isFavorite, setIsFavorite] = useState(false);

	const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5]);

	const [loading, setLoading] = useState(false);
	return (
		<ScrollView
			className="flex-1 bg-neutral-900"
			contentContainerStyle={{ paddingBottom: 20 }}
		>
			{/* back button */}
			<SafeAreaView
				className={
					"z-20 flex-row items-center justify-between w-full px-4 " +
					verticalMargin
				}
			>
				<TouchableOpacity
					className="p-1 rounded-xl"
					onPress={() => navigation.goBack()}
				>
					<ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
					<HeartIcon size="35" color={isFavorite ? "red" : "white"} />
				</TouchableOpacity>
			</SafeAreaView>

			{/* person profile */}

			{loading ? (
				<Loading />
			) : (
				<View>
					<View
						className="flex-row justify-center"
						style={{
							shadowColor: "gray",
							shadowRadius: 40,
							shadowOffset: { width: 0, height: 5 },
							shadowOpacity: 1,
						}}
					>
						<View className="items-center overflow-hidden border-2 rounded-full h-72 w-72 border-neutral-500">
							<Image
								source={require("../assets/images/castImage2.png")}
								style={{
									height: height * 0.43,
									width: width * 0.74,
								}}
							/>
						</View>
					</View>
					<View className="mt-6">
						<Text className="text-2xl font-bold text-center text-neutral-100">
							Keanu Reeves
						</Text>
						<Text className="text-base text-center text-neutral-500">
							London, United Kingdom
						</Text>
					</View>
					<View className="flex-row items-center justify-between p-4 mx-3 mt-6 rounded-full bg-neutral-700">
						<View className="items-center px-2 border-r-2 border-r-neutral-400">
							<Text className="font-semibold text-white">Gender</Text>
							<Text className="text-sm text-neutral-300">Male</Text>
						</View>
						<View className="items-center px-2 border-r-2 border-r-neutral-400">
							<Text className="font-semibold text-white">Birthday</Text>
							<Text className="text-sm text-neutral-300">1997-07-10</Text>
						</View>
						<View className="items-center px-2 border-r-2 border-r-neutral-400">
							<Text className="font-semibold text-white">Known for</Text>
							<Text className="text-sm text-neutral-300">Acting</Text>
						</View>
						<View className="items-center px-2">
							<Text className="font-semibold text-white">Popularity</Text>
							<Text className="text-sm text-neutral-300">64.77</Text>
						</View>
					</View>
					{/* Biography */}
					<View className="mx-4 my-6 space-y-2">
						<Text className="text-xl font-bold text-white">Biography</Text>
						<Text className="text-base tracking-wide text-neutral-300">
							Keanu Charles Reeves is a Canadian actor. Born in Beirut and
							raised in Toronto, Reeves began acting in theatre productions and
							in television films before making his feature film debut in
							Youngblood.
						</Text>
					</View>

					{/* Movies */}
					<MovieList title="Movies" hideSeeAll={true} data={personMovies} />
				</View>
			)}
		</ScrollView>
	);
}
