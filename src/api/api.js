import axios from 'axios'
const api = axios.create({
    baseURL: 'https://drinks-shop-a23d.onrender.com/api'
})
export default api