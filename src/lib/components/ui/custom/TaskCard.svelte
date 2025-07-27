<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	let {
		title = 'default',
		description = 'a cool desc',
		contentText = 'Contenu de la Task',
		footerText = '01 / 01 / 2020'
	}: { title?: string; description?: string; contentText?: string; footerText?: string } = $props();
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>{contentText}</p>
	</Card.Content>
	<Card.Footer>
		<p>{footerText}</p>
	</Card.Footer>
</Card.Root>
