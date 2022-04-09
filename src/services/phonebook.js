import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data)
}

const update = () => {}

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data)
}

export default {
  getAll,
  create,
}
