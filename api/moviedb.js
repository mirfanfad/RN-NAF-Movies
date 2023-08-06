import axios from "axios";
import { apiKey } from "../constants";

// endpoints

const BASE_URL = "https://api.themoviedb.org/3";
const MOVIE_DETAIL = "/movie/";
const MOVIE_CREDITS = "/credits";
const MOVIE_SIMILAR = "/similar";
const SEARCH_MOVIE = "/search/movie";

// functions

export const getTrendingMovies = async () => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}/trending/movie/day?api_key=${apiKey}&sort_by=popularity.desc`
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getMovieDetail = async (id) => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}${MOVIE_DETAIL}${id}?api_key=${apiKey}`
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getMovieCredits = async (id) => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}${MOVIE_DETAIL}${id}${MOVIE_CREDITS}?api_key=${apiKey}`
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getSimilarMovies = async (id) => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}${MOVIE_DETAIL}${id}${MOVIE_SIMILAR}?api_key=${apiKey}`
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const searchMovies = async (query) => {
	try {
		const { data } = await axios.get(
			`${BASE_URL}${SEARCH_MOVIE}?api_key=${apiKey}&query=${query}`
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
