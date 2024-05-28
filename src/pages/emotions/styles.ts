import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  color: black;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 64px;
`;
export const Title = styled.div`
  font-size: 25px;
  text-align: center;
  font-weight: 500;
`;
export const EmojisContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: 24px;
`;
export const Emojis = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #f1f4f8;
  border: 1px solid #9598a6;
  height: 40px;
  width: 40px;
  border-radius: 5px;
`;
export const Optional = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  font-size: 20px;
`;
export const Input = styled.textarea`
  display: flex;
  margin-top: 12px;
  background-color: #f1f4f8;
  border: 1px solid #9598a6;
  height: 150px;
  width: 100%;
  border-radius: 10px;
  padding-left: 12px;
  padding-top: 12px;

  &::placeholder {
    color: #9598a6;
  }
`;
export const Button = styled.button`
  margin-top: 48px;
  background-color: #0d47a1;
  color: #ffffff;
  height: 50px;
  width: 100%;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 500;
`;
