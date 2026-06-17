import { jsonFetchOptions } from './auth';

const API_BASE = '/api/clients';

async function handleResponse(response) {
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || `HTTP ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const getClientsData = () =>
  fetch(API_BASE, jsonFetchOptions()).then(handleResponse);

export const getClientById = (id) =>
  fetch(`${API_BASE}/${id}`, jsonFetchOptions()).then(handleResponse);

export const createClient = (name) =>
  fetch(API_BASE, {
    ...jsonFetchOptions(),
    method: 'POST',
    body: JSON.stringify({ name }),
  }).then(handleResponse);

export const updateClient = (id, name) =>
  fetch(`${API_BASE}/${id}`, {
    ...jsonFetchOptions(),
    method: 'PUT',
    body: JSON.stringify({ name }),
  }).then(handleResponse);

export const deleteClient = (id) =>
  fetch(`${API_BASE}/${id}`, {
    ...jsonFetchOptions(),
    method: 'DELETE',
  }).then(handleResponse);

export const checkApiHealth = () =>
  fetch('/api/health', jsonFetchOptions()).then(handleResponse);
