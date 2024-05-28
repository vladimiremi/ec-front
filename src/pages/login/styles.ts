import styled from "styled-components";

export const Container = styled.div`
  background-color: #0d47a1;
  height: 100vh;
  width: 100vw;
`;

export const Logo = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  font-size: 50px;
  font-family: fantasy, Geneva, Tahoma, sans-serif;
  font-style: italic;
`;

export const Content = styled.div`
  margin-top: 20vh;
  display: flex;
  background-color: #ffffff;
  height: 54vh;
  width: 100vw;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
`;
export const Login = styled.div`
  color: black;
  font-size: 34px;
  font-weight: 500;
`;
export const RA = styled.div`
  color: black;
  margin-top: 16px;
  font-size: 20px;
`;
export const AddRA = styled.input`
  background-color: #f1f4f8;
  height: 46px;
  padding-left: 12px;
  border: 1px solid #9598a6;
  border-radius: 10px;
  margin-top: 8px;
  font-size: 20px;
  color: black;

  &::placeholder {
  }
`;
export const Password = styled.div`
  color: black;
  margin-top: 16px;
  font-size: 20px;
`;
export const AddPassword = styled.input`
  background-color: #f1f4f8;
  height: 46px;
  padding-left: 12px;
  border: 1px solid #9598a6;
  border-radius: 10px;
  margin-top: 8px;
  font-size: 20px;
  color: black;
  
  &::placeholder {
  }
`;

export const Forgot = styled.button`
  color: #0d47a1;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  margin-top: 16px;
  font-size: 16px;
`;

export const Register = styled.button`
  color: #0d47a1;
`;
export const LoginButton = styled.button`
  background-color: #0d47a1;
  margin-top: 16px;
  font-size: 20px;
  height: 55px;
  width: 90vw;
  border-radius: 15px;
`;

export const LoginWithGoogle = styled.button`
  display: flex;
  align-items: center;
  background-color: #f1f4f8;
  color: #0d47a1;
  margin-top: 16px;
  font-size: 20px;
  height: 55px;
  border-radius: 15px;
  border: 1px solid #0d47a1;
  justify-content:  center;
  gap: 10px;
  margin-bottom: 16px;
`;
