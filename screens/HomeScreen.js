import {
	View,
	Text,
	Platform,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
	Bars3CenterLeftIcon,
	MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";

export default function HomeScreen() {
	const ios = Platform.OS === "ios";
	const navigation = useNavigation();

	const [trending, setTrending] = useState([1, 2, 3]);
	const [upcoming, setUpcoming] = useState([1, 2, 3]);
	const [topRated, setTopRated] = useState([1, 2, 3]);

	const [loading, setLoading] = useState(false);
	return (
		<View className="flex-1 bg-neutral-800">
			{/* search bar and logo */}
			<SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
				<StatusBar style="light" />
				<View className="flex flex-row items-center justify-between mx-4">
					<Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
					<Text className="text-3xl font-bold text-white">
						<Text style={styles.text}>NAF</Text>movies
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Search")}>
						<MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
					</TouchableOpacity>
				</View>
			</SafeAreaView>

			{
				/* loading indicator */
				loading ? (
					<Loading />
				) : (
					<ScrollView
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ paddingBottom: 10 }}
					>
						{/* trending movies carousel */}
						<TrendingMovies data={trending} />

						{/* upcoming movies */}
						<MovieList title="Upcoming" data={upcoming} />

						{/* top rated movies */}
						<MovieList title="Top Rated" data={topRated} />
					</ScrollView>
				)
			}
		</View>
	);
}
