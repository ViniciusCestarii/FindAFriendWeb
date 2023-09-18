import HalfPageWrapper from '@/components/HalfPageWrapper'
import Logo from '@/components/Logo'
import AskToSignUp from '@/components/organization/logIn/AskToSignUp'
import LogInForm from '@/components/organization/logIn/LogInForm'

const Login = () => {
  return (
    <HalfPageWrapper>
      <header>
        <Logo />
      </header>
      <section className="flex flex-col items-center justify-between pt-8 lg:pt-20 w-full h-full">
        <div className="space-y-12 flex flex-col items-center w-full">
          <h1 className="text-5xl font-bold font-title">Log in</h1>
          <LogInForm />
        </div>
        <AskToSignUp />
      </section>
    </HalfPageWrapper>
  )
}

export default Login
