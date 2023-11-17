import Image from "next/image";
import styled from "styled-components";
import { Product } from "../Products/productsFetching";

const CartProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 220px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;
`;

const CartProductCardTop = styled.div`
  display: flex;
  margin: 22px 0 14px 0;
`;

const CartProductCardTopClose = styled.p`
  color: #000;
  font-size: 42px;
  font-weight: 400;
  position: relative;
  top: -25px;
  right: -60px;
  cursor: pointer;
`;

const CartProductCardBottom = styled.div`
  display: flex;
  margin: 11px 0 14px 0;
  gap: 30px;
`;

const CartProductCardAmount = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33px);
  grid-template-rows: 35px;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background: #fff;
  justify-items: center;
  align-items: center;
`;

const CartProductCardAmountDecrease = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  cursor: pointer;
`;

const CartProductCardAmountNumber = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-left: 0.3px solid #bfbfbf;
  border-right: 0.3px solid #bfbfbf;
`;

const CartProductCardAmountIncrease = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  cursor: pointer;
`;

const CartProductCardPrice = styled.p`
  width: 84px;
  height: 34px;
  border-radius: 5px;
  background: #373737;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding: 8px 0;
`;

interface CartProductCardProps {
    product: Product;
    removeFromCart: () => void;
    decreaseQuantity: () => void;
    increaseQuantity: () => void;
  }

export default function CartProductCard({ product, removeFromCart, decreaseQuantity, increaseQuantity }: CartProductCardProps) {
  return (
    <CartProductCardContainer>
      <CartProductCardTop>
        <Image src={product.photo} alt={product.name} width={80} height={95} />
        <CartProductCardTopClose onClick={removeFromCart}>x</CartProductCardTopClose>
      </CartProductCardTop>
      {product.name}
      <CartProductCardBottom>
      <CartProductCardAmount>
        <CartProductCardAmountDecrease onClick={decreaseQuantity}>-</CartProductCardAmountDecrease>
        <CartProductCardAmountNumber>{product.quantity}</CartProductCardAmountNumber>
        <CartProductCardAmountIncrease onClick={increaseQuantity}>+</CartProductCardAmountIncrease>
      </CartProductCardAmount>
        <CartProductCardPrice>
          R${parseFloat(product.price)}
        </CartProductCardPrice>
      </CartProductCardBottom>
    </CartProductCardContainer>
  );
}
