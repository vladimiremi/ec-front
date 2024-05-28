import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  overflow-y: scroll;
`;
export const Title = styled.div`
  justify-content: space-between;
  display: flex;
  flex: 1;
  color: #0d47a1;
  font-size: 34px;
  font-weight: bold;
  padding-right: 24px;
  padding-top: 60px;
`;

export const Add = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #f1f4f8;
  text-align: end;
  margin-left: 24px;
  font-size: 18px;
  border-radius: 25px;
  height: 44px;
  width: 44px;
`;
export const Tasks = styled.button`
  flex: 1;
  display: flex;
  margin-top: 24px;
  width: 100vw;
  height: 75px;
  font-size: 17px;
  font-weight: 500;
  color: #3c3939;
  background-color: #f1f4f8;
  justify-content: space-between;
`;

export const TasksDate = styled.div`
  flex-direction: column;
  display: flex;
  background-color: #e5ebf2;
  font-size: 12px;
  text-align: center;
  height: 75px;
  width: 100px;
  padding-top: 20px;
  padding-left: 12px;
  padding-right: 12px;
 `;

export const TasksName = styled.div`
  flex-direction: column;
  display: flex;
  padding-top: 25px;
  padding-left: 24px;
`;

export const Status = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;

export const Hours = styled.div`
  text-align: center;
  font-size: 12px;
`;

export const Footer = styled.div`
  position: sticky;
  justify-content: center;
  gap: 80px;
  display: flex;
  flex-direction: row;
  border-top: 2px solid #0D47A1;
  top: 880px;
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