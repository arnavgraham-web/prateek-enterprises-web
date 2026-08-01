/**
 * Netlify Forms submission helper.
 *
 * Netlify accepts a urlencoded POST to any path on the site, as long as the body
 * carries a `form-name` matching a form it detected at build time. Those static
 * declarations live in index.html — see the comment there before adding fields.
 *
 * In `vite dev` there is no Netlify backend, so the POST 404s. We surface that as
 * a distinct dev-only outcome instead of a failure, so the form can still be tested.
 */
export async function submitToNetlify(formName: string, data: Record<string, string>) {
  const body = new URLSearchParams({ 'form-name': formName, ...data }).toString()

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  if (!response.ok) {
    throw new Error(`Netlify returned ${response.status}`)
  }
}

/** True when running under `vite dev`, where no Netlify form handler exists. */
export const isDev = import.meta.env.DEV
