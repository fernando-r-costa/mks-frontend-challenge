"use client";

import Image from "next/image";
import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  right: 0;
  top: 0;
  width: 330px;
  height: 100vh;
  overflow: auto;
  background: #0f52ba;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
`;

const CartHeader = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 25px 15px 0 32px;
`;

const CartHeaderTitle = styled.p`
  color: #ffffff;
  font-size: 27px;
  font-weight: 700;
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
`;

const CartProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  margin: 30px 0;
  gap: 10px;
`;

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

const CartResume = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 0 43px 0 32px;
  padding: 32px 0;
  gap: 73px;
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
`;

export default function Cart() {
  return (
    <CartContainer>
      <CartHeader>
        <CartHeaderTitle>Carrinho de compras</CartHeaderTitle>
        <CartHeaderClose>X</CartHeaderClose>
      </CartHeader>
      <CartProductsContainer>
        <CartProductCardContainer>
          <CartProductCardTop>
            <Image src={"/apple-watch.png"} alt={""} width={80} height={95} />
            <CartProductCardTopClose>x</CartProductCardTopClose>
          </CartProductCardTop>
          Apple Watch Series 4 GPS
          <CartProductCardBottom>
            <CartProductCardAmount>
              <CartProductCardAmountDecrease>-</CartProductCardAmountDecrease>
              <CartProductCardAmountNumber>1</CartProductCardAmountNumber>
              <CartProductCardAmountIncrease>+</CartProductCardAmountIncrease>
            </CartProductCardAmount>
            <CartProductCardPrice>R$399</CartProductCardPrice>
          </CartProductCardBottom>
        </CartProductCardContainer>
      </CartProductsContainer>
      <CartResume>
        <CartResumeTotal>Total:</CartResumeTotal>
        <CartResumeValue>R$798</CartResumeValue>
      </CartResume>
      <CartFinish>Finalizar Compra</CartFinish>
    </CartContainer>
  );
}
