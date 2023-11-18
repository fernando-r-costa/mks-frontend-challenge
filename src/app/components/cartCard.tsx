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

  @media (min-width: 780px) {
    width: 379px;
    height: 95px;
    display: grid;
    grid-template-columns: 100px 75px 205px;
    grid-template-rows: 95px;
  }
`;

const CartProductCardName = styled.p`
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;

  @media (min-width: 780px) {
    grid-area: 1 / 2 / 2 / 3;
    font-size: 13px;
  }
`;

const CartProductCardTop = styled.div`
  display: grid;
  grid-template-columns: 220px 30px;
  grid-template-rows: 131px;
  align-items: start;

  @media (min-width: 780px) {
    grid-template-columns: 100px 290px;
    grid-template-rows: 95px;
  }
`;

const CartProductCardTopImage = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  justify-self: center;
  align-self: center;

  @media (min-width: 780px) {
    transform: scale(0.8);
  }
`;

const CartProductCardTopClose = styled.p`
  grid-area: 1 / 2 / 2 / 3;
  margin-top: -5px;
  color: #000;
  font-size: 42px;
  font-weight: 400;
  cursor: pointer;

  @media (min-width: 780px) {
    justify-self: end;
    margin: -5px 8px 0 0;
    font-size: 14px;
    text-align: center;
    color: #fff;
    background: #000000;
    width: 18px;
    height: 18px;
    border-radius: 30px;
  }
`;

const CartProductCardBottom = styled.div`
  display: flex;
  margin: 11px 0 14px 0;
  gap: 30px;

  @media (min-width: 780px) {
    grid-area: 1 / 3 / 2 / 4;
    font-size: 13px;
    gap: 5px;
  }
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

  @media (min-width: 780px) {
    transform: scale(0.55);
  }
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

  @media (min-width: 780px) {
    color: #000;
    font-size: 14px;
    background: none;
  }
`;

interface CartProductCardProps {
  product: Product;
  removeFromCart: () => void;
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
}

export default function CartProductCard({
  product,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
}: CartProductCardProps) {
  return (
    <CartProductCardContainer>
      <CartProductCardTop>
        <CartProductCardTopImage>
          <Image
            src={product.photo}
            alt={product.name}
            width={200}
            height={200}
            style={{ width: "auto", height: "95px" }}
          />
        </CartProductCardTopImage>
        <CartProductCardTopClose onClick={removeFromCart}>
          x
        </CartProductCardTopClose>
      </CartProductCardTop>
      <CartProductCardName>{product.name}</CartProductCardName>
      <CartProductCardBottom>
        <CartProductCardAmount>
          <CartProductCardAmountDecrease onClick={decreaseQuantity}>
            -
          </CartProductCardAmountDecrease>
          <CartProductCardAmountNumber>
            {product.quantity}
          </CartProductCardAmountNumber>
          <CartProductCardAmountIncrease onClick={increaseQuantity}>
            +
          </CartProductCardAmountIncrease>
        </CartProductCardAmount>
        <CartProductCardPrice>
          R${parseFloat(product.price)}
        </CartProductCardPrice>
      </CartProductCardBottom>
    </CartProductCardContainer>
  );
}
