import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { z } from 'zod/v4'

const schema = z.object({
	title: z.string(),
})

export const load = async () => {
	const form = await superValidate(zod4(schema));
	return { form };
};
