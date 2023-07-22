import axios from 'axios';

export async function addContacts({ name, number }) {
  const response = axios.post(`/contacts`, { name, number });
  return response;
}
