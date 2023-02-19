import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals }) => {
	const user = locals.user
	if (!user) throw redirect(307, '/sign-in')

	return user
}) satisfies PageServerLoad
