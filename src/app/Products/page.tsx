"use client";
import ProductCard from "../components/productCard";
import { styled } from "styled-components";

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

export default function ProductsList() {
  return (
    <List>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
      <li>
        <ProductCard />
      </li>
    </List>
  );
}
