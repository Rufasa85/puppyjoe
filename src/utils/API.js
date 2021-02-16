import axios from "axios";

const API = {
    searchByBreed : breed=>{
        return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    },
    randomImg :()=>{
        return axios.get(`https://dog.ceo/api/breeds/image/random`)
    }
}

export default API;