import HalfPageWrapper from '@/components/HalfPageWrapper'
import Logo from '@/components/Logo'
import LoginForm from '@/components/organization/login/LoginForm'

const Login = () => {
  return (
    <HalfPageWrapper>
      <header>
        <Logo />
      </header>
      <section className="flex flex-col items-center lg:justify-center lg:-mt-24 h-full w-full space-y-12 mb-4">
        <h1 className="text-5xl font-bold font-title">Login</h1>
        <LoginForm />
      </section>
    </HalfPageWrapper>
  )
}

export default Login
