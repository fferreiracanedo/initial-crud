import users from '../dataBase'
import { v4 as uuid } from 'uuid'
const createUserService = (email, name) => {
  const userAlreadyExists = users.find(user => user.email === email)

  if (userAlreadyExists) {
    return 'This email address already exists'
  }

  const newUser = {
    email,
    name,
    id: uuid()
  }

  users.push(newUser)

  return newUser
}

export default createUserService
