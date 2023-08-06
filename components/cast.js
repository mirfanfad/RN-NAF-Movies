import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Cast({ cast, navigation }) {
	const personName = "Keanu Reeves";
	const characterName = "John Wick";
	return (
		<View className="my-6">
			<Text className="mx-4 mb-5 text-lg text-white">Top Cast</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 15 }}
			>
				{cast &&
					cast.map((person, index) => {
						return (
							<TouchableOpacity
								key={index}
								className="items-center mr-4 space-y-2"
								onPress={() => {
									navigation.navigate("Person", person);
								}}
							>
								<View className="items-center w-20 h-20 overflow-hidden border rounded-full border-neutral-500">
									<Image
										source={require("../assets/images/castImage1.png")}
										className="w-20 h-24 rounded-2xl"
									/>
								</View>
								<Text className="mt-1 text-xs text-white">
									{characterName.length > 10
										? characterName.slice(0, 10) + "..."
										: characterName}
								</Text>
								<Text className="mt-1 text-xs text-neutral-400">
									{personName.length > 10
										? personName.slice(0, 10) + "..."
										: personName}
								</Text>
							</TouchableOpacity>
						);
					})}
			</ScrollView>
		</View>
	);
}
