<template>
	<div class="my-6">
		<Tooltip :text="person.job">
			<router-link :to="`/person/${person.person_id}`">
				<a>{{ person.name }}</a>
			</router-link>
		</Tooltip>
	</div>
</template>

<script>
import Tooltip from './Tooltip';
export default {
	props: {
		person: {
			required: true
		}
	},
	components: {
		Tooltip,
	},
}
</script>

<style>
</style>
