export interface ResponseData {
  id: number
  email: string
  login: string
}

export type AuthMeResponseType = {
  data: ResponseData
  messages: string[]
  fieldsErrors: []
  resultCode: number
}
