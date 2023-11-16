"use client";
import styled from "styled-components";

const PageError = styled.header`
  width: 100%;
  border: 1px solid #000;
  background: #dc0d0d;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: inline-block;
  text-align: center;
  align-items: center;
  padding-left: 20px;
  margin: 20px 0;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  margin: 10px 0;
`;

const SubTitle = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  margin: 10px 0;
`;

export default function Error() {
  return (
    <PageError>
      <Title>Erro no carregamento</Title>
      <SubTitle>
        Recarregue a página, se o erro persistir entre em contato.
      </SubTitle>
    </PageError>
  );
}
