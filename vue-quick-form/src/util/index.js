import axios  from 'axios'
export const request = axios.create({
    baseURL: '/',
    timeout: 30000
})