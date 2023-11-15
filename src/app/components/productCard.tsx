"use client";
import Image from "next/image";
import styled from "styled-components";

export default function ProductCard() {
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

  const ProductTitle = styled.h1`
    color: #2c2c2c;
    font-size: 16px;
    font-weight: 400;
    padding-right: 16px;
  `;

  const ProductPrice = styled.h2`
    width: 74px;
    height: 30px;
    border-radius: 5px;
    background: #373737;
    padding: 5px 12px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
  `;

  const ProductDescription = styled.h3`
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="19"
          viewBox="0 0 17 19"
          fill="none"
        >
          <path
            opacity="0.737212"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.9312 1.52983L1.62845 4.63719V15.513C1.62845 16.3711 2.31577 17.0667 3.16362 17.0667H13.9098C14.7576 17.0667 15.445 16.3711 15.445 15.513V4.63719L13.1422 1.52983H3.9312Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.737212"
            d="M1.62845 5.41404H15.445"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.737212"
            d="M11.9908 8.43509C11.9908 9.86522 10.6377 11.0246 8.96847 11.0246C7.29927 11.0246 5.94611 9.86522 5.94611 8.43509"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        COMPRAR
      </ButtonBuy>
    </CardContainer>
  );
}
