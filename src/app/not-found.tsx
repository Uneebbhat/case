import Link from "next/link";
import { Frown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[100dvh] bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full flex flex-col items-center text-center">
        <div className="mb-6">
          <Frown className="w-16 h-16 text-gray-400" />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Button className="w-full" asChild>
          <Link href="/dashboard">Go back</Link>
        </Button>
      </div>
    </section>
  );
}
