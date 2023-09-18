'use client'
import SubTopic from '@/components/SubTopic'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ChangeEvent, useState } from 'react'

const SignUpForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  return (
    <div className="flex flex-col space-y-8 w-full max-w-md">
      <div className="flex flex-col space-y-1">
        <SubTopic topic="Email" />
        <TextField
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
          fullWidth
        />
      </div>
      <div className="flex flex-col space-y-1">
        <SubTopic topic="Password" />
        <div className="flex">
          <TextField
            value={password}
            type={showPassword ? 'text' : 'password'}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            InputProps={{ sx: { pr: '4rem' } }}
            fullWidth
          />
          {password.length > 0 && (
            <button
              className="-ml-16 z-10 w-14 text-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <SubTopic topic="Confirm Password" />
        <div className="flex">
          <TextField
            value={confirmPassword}
            type={showConfirmPassword ? 'text' : 'password'}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(event.target.value)
            }
            InputProps={{ sx: { pr: '4rem' } }}
            fullWidth
          />
          {confirmPassword.length > 0 && (
            <button
              className="-ml-16 z-10 w-14 text-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          color="primary"
          variant="contained"
          className="max-w-xs w-full hover:font-semibold bg-FindAFriendDarkRed"
        >
          Sign up
        </Button>
      </div>
    </div>
  )
}

export default SignUpForm
