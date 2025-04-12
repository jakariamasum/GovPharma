"use client";
import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pill, ArrowLeft } from "lucide-react";
import PharmaForm from "@/components/form/PharmaForm";
import PharmaInput from "@/components/form/PharmaInput";
import Button from "@/components/ui/button";
import { loginSchema } from "@/schemas/login.schema";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Pill className="h-6 w-6 text-emerald-600 mr-2" />
            <h1 className="text-2xl font-bold">GovPharm Login</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Login to Your Account</CardTitle>
              <CardDescription>
                Enter your credentials to access your digital health card and
                services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PharmaForm
                onSubmit={onSubmit}
                resolver={zodResolver(loginSchema)}
              >
                <PharmaInput
                  name="nationalId"
                  label="National ID"
                  placeholder="Enter your National ID number"
                  type="number"
                />
                <PharmaInput
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <Button type="submit" className="w-full">
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </PharmaForm>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-sm text-center">
                <Link
                  href="/forgot-password"
                  className="text-emerald-600 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="text-sm text-center">
                Don&rsquo;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-emerald-600 hover:underline"
                >
                  Register now
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Login;
