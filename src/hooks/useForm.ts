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
}

const useForm = (type?: keyof InputTypes) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [helperText, setHelperText] = useState<string | null>(null)

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
      setHelperText(null)
      setError(false)
      return true
    }
  }

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (error) validate(target.value)
    setValue(target.value)
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
    helperText,
    validate: () => validate(value),
    isValid: () => isValid(),
    onBlur: () => validate(value),
  }
}

export default useForm
