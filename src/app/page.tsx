"use client";
import Header from "./components/header";
import Footer from "./components/footer";
import ProductsList from "./Products/page";
import Cart from "./components/cart";
import { useState } from "react";
import { Product } from "./Products/productsFetching";
import styled from "styled-components";

const Body = styled.body`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<Product[]>([]);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity < 9
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <Body>
      <Header onCartClick={handleCartClick} cartQuantity={cartQuantity} />
      {isCartOpen && (
        <Cart
          onClose={handleCartClick}
          cart={cart}
          removeFromCart={removeFromCart}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          clearCart={clearCart}
        />
      )}
      <ProductsList addToCart={addToCart} />
      <Footer />
    </Body>
  );
}
