import listUserService from './services/listUsersService.js'
export const listUserController = (request, response) => {
  const users = listUserService()

  return response.json(users)
}

