"use client";
import styled from "styled-components";

export default function Header() {
  const Header = styled.header`
    width: 100%;
    height: 48px;
    border: 1px solid #000;
    background: #0f52ba;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap: 10px;
  `;

  const Title = styled.h1`
    color: #fff;
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 600;
  `;

  const SubTitle = styled(Title)`
    font-size: 16px;
    font-weight: 300;
  `;

  return (
    <Header>
      <Title>MKS</Title>
      <SubTitle>Sistemas</SubTitle>
    </Header>
  );
}
