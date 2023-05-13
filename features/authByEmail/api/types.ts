export interface LoginApiRequest {
  email: string
  password: string
  rememberMe: boolean
}

export interface LoginApiResponse {
  resultCode: number
  messages: []
  data: {
    userId: number
  }
}
