import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:9090/api/v1"
})

export const getAllUsers = () => http.get("/users")
export const deleteUserById = (id) => http.delete(`/users/${id}`)
export const searchUser = (userName) => http.get(`/users/search/${userName}`)

export const getAllQuotes = () => http.get("/quotes")
export const getQuoteById = (id) => http.get(`/quotes/${id}`)