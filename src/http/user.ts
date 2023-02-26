import { get, post } from '@utils/request'
import type { LoginForm } from '@model/user'

export const getUserInfo = () => get('/getUsers')

export const login = (data: LoginForm) => post('/login', data)
