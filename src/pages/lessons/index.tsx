import React from "react";
import {
  About,
  Back,
  Container,
  Finish,
  Button,
  HelpMe,
  Teacher,
  Title,
  Footer,
  TasksButton,
  SocialButton,
  PerfilButton,
} from "./styles";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { IoChatbubbleEllipsesOutline, IoPersonOutline } from "react-icons/io5";

export default function lessons() {
  return (
    <Container>
      <Teacher>
        <Back>
          <IoMdArrowRoundBack />
        </Back>
        Prof. Vladimir Costa
      </Teacher>
      <Title>Desenvolvimento de Algorítmo</Title>
      <About>
        Cite exemplos de algorítmos no seu cotidiano e como eles podem ajudar.
      </About>

      <Button>
        <HelpMe>Preciso de Ajuda</HelpMe>
        <Finish>Concluir</Finish>
      </Button>

      <Footer>
        <TasksButton>
          <MdLibraryBooks style={{height: 25, width: 25}} />
          Tarefas
        </TasksButton>
        
        <SocialButton>
          <IoChatbubbleEllipsesOutline style={{height: 25, width: 25}} />
          Social
        </SocialButton>
        
        <PerfilButton>
          <IoPersonOutline style={{height: 25, width: 25}}/>
          Perfil
        </PerfilButton>
      </Footer>
    </Container>
  );
}
