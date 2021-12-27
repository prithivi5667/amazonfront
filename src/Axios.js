import axios from 'axios'

const instance = axios.create({
    baseURL: "https://shopclonept.herokuapp.com"
})

export default instance