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

export const TitleTask = styled.div`
  position: absolute;
  display: flex;
  margin-top: -280px;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
  text-align: center;
  background-color: #f1f4f8;
  height: 64px;
  font-size: 24px;
  width: 90%;
  justify-content: center;
`;
export const About = styled.div`
  position: absolute;
  margin-top: -200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f1f4f8;
  height: 180px;
  width: 90%;
  font-size: 20px;
  border-radius: 20px;
`;

export const Header = styled.div`
  flex-direction: row;
  display: flex;
  border-bottom: 2px solid #0d47a1;
  width: 100%;
  padding-bottom: 300px;
  align-items: center;
`;
export const Title = styled.div`
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  text-align: center;
  font-size: 34px;
  font-weight: 500;
  margin-left: 50px;
`;
export const Back = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #f1f4f8;
  margin-right: 50px;
  font-size: 18px;
  border-radius: 25px;
  height: 44px;
  width: 44px;
`;
export const Content = styled.div`
  margin-top: 5px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #e5ebf2;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 400px;
  scrollbar-width: none;
`;

export const MyComment = styled.div`
  position: relative;
  background-color: #9cb1d2;
  border-radius: 10px;
  padding: 40px 15px;
  margin: 10px 0;
  margin-bottom: 16px;
  max-width: 300px;
  font-size: 16px;
  border: 1px solid #ffffff;
  font-weight: 500;

  &:before {
    content: " ";
    position: absolute;
    top: 10px;
    left: -10px;
    width: 0;
    height: 0;
  }
`;
export const YourComment = styled.div`
  display: flex;
  position: relative;
  background-color: #ffffff;
  border: 1px solid #9cb1d2;
  border-radius: 10px;
  padding: 40px 15px;
  margin: 10px 0;
  margin-bottom: 16px;
  max-width: 300px;
  font-size: 16px;
  align-self: end;
  font-weight: 500;

  &:before {
    content: " ";
    position: absolute;
    top: 10px;
    right: -10px;
    width: 0;
    height: 0;
  }
`;

export const Author = styled.div`
  margin-top: -30px;
  position: absolute;
  color: #0d47a1;
  font-weight: bold;
`;
export const Footer = styled.div`
  position: absolute;
  align-items: center;
  align-self: center;
  gap: 80px;
  display: flex;
  flex-direction: row;
  border-top: 2px solid #0d47a1;
  margin-top: 120px;
  bottom: 34px;
  justify-content: center;
  width: 90vw;
`;
export const Input = styled.textarea`
  display: flex;
  background-color: #f1f4f8;
  border: 1px solid #9598a6;
  height: 50px;
  width: 300px;
  margin-top: 12px;
  border-radius: 10px;
  padding-left: 50px;
  padding-top: 5px;
  padding-right: 12px;
  font-size: 30px;
  margin-top: 20px;
  overflow: hidden;

  &::placeholder {
  }
`;

export const Emojis = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-right: 250px;
`;
export const Insert = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-right: 350px;
`;
export const Camera = styled.div`
  position: absolute;
  margin-top: 20px;
  margin-left: 350px;
`;
