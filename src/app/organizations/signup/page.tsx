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
      <section className="flex flex-col items-center justify-between pt-8 lg:pt-20 w-full h-full">
        <div className="space-y-12 flex flex-col items-center w-full">
          <h1 className="text-5xl font-bold font-title">Sign up</h1>
          <SignUpForm />
        </div>
        <AskToLogIn />
      </section>
    </HalfPageWrapper>
  )
}

export default SignUp
