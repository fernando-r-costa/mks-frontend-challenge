import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/productCard";
import { styled } from "styled-components";
import Error from "../components/error";

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  list-style: none;
  margin: 14px 30px 37px;

  @media (min-width: 780px) {
    margin: 14px 60px 37px;
  }

  @media (min-width: 1400px) {
    margin: 14px 160px 37px;
  }
`;

const baseURL =
  "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC";

export interface Product {
  quantity: number;
  id: number;
  name: string;
  description: string;
  price: string;
  photo: string;
}

interface ProductsResponse {
  products: Product[];
  count: number;
}

export default function ProductsFetching({
  addToCart,
}: {
  addToCart: (product: Product) => void;
}) {
  const { isLoading, data, error } = useQuery<ProductsResponse>({
    queryKey: ["products", baseURL],
    queryFn: () => fetch(baseURL).then((res) => res.json()),
  });

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  let productList: Product[] = [];

  if (data && Array.isArray(data.products)) {
    productList = data.products;
  }

  return (
    <List>
      {productList.map((product: Product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          photo={product.photo}
          addToCart={() => addToCart(product)}
        />
      ))}
    </List>
  );
}
