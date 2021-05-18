import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'http://cuisine.localhost:8000/api/',
        //withCredentials: false,
        headers: {
            'Accept': 'application/ld+json',
            //'Content-Type': 'application/ld+json',
            //'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
}
