import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

const ResetPasswordSuccessCard = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <CardTitle>New password set successfully</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-muted-foreground">
        <p>
          Your password has been reset successfully. You can now log in with
          your new password.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/login" className="w-full">
            Back to Login
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResetPasswordSuccessCard;
