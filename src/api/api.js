import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1308ad31-5a34-45a0-8283-626bb25c09cc'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  getLogin() {
    return instance
      .get('auth/me')
      .then(response => response.data)
  },
  follow(userId) {
    return instance
      .post(`follow/${userId}`)
      .then(response => response.data)
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then(response => response.data)
  },
  getProfile(userId){
    return instance
    .get(`profile/${userId}`)
  }
}

