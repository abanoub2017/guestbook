import axios from 'axios'
// let hasToken = {}
// if (process.client) {
// }
// hasToken = JSON.parse(localStorage.getItem('userInfo'))
const globalAxios = axios.create({
  baseURL: 'http://localhost:3001',
//   headers: {
//     Authorization: hasToken ? `Bearer ${hasToken.token}` : '',
//     "auth-token": hasToken ? `${hasToken.token}` : ''
//   },
})

export default globalAxios

