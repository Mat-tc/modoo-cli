/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios'
// 일반적인 axios 인스턴스 사용시에 사용
function createInstaceWithAuth(url) {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}${url}`,
    withCredentials: true,
  })
}

export const category = createInstaceWithAuth('/category')
export const community = createInstaceWithAuth('/community')
