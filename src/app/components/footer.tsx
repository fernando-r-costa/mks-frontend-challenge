import styled from "styled-components";

const PageFooter = styled.footer`
  width: 100%;
  height: 34px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 12px;
  font-weight: 400;
`;

export default function Footer() {
  return <PageFooter>MKS Sistemas © Todos os direitos reservados</PageFooter>;
}
