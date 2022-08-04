<template>
	<div class="my-6">
		<h1 class="text-4xl text-white">{{ checkName }} - Rating: <span class="text-yellow-500">{{ review.rating }}</span></h1>
		<h1>{{ review.content }}</h1>
	</div>
</template>

<script>
let count = 0;
export default {
	props: {
		review: {
			required: true
		}
	},
	computed: {
		checkName() {
			if (this.review.author_name) {
				return this.review.author_name;
			}
			else {
				count = count + 1;
				return "Review_"+ count;
			}
		},
		backdropPath() {
			return "https://image.tmdb.org/t/p/original" + this.movie.backdrop_path;

		},
	},

}
</script>

<style>
</style>
