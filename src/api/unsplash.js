import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4jLly5XM-lZwD7teDi8aUlGaaz019U5b3L8hhQtPhY0'
    }
})