import { InputTypes } from '@/types/input'
import { ChangeEvent, useState } from 'react'

const inputTypes: InputTypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email.',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    message:
      'The password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Must contain only numbers.',
  },
  cnpj: {
    regex: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
    message: 'Invalid CNPJ.',
  },
  cep: {
    regex: /^\d{5}-\d{3}$/,
    message: 'Invalid CEP.',
  },
}

const useForm = (type?: keyof InputTypes) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [helperText, setHelperText] = useState<string | null>(null)

  const removeError = () => {
    setHelperText(null)
    setError(false)
  }

  const validate = (value: string) => {
    if (!type) return true
    if (value.length === 0) {
      setHelperText('Enter a value.')
      setError(true)
      return false
    } else if (inputTypes[type] && !inputTypes[type].regex.test(value)) {
      setHelperText(inputTypes[type].message)
      setError(true)
      return false
    } else {
      removeError()
      return true
    }
  }

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case 'cep': {
        if (error) validate(target.value.slice(0, 9))
        const cepNumbers = target.value.replace(/\D/g, '')
        let formattedCep = ''

        for (let i = 0; i < cepNumbers.length; i++) {
          if (i === 5) {
            formattedCep += '-'
          }
          formattedCep += cepNumbers[i]
        }
        console.log(target.value, formattedCep)

        setValue(formattedCep.slice(0, 9))
        break
      }
      case 'cnpj': {
        if (error) validate(target.value)
        const inputValue = target.value.replace(/\D/g, '')
        let formattedCnpj = ''
        for (let i = 0; i < inputValue.length; i++) {
          if (i === 2 || i === 5) {
            formattedCnpj += '.'
          } else if (i === 8) {
            formattedCnpj += '/'
          } else if (i === 12) {
            formattedCnpj += '-'
          }
          if (target.value !== '') {
            formattedCnpj += inputValue[i]
          }
        }

        setValue(formattedCnpj.slice(0, 18))
        break
      }
      default:
        if (error) validate(target.value)
        setValue(target.value)
        break
    }
  }

  const isValid = () => {
    if (!type) return true
    if (value.length === 0) {
      return false
    } else if (inputTypes[type] && !inputTypes[type].regex.test(value)) {
      return false
    } else {
      return true
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    setError: (error: boolean) => setError(error),
    helperText,
    setHelperText: (text: string | null) => setHelperText(text),
    validate: () => validate(value),
    isValid: () => isValid(),
    onBlur: () => validate(value),
  }
}

export default useForm
