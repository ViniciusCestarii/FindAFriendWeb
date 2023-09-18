'use client'
import SubTopic from '@/components/SubTopic'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import TextField from '@mui/material/TextField'
import { ChangeEvent, useState } from 'react'
import StepLabel from '@mui/material/StepLabel'

const steps = ["Let's get started", 'Tell us about you organization']

const SignUpForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const [activeStep, setActiveStep] = useState<number>(0)

  const handleNext = () => {
    if (activeStep >= steps.length) return
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    if (activeStep <= 0) return
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <>
      <Stepper
        activeStep={activeStep}
        connector={
          <div className="bg-gradient-to-br from-FindAFirendDarkYellow to-FindAFriendLightYellow w-1/2 h-1 rounded-xl" />
        }
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="flex flex-col space-y-8 max-w-md w-full">
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
        <div className="flex justify-between relative gap-x-4">
          <Button onClick={handleBack} color="primary" sx={{ color: 'white' }}>
            Return
          </Button>
          <Button
            onClick={handleNext}
            color="primary"
            variant="contained"
            className="max-w-xs w-full hover:font-semibold bg-FindAFriendDarkRed"
          >
            Next Step
          </Button>
        </div>
      </div>
    </>
  )
}

export default SignUpForm
