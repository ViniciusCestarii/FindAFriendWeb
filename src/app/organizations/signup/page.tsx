import HalfPageWrapper from '@/components/HalfPageWrapper'
import Logo from '@/components/Logo'
import AskToLogIn from '@/components/organization/signUp/AskToLogIn'
import SignUpForm from '@/components/organization/signUp/signUpForm'

const SignUp = () => {
  return (
    <HalfPageWrapper>
      <header>
        <Logo />
      </header>
      <section className="flex flex-col items-center lg:mt-20 h-full w-full space-y-12 mb-4">
        <h1 className="text-5xl font-bold font-title">Sign up</h1>
        <SignUpForm />
        <AskToLogIn />
      </section>
    </HalfPageWrapper>
  )
}

export default SignUp
