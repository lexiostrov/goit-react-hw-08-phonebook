import axios from 'axios';

export async function delContacts(id) {
  const response = axios.delete(`/contacts/${id}`);
  return response;
}
