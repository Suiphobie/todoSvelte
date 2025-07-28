<script lang="ts">
	import TaskCard from '$lib/components/ui/custom/TaskCard.svelte';
</script>

<div class="mx-auto flex flex-col items-center px-20 text-center">
	<div class="p-5 text-2xl font-bold">Ma première to do app en SvelteKit !</div>
	<TaskCard
		title="Ma Première Tache Cool"
		description="J'adore le fun"
		contentText="Ouai ouai"
		footerText="01/01/2025"
	/>
</div>
