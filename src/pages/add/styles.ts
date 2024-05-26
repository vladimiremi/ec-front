import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  color: black;
  padding-left: 24px;
  padding-right: 24px;
`;
export const ContainerName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  text-align: center;
  padding-top: 64px;
  font-size: 24px;
  color: #0d47a1;
  font-weight: bold;
`;
export const ToClose = styled.button`
  margin-top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f4f8;
  height: 25px;
  width: 25px;
  margin-left: 360px;
  color: #0d47a1;
  font-size: 20px;
`;
export const Title = styled.div`
  margin-top: 48px;
  font-size: 20px;
  font-weight: 500;
`;
export const AddTitle = styled.input`
  display: flex;
  margin-top: 12px;
  background-color: #f1f4f8;
  border: 1px solid #9598a6;
  height: 60px;
  width: 100%;
  border-radius: 10px;
  padding-left: 12px;

  &::placeholder {
    color: #9598a6;
  }
`;
export const Description = styled.div`
  margin-top: 48px;
  font-size: 20px;
  font-weight: 500;
`;
export const AddDescription = styled.textarea`
  display: flex;
  margin-top: 12px;
  width: 100%;
  background-color: #f1f4f8;
  height: 150px;
  border-radius: 10px;
  padding: 12px 12px 12px;
  border: 1px solid #9598a6;

  &::placeholder {
    color: #9598a6;
    position: relative;
  }
`;
export const Deadline = styled.div`
  margin-top: 48px;
  font-size: 20px;
  font-weight: 500;
`;
export const Date = styled.input`
  display: flex;
  margin-top: 12px;
  background-color: #f1f4f8;
  height: 60px;
  border-radius: 10px;
  padding: 12px 12px 12px 12px;
  border: 1px solid #9598a6;
  width: 100%;

  &::placeholder {
    color: #9598a6;
    gap: 10px;
  }
`;
export const AddTask = styled.button`
  margin-top: 48px;
  background-color: #0d47a1;
  color: #ffffff;
  height: 50px;
  width: 100%;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 500;
`;
