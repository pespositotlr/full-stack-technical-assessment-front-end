import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'development' ? 'https://localhost:44346' : 'https://fullstacktechnicalassessment20201022103109.azurewebsites.net'

const instance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});

export default instance;