import styled from "styled-components";
import CartProductCard from "./cartCard";
import { FC } from "react";
import { Product } from "../Products/productsFetching";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  right: -2px;
  top: 0;
  width: 330px;
  height: 100vh;
  overflow: hidden;
  background: #0f52ba;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  @media (min-width: 780px) {
    width: 486px;
  }
`;

const CartHeader = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 25px 15px 0 32px;

  @media (min-width: 780px) {
    width: 486px;
    margin: 0;
    padding: 36px 15px 0 47px;
  }
`;

const CartHeaderTitle = styled.p`
  color: #ffffff;
  font-size: 27px;
  font-weight: 700;

  @media (min-width: 780px) {
    width: 250px;
  }
`;

const CartHeaderClose = styled.p`
  width: 65px;
  height: 50px;
  border-radius: 30px;
  background: #000000;
  color: #0f52ba;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  cursor: pointer;

  @media (min-width: 780px) {
    width: 55px;
    transform: scale(0.7);
    color: #fff;
  }
`;

const CartProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 30px 0;
  gap: 10px;

  @media (min-width: 780px) {
    width: 486px;
    margin: 0;
    padding: 60px 15px 0 47px;
  }
`;

const CartResume = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 0 43px 0 32px;
  padding: 32px 0;
  gap: 73px;

  @media (min-width: 780px) {
    width: 486px;
    margin: 0;
    padding: 60px 0 32px 47px;
  }
`;

const CartResumeTotal = styled(CartHeaderTitle)`
  font-size: 28px;
`;

const CartResumeValue = styled(CartResumeTotal)``;

const CartFinish = styled.p`
  width: 100%;
  background: #000000;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  padding: 21px 0;
  cursor: pointer;

  @media (min-width: 780px) {
    font-size: 28px;
  }
`;

interface CartProps {
  onClose: () => void;
  cart: Product[];
  removeFromCart: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  clearCart: () => void;
}

const Cart: FC<CartProps> = ({
  onClose,
  cart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
}) => {
  const handleCartClose = () => {
    onClose();
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const productTotal = parseFloat(product.price) * product.quantity;
      return total + productTotal;
    }, 0);
  };

  const handleFinishClick = () => {
    clearCart();
    onClose();
  };

  return (
    <CartContainer>
      <CartHeader>
        <CartHeaderTitle>Carrinho de compras</CartHeaderTitle>
        <CartHeaderClose onClick={handleCartClose}>X</CartHeaderClose>
      </CartHeader>
      <CartProductsContainer>
        {cart.length > 0 &&
          cart.map((product: Product) => (
            <CartProductCard
              key={product.id}
              product={product}
              removeFromCart={() => removeFromCart(product.id)}
              decreaseQuantity={() => decreaseQuantity(product.id)}
              increaseQuantity={() => increaseQuantity(product.id)}
            />
          ))}
      </CartProductsContainer>
      <CartResume>
        <CartResumeTotal>Total:</CartResumeTotal>
        <CartResumeValue>R${calculateTotal()}</CartResumeValue>
      </CartResume>
      <CartFinish onClick={handleFinishClick}>Finalizar Compra</CartFinish>
    </CartContainer>
  );
};

export default Cart;
