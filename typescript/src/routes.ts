import { Request, Response } from 'express'
import CreateUser from './services/CreateUser'

export default function helloWorld(request: Request, response: Response) {
  const user = CreateUser({
    name: 'Guilherme',
    email: 'guilherme@gmail.com',
    password: '123456',
    techs:[{ title: 'NodeJS', experience: 100}, { title: 'React Native', experience: 50}]
  })

  return response.json(user)
}