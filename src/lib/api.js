
import axios from 'axios'
import _ from 'lodash'
const baseURL = 'https://ecb-server.vercel.app/'

const api = axios.create({ baseURL })

export const getCars = async (email, password) => {
  const url = '/cars'
  const response = await api.get(url)
  const cars = _.get(response, 'data')
  return cars.dataCars
}

export const createCar = async data => {
  const url = '/cars'
  const response = await api.post(url, data)
  return response
}

export const updateCar = async (id, data) => {
  const url = `/cars/${id}`
  const response = await api.patch(url, data)
  return response
}
