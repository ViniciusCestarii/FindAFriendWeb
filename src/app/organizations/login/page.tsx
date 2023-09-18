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
      <section className="flex flex-col items-center mt-8 lg:mt-20 h-full w-full space-y-12 mb-4">
        <h1 className="text-5xl font-bold font-title">Login</h1>
        <LogInForm />
        <AskToSignUp />
      </section>
    </HalfPageWrapper>
  )
}

export default Login
