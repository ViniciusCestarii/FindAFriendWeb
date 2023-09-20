'use client'
import SubTopic from '@/components/SubTopic'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import TextField from '@mui/material/TextField'
import { ChangeEvent, useState } from 'react'
import StepLabel from '@mui/material/StepLabel'
import useForm from '@/hooks/useForm'
import axios from 'axios'

const steps = ["Let's get started", 'Tell us about you organization']

const SignUpForm = () => {
  const email = useForm('email')
  const password = useForm('password')
  const confirmPassword = useForm('password')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const cnpj = useForm('cnpj')
  const cep = useForm('cep')

  const [activeStep, setActiveStep] = useState<number>(0)

  const handleNext = () => {
    if (activeStep >= steps.length) return
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    if (activeStep <= 0) return
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const isfirstStepValidated = (): boolean => {
    const validateValues =
      email.validate() && password.validate() && confirmPassword.validate()
    if (validateValues && password.value !== confirmPassword.value) {
      confirmPassword.setHelperText('Password does not match')
      confirmPassword.setError(true)
    }
    return validateValues && password.value === confirmPassword.value
  }

  const checkIfCepExists = async () => {
    if (cep.value.length < 8) return
    const cepNumbers = cep.value.replace(/\D/g, '')
    const response = await axios.get(
      `https://viacep.com.br/ws/${cepNumbers}/json/`,
    )
    if (response.data.erro) {
      cep.setHelperText('CEP not found')
      cep.setError(true)
    }
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
      <div className="flex flex-col justify-between max-w-md w-full min-h-[412px]">
        {activeStep === 0 && (
          <div className="flex flex-col space-y-4 w-full">
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
            <div className="flex flex-col space-y-1">
              <SubTopic topic="Confirm Password" />
              <div className="flex">
                <TextField
                  {...confirmPassword}
                  type={showConfirmPassword ? 'text' : 'password'}
                  InputProps={{ sx: { pr: '4rem' } }}
                  fullWidth
                />
                {confirmPassword.value.length > 0 && (
                  <button
                    className="-ml-16 z-10 w-14 h-14"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex flex-col space-y-1">
              <SubTopic topic="CNPJ" />
              <TextField {...cnpj} type="text" fullWidth />
            </div>
            <div className="flex flex-col space-y-1">
              <SubTopic topic="CEP" />
              <TextField
                {...cep}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  cep.onChange(event)
                  checkIfCepExists()
                }}
                onBlur={() => {
                  cep.onBlur()
                  checkIfCepExists()
                }}
                type="text"
                fullWidth
              />
            </div>
          </div>
        )}
        <div
          className={`flex ${
            activeStep > 0 ? 'justify-between' : 'justify-center'
          } relative gap-x-4`}
        >
          {activeStep > 0 && (
            <Button
              onClick={handleBack}
              color="primary"
              sx={{ color: 'white' }}
            >
              Return
            </Button>
          )}
          <Button
            onClick={() => isfirstStepValidated() && handleNext()}
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
