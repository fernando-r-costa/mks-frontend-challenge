"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ProductsFetching from "./productsFetching";

const queryClient = new QueryClient();

export default function ProductsList() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsFetching />
    </QueryClientProvider>
  );
}
