import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  color: black;
`;
export const Teacher = styled.div`
   align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 128px;
  text-align: end;
  margin-left: 24px;
  margin-right: 24px;
  font-size: 18px;
  color: #575656;
`;

export const Back = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #f1f4f8;
  text-align: end;
  margin-right: 24px;
  font-size: 18px;
  border-radius: 25px;
  height: 44px;
  width: 44px;
`;

export const Title = styled.div`
  margin-top: 44px;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
  text-align: center;
  background-color: #f1f4f8;
  height: 64px;
  font-size: 24px;
`;
export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  text-align: center;
  background-color: #f1f4f8;
  height: 200px;
  width: 90%;
  font-size: 20px;
  margin-left: 5%;
  border-radius: 20px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 200px 24px 0px 24px;
`;
export const HelpMe = styled.button`
  background-color: yellow;
  border-radius: 10px;
  border: 1px solid gray;
  width: 150px;
  font-weight: bold;
  height: 50px;
`;
export const Finish = styled.button`
  color: #ffffff;
  background-color: green;
  border-radius: 10px;
  border: 1px solid gray;
  width: 150px;
  height: 50px;
`;
export const Footer = styled.div`
  position: sticky;
  justify-content: center;
  gap: 80px;
  display: flex;
  flex-direction: row;
  border-top: 2px solid #0D47A1;
  top: 840px;
  bottom: 34px;
  padding: 10px 0px 10px 0px;
`;
export const TasksButton = styled.button`
  color: #3c3939;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialButton = styled.button`
  color: #3c3939;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PerfilButton = styled.button`
  color: #3c3939;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;
