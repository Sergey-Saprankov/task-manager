export interface AuthSchema {
  email: string
  password: string
  isChecked: boolean
  errorEmail: string | null
  errorPassword: string | null
}
