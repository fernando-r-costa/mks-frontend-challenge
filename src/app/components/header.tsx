"use client";
import Image from "next/image";
import styled from "styled-components";

const PageHeader = styled.header`
  width: 100%;
  height: 48px;
  border: 1px solid #000;
  background: #0f52ba;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 23px 0 20px;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
`;

const HeaderSubTitle = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;

const CartInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 52px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  color: #000;
  font-size: 12px;
  font-weight: 700;
`;

export default function Header() {
  return (
    <PageHeader>
      <HeaderLogo>
        <HeaderTitle>MKS</HeaderTitle>
        <HeaderSubTitle>Sistemas</HeaderSubTitle>
      </HeaderLogo>
      <CartInfo>
        <Image src="/cart.svg" alt="cart" width={10.982} height={10.4} />0
      </CartInfo>
    </PageHeader>
  );
}
