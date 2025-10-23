import axios from "axios";

const http = axios.create({
      baseURL: 'http://localhost:9090/api/v1',
})

export const getAllUsers = () => http.get("/users")

export const deleteUserById = (id) => http.delete(`/users/${id}`)