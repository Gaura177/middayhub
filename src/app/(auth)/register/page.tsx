import { RegisterForm } from "@/components/auth/register-form"
import { AuthFormLayout } from "@/components/auth/auth-form-layout"

export default function RegisterPage() {
  return (
    <AuthFormLayout
      title="Create an Account"
      description="Register your school to get started"
    >
      <RegisterForm />
    </AuthFormLayout>
  )
}