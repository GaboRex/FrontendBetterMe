import axios from 'axios'
const API_URL='http://betterme22.herokuapp.com/api/v1/cliente'
export default axios.create({
    baseURL: API_URL
})