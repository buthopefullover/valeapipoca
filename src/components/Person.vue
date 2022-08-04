<template>
	<Navbar />
	<div class="container mx-auto flex mt-12">
		<img :src="profilePath" class="w-64 ml-16" style="height: fit-content" />
		<div class="ml-24 mr-96">
			<h1 class="text-4xl font-semibold text-white">{{ this.person.name }}</h1>
			<h1 class="text-2xl text-white">{{this.person.known_for_department}}</h1>
			<p class="mt-3">
				{{ this.person.biography }}
			</p>
		</div>
	</div>
</template>

<script>
import Navbar from "./header/Navbar"
import UserService from "@/services/AppService";

export default {

	data() {
		return {
			person: [],
		};
	},
	components: {
		Navbar,
	},
	methods: {
		async fetchPerson() {
			try {
				const response = await UserService.getPerson(this.$route.params.id);
				console.log(response);
				this.person = response.data.personInfo

			} catch (error) {
				console.log(error);
			}
		}
	},
	computed: {
		profilePath() {
			if (this.person.profile_path) {
				return "https://image.tmdb.org/t/p/original" + this.person.profile_path;
			}
			else {
				return "https://via.placeholder.com/500x750";
			}
		},
	},
	async mounted() {
		this.fetchPerson();

	},
}
</script>

<style>
</style>
