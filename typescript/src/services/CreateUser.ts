interface TechObject {
  title: string,
  experience: number
}

interface UserProps {
  name: string,
  email: string,
  password: string,
  techs: Array<TechObject>
}

export default function createUser({ name, email, password, techs }: UserProps) {
  const user = {
    name,
    email,
    password,
    techs,
  }

  return user
}
