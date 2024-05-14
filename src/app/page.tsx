import Login from "./_components/login-page";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense>
      <Login />
    </Suspense>
  );
}
