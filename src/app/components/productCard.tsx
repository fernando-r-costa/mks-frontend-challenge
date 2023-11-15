"use client";
import Image from "next/image";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 250px;
  height: 328px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

const CardTitle = styled.span`
  display: flex;
  margin: 0 16px;
`;

const ProductTitle = styled.h2`
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;
  padding-right: 16px;
`;

const ProductPrice = styled.h3`
  width: 74px;
  height: 30px;
  border-radius: 5px;
  background: #373737;
  padding: 5px 12px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;

const ProductDescription = styled.h4`
  color: #2c2c2c;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  margin: 0 16px;
`;

const ButtonBuy = styled.button`
  width: 100%;
  height: 37px;
  border: none;
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export default function ProductCard() {
  return (
    <CardContainer>
      <Image src="/apple-watch.png" alt="" width={128} height={159} />
      <CardTitle>
        <ProductTitle>Apple Watch Series 4 GPS</ProductTitle>
        <ProductPrice>R$399</ProductPrice>
      </CardTitle>
      <ProductDescription>
        Redesigned from scratch and completely revised.
      </ProductDescription>
      <ButtonBuy>
        <Image
          src="/shopping-bag.svg"
          alt="shopping-bag"
          width={13.817}
          height={15.537}
        />
        COMPRAR
      </ButtonBuy>
    </CardContainer>
  );
}
