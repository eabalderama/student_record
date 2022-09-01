import axios from 'axios'
import { Student } from '../views/Home/Home'

// Temporary
const BASE_URL = 'http://localhost:5000/api'

export const getStudents = async () => {
  const result = await axios.get(`${BASE_URL}/student`)
  return result.data
}

export const getStudentById = async (id: String) => {
  const result = await axios.get(`${BASE_URL}/student/${id}`)
  return result.data
}

export const createStudent = async (student: Student) => {
  const result = await axios.post(`${BASE_URL}/student`, student)
  return result.data
}

export const updateStudent = async (student: Student, id: String) => {
  const result = await axios.post(`${BASE_URL}/student/${id}`, student)
  return result.data
}

export const deleteStudent = async (id: String) => {
  const result = await axios.delete(`${BASE_URL}/student/${id}`)
  return result.data
}