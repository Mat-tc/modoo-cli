import axios from "axios"
// 일반적인 axios 인스턴스 사용시에 사용

// eslint-disable-next-line no-unused-vars
function createInstaceWithAuth(url) {
  return axios.create({
    // eslint-disable-next-line no-undef
    baseURL: `${process.env.REACT_APP_API_URL}${url}`,
    withCredentials: true,
  })
}
