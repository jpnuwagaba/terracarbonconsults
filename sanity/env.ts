export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-04-11'

const defaultDataset = 'terracarbonconsults-content'
const defaultProjectId = 'z6pxm1h7'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || defaultDataset,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || defaultProjectId,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
