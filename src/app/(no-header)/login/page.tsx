import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Acceso al Laboratorio",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center flex-1">
      <LoginForm />
    </div>
  );
}

