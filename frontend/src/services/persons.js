import axios from 'axios'

const baseUrl = '/api/persons' // use /persons for react dev build. json-server does not support custom routes in v1.0.0

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newPerson) => {
    return axios.post(baseUrl, newPerson)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updateNumber = (personWithNewNumber) => {
    return axios.put(`${baseUrl}/${personWithNewNumber.id}`, personWithNewNumber)
}

export default { getAll, create, remove, updateNumber }