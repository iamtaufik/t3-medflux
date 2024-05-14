"use client";
import Input from "@/components/Input";
import Image from "next/image";
import { useState, type FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [errorMsg, setErrorMsg] = useState(error);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setErrorMsg("");
    setIsLoading(true);
    e.preventDefault();
    if (email === "" || password === "") return false;
    signIn("custom-provider", {
      email,
      password,
    })
      .then((resp) => {
        if (resp?.ok) return router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <section className="flex min-h-screen w-full">
      <div className="relative hidden w-1/2 md:block">
        <div className="background"></div>
        <div className="absolute bottom-14 mx-20 rounded-br-[40px] rounded-tl-[60px] rounded-tr-[40px] border bg-transparent p-6 backdrop-blur-md ">
          <p className="text-2xl font-medium leading-normal tracking-wide text-white ">
            Addressing Supply Chain Issues with <br /> Seasonal Disease & Drug
            Sales Data <br /> Analysis Using Machine Learning
          </p>
          <Image
            src="/logo-white.svg"
            width={101}
            height={30}
            className="mt-2"
            alt="Logo"
          />
        </div>
      </div>
      <div className="w-full bg-white px-4 py-10  md:w-1/2 md:px-36 md:py-28">
        <div className="w-full ">
          <Image src="/logo.svg" alt="Logo" width={193} height={40} />
          <div className="my-8 text-black">
            <h1 className="mb-1 text-4xl font-bold">Login to your Account</h1>
            <p className="font-light">
              See what is going on with your business
            </p>
          </div>
          {errorMsg && <p className="text-center text-red-500">{errorMsg}</p>}
          <form onSubmit={handleSubmit} className="w-full ">
            <Input
              name="Email"
              type="email"
              value={email}
              placeholder="Enter your email"
              className="invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="Password"
              type="password"
              value={password}
              placeholder="*************"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="checked:bg-primary"
                />
                <label
                  htmlFor="remember"
                  className="pl-2 text-sm text-gray-400"
                >
                  Remember Me
                </label>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">
                  Forgot Password
                </p>
              </div>
            </div>
            <div className="mt-6 w-full">
              <button
                className="w-full rounded-lg bg-primary py-4 text-white "
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-center text-sm text-gray-400">
              Login for owner?{" "}
              <span className="font-semibold text-primary">Login</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
