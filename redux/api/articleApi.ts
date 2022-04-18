import axios from 'axios'
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

const addTask = data => axios.post(`${SERVER}/api//add-task`,data.task, { headers})

export default {
    addTask
}