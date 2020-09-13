import axios from "axios"

const instance = axios.create({
    // THE API (cloud function URL)
    baseURL: 'https://us-central1-clone-e97a0.cloudfunctions.net/api'
    // dev: 'http://localhost:5001/clone-e97a0/us-central1/api'
})

export default instance