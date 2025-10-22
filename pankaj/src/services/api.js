import axios from "axios";

const http = axios.create({
      baseURL: 'http://localhost:9090/api/v1',
})

export const getAllUsers = async () => (await http.get("/users")).data

export const deleteUserById = async(id) => (await http.delete(`/users/${id}`))