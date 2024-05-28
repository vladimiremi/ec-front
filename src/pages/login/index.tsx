import React from "react";
import {
  AddPassword,
  AddRA,
  Container,
  Content,
  Footer,
  Forgot,
  Login,
  LoginButton,
  LoginWithGoogle,
  Logo,
  Password,
  RA,
  Register,
} from "./styles";
import { FcGoogle } from "react-icons/fc";
import { IoSchoolSharp } from "react-icons/io5";
import Link from "next/link";

export default function login() {
  return (
    <>
      <Container>
        <Logo>
          <IoSchoolSharp />
          School Connect
        </Logo>

        <Content>
          <Login>Login</Login>

          <RA>RA do Aluno</RA>

          <AddRA placeholder="Insira o RA do Aluno" />

          <Password>Senha</Password>

          <AddPassword placeholder="Insira sua Senha" />

          <Footer>
            <Forgot>Esqueci a Senha</Forgot>

            <Register>Cadastre-se</Register>
          </Footer>

          <Link href={"/emotions"}>
            <LoginButton>Login</LoginButton>
          </Link>

          <LoginWithGoogle>
            {" "}
            <FcGoogle /> Sign in with Google
          </LoginWithGoogle>
        </Content>
      </Container>
    </>
  );
}
