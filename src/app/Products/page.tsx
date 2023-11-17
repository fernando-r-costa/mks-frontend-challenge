import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ProductsFetching, { Product } from "./productsFetching";

const queryClient = new QueryClient();

export default function ProductsList({ addToCart }: { addToCart: (product: Product) => void }) {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsFetching addToCart={addToCart}/>
    </QueryClientProvider>
  );
}
