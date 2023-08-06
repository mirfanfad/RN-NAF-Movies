import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	Platform,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/cast";
import MovieList from "../components/movieList";
import Loading from "../components/loading";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const topMargin = ios ? "" : "mt-3";

export default function MovieScreen() {
	const { params: item } = useRoute();
	const navigation = useNavigation();
	const [isFavorite, setIsFavorite] = useState(false);
	const [cast, setCast] = useState([1, 2, 3, 4, 5]);
	const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);

	const [loading, setLoading] = useState(false);

	const movieName = "Ant-Man and the Wasp : Quantumania";

	useEffect(() => {
		// call api movie detail
	}, [item]);
	return (
		<ScrollView
			contentContainerStyle={{
				paddingBottom: 20,
			}}
			className="flex-1 bg-neutral-900"
		>
			{/* back button & movie poster */}
			<View className="w-full">
				<SafeAreaView
					className={
						"absolute z-20 flex-row items-center justify-between w-full px-4 " +
						topMargin
					}
				>
					<TouchableOpacity
						className="p-1 rounded-xl"
						onPress={() => navigation.goBack()}
					>
						<ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
						<HeartIcon
							size="35"
							color={isFavorite ? theme.background : "white"}
						/>
					</TouchableOpacity>
				</SafeAreaView>
				{loading ? (
					<Loading />
				) : (
					<>
						<View>
							<Image
								source={require("../assets/images/moviePoster2.png")}
								style={{ width, height: height * 0.55 }}
							/>
							<LinearGradient
								colors={[
									"transparent",
									"rgba(23,23,23,0.8)",
									"rgba(23,23,23,1)",
								]}
								style={{ width, height: height * 0.4 }}
								start={{ x: 0.5, y: 0 }}
								end={{ x: 0.5, y: 1 }}
								className="absolute bottom-0"
							/>
						</View>
						{/* movie details */}
						<View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
							{/* title */}
							<Text className="text-3xl font-bold tracking-wider text-center text-white">
								{movieName}
							</Text>

							{/* status, release date, runtime */}
							<Text className="text-base font-semibold text-center text-neutral-400">
								Released · 2022 · 170 min
							</Text>

							{/* genres */}
							<View className="flex flex-row justify-center mx-4 space-x-2">
								<Text className="text-base font-semibold text-center text-neutral-400">
									Action |
								</Text>
								<Text className="text-base font-semibold text-center text-neutral-400">
									Adventure |
								</Text>
								<Text className="text-base font-semibold text-center text-neutral-400">
									Comedy
								</Text>
							</View>

							{/* description */}
							<Text className="mx-4 text-base font-normal tracking-wide text-neutral-400">
								As Scott Lang balances being both a superhero and a father, Hope
								van Dyne and Dr. Hank Pym present an urgent new mission that
								finds the Ant.
							</Text>

							{/* cast */}
							<Cast cast={cast} navigation={navigation} />

							{/* similar movies */}
							<MovieList
								title="Similar Movies"
								hideSeeAll={true}
								data={similarMovies}
							/>
						</View>
					</>
				)}
			</View>
		</ScrollView>
	);
}
