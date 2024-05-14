import { getServerAuthSession } from "@/server/auth";
import Login from "./_components/login-page";
import { Suspense } from "react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerAuthSession();

  if (session?.user) return redirect("/dashboard");

  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}
