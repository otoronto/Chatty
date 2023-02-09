import axios from "axios"

export const getMessages = () => {
  // return axios.get('/data/messages.json')
  return axios.get('/api/v1.0/messages');
}