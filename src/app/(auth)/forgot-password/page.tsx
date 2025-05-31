import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <>
      <section className="flex items-center justify-center h-[100dvh] p-5">
        <Card className="w-full max-w-[500px]">
          <CardHeader>
            <CardTitle>Forgot your password</CardTitle>
            <CardDescription>
              Enter your email to get the password reset link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ForgotPasswordForm />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
