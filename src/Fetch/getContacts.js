import axios from 'axios';

export async function getContacts() {
  const response = axios.get('/contacts');
  return response;
}
