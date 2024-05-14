"use client";
import { api } from "@/trpc/react";

const Page = () => {
  const user = api.user.register.useMutation({
    onSuccess: (res): void => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          user.mutate({
            name: "Muhammad Taufik",
            email: "dev@gmail.com",
            password: "1234567890",
          })
        }
      >
        Register
      </button>
    </div>
  );
};

export default Page;
