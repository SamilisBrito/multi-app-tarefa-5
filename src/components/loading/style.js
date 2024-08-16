import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";

export const Icon = styled(AiOutlineLoading3Quarters )`
  font-size: 40px;
  color: #2c3e50;
  animation: rotateAnimation 1s linear infinite forwards;
`

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1.25rem;
`