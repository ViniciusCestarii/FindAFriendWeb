'use client'
import SubTopic from '@/components/SubTopic'
import useForm from '@/hooks/useForm'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const LogInForm = () => {
  const router = useRouter()

  const email = useForm('email')
  const password = useForm('password')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const [isValid, setIsValid] = useState<boolean>(false)

  const handleLogIn = () => {
    if (email.validate() && password.validate()) {
      // log in first then redirect
      router.push('/organizations/me')
    }
  }

  useEffect(() => {
    setIsValid(email.isValid() && password.isValid())
  }, [email, password, setIsValid])

  return (
    <div className="flex flex-col space-y-8 w-full max-w-md">
      <div className="flex flex-col space-y-1">
        <SubTopic topic="Email" />
        <TextField {...email} fullWidth />
      </div>
      <div className="flex flex-col space-y-1">
        <SubTopic topic="Password" />
        <div className="flex">
          <TextField
            {...password}
            type={showPassword ? 'text' : 'password'}
            InputProps={{ sx: { pr: '4rem' } }}
            fullWidth
          />
          {password.value.length > 0 && (
            <button
              className="-ml-16 z-10 w-14 h-14"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          color="primary"
          variant="contained"
          className={`max-w-xs w-full hover:font-semibold ${
            isValid ? 'bg-FindAFriendDarkRed' : 'bg-FindAFriendDarkRed/60'
          }`}
          onClick={handleLogIn}
        >
          Log in
        </Button>
      </div>
    </div>
  )
}

export default LogInForm
