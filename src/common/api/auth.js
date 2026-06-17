const jsonHeaders = { 'Content-Type': 'application/json' };

/** @type {RequestInit} */
const fetchOptions = {
  credentials: 'include',
};

export const checkSession = async () => {
  const response = await fetch('/api/auth/me', fetchOptions);

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.user;
};

export const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    ...fetchOptions,
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || `HTTP ${response.status}`);
  }

  return response.json();
};

export const logout = async () => {
  const response = await fetch('/api/auth/logout', {
    ...fetchOptions,
    method: 'POST',
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || `HTTP ${response.status}`);
  }
};

export const jsonFetchOptions = () => ({
  ...fetchOptions,
  headers: jsonHeaders,
});
