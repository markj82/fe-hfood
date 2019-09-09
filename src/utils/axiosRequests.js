import axios from 'axios';

const request = axios.create({
    baseURL: "http://localhost:3000"
});

export const getItems = () => {
    return request.get("/food").then(({data}) => {
        return data;
    })
}

export const sendItemsToDB = newFood => {
    return request.post("/food", newFood).then(data => {
        console.log(data)
    })
}