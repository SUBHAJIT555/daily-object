import React from "react";
import Error from "@/components/Error";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Error | Daily Object",
  "Something went wrong."
);

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;
