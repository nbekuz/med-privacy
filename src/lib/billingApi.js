function withTrailingSlash(url) {
  return url.endsWith('/') ? url : `${url}/`
}

export function getApiBaseUrl() {
  const configured = import.meta.env.VITE_API_BASE_URL
  const baseUrl =
    configured && String(configured).trim()
      ? String(configured).trim()
      : 'http://85.198.101.179:8007'
  return baseUrl
}

export async function fetchRobokassaStatus(kind, query) {
  const kindPath = kind === 'success' ? 'success' : kind === 'fail' ? 'fail' : 'result'
  const baseUrl = withTrailingSlash(getApiBaseUrl())
  const url = new URL(`api/billing/robokassa/${kindPath}/`, baseUrl)

  // backend expects OutSum, InvId, SignatureValue, IsTest, Culture...
  const searchParams = new URLSearchParams()
  for (const [k, v] of Object.entries(query || {})) {
    if (v === undefined || v === null) continue
    const str = String(v)
    if (!str) continue
    searchParams.set(k, str)
  }
  url.search = searchParams.toString()

  const res = await fetch(url.toString(), { method: 'GET' })
  const contentType = res.headers.get('content-type') || ''
  const data = contentType.includes('application/json') ? await res.json() : await res.text()

  if (!res.ok) {
    const message = typeof data === 'object' && data && 'message' in data ? data.message : 'Request failed'
    throw new Error(String(message))
  }
  return data
}

