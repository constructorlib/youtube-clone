import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
`;
export const Content = styled.div`
  flex: 5;
`;
export const Recommendations = styled.div`
  flex: 2;
`;
export const VideoWrapper = styled.div``;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
