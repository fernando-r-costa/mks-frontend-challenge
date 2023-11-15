"use client";
import styled from "styled-components";

const PageHeader = styled.header`
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
  font-size: 32px;
  font-weight: 600;
`;

const SubTitle = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;

export default function Header() {
  return (
    <PageHeader>
      <Title>MKS</Title>
      <SubTitle>Sistemas</SubTitle>
    </PageHeader>
  );
}
