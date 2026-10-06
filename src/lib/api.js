const API_BASE = String(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

function friendlyError(status, message) {
  if (!navigator.onLine) return 'You appear to be offline. Please check your internet connection and try again.';
  if (status === 400) return message || 'Please check the information you entered.';
  if (status === 401) return 'Your session has expired. Please sign in again.';
  if (status === 403) return 'You do not have permission to perform this action.';
  if (status === 404) return 'The requested service could not be found.';
  if (status === 429) return 'Too many requests. Please wait a moment and try again.';
  if (status >= 500) return 'The service is temporarily unavailable. Please try again shortly.';
  return message || `Request failed (${status})`;
}

export async function apiFetch(path, options = {}) {
  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      ...options,
      credentials: options.credentials || 'include',
      headers: {
        ...(options.body && typeof options.body !== 'string' ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {})
      }
    });
  } catch (error) {
    throw new Error('Unable to connect to the MS InnovateX service. Please check your connection and try again.');
  }

  let data = null;
  try { data = await response.json(); } catch {}

  if (!response.ok) {
    throw new Error(friendlyError(response.status, data?.error));
  }
  return data;
}
export { API_BASE };
