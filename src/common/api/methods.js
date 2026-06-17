import { authHeaders } from './auth';

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
  fetch(API_BASE).then(handleResponse);

export const getClientById = (id) =>
  fetch(`${API_BASE}/${id}`).then(handleResponse);

export const createClient = (name) =>
  fetch(API_BASE, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ name }),
  }).then(handleResponse);

export const updateClient = (id, name) =>
  fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify({ name }),
  }).then(handleResponse);

export const deleteClient = (id) =>
  fetch(`${API_BASE}/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  }).then(handleResponse);

export const checkApiHealth = () =>
  fetch('/api/health').then(handleResponse);
