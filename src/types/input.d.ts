export interface InputType {
  regex: RegExp
  message: string
}

export interface InputTypes {
  email: InputType
  password: InputType
  number: InputType
  cnpj: InputType
  cep: InputType
}
