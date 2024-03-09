import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RootRouter } from "./router/root-router.tsx";
import { themeSpaghetti } from "./functions/theme-spaghetti.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";

themeSpaghetti();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <RootRouter />
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>
);
