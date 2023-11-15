"use client";
import styled from "styled-components";

export default function Footer() {
  const Footer = styled.footer`
    width: 100%;
    height: 34px;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
  `;

  return <Footer>MKS Sistemas © Todos os direitos reservados</Footer>;
}
