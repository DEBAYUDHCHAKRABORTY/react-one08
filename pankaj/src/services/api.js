import axios from "axios";

const http = axios.create({
      baseURL: 'http://localhost:9090/api/v1',
})

export const getAllUsers = () => http.get("/users")

export const deleteUserById = (id) => http.delete(`/users/${id}`)
export const updateUserById = (id) => http.update(`/users/${id}`)
export const conform1UserById = (id) => http.conform1(`/users/delete/${id}`)

export const searchUser = (userName) => http.get(`/users/search/${userName}`)

