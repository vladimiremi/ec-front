import React from "react";
import {
  About,
  Author,
  Back,
  Camera,
  Container,
  Content,
  Emojis,
  Footer,
  Header,
  Input,
  Insert,
  MyComment,
  Title,
  TitleTask,
  YourComment,
} from "./styles";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ImHappy } from "react-icons/im";
import { GoPaperclip } from "react-icons/go";
import { MdOutlinePhotoCamera } from "react-icons/md";

export default function HelpMe() {
  return (
    <Container>
      <Header>
        <Back>
          <IoMdArrowRoundBack style={{ height: 25, width: 34 }} />
        </Back>
        <Title>Fórum</Title>
      </Header>

      <TitleTask>Desenvolvimento de Algorítmo</TitleTask>
      <About>
        Cite exemplos de algorítmos no seu cotidiano e como eles podem ajudar.
      </About>

      <Content>
        <MyComment>
          <Author>Kaic Torquato</Author>
          Qual a forma de algorítmo mais eficaz?
        </MyComment>

        <YourComment>
          <Author>Gabriele Lourenço</Author>
          Os algoritmos estão presentes em praticamente tudo ,temos exemplos
          deles como instagram,tik tok,WhatsApp,Facebook,Twitter e etc
        </YourComment>

        <YourComment>
          <Author>José Riquelme</Author>
          Os algoritmos estão presentes em praticamente tudo ,temos exemplos
          deles como instagram,tik tok,WhatsApp,Facebook,Twitter e etc
        </YourComment>

        <YourComment>
          <Author>Adriano Macedo</Author>
          Qual a forma de algorítmo mais eficaz?
        </YourComment>

        <YourComment>
          <Author>João Gabriel</Author>
          Os algoritmos estão presentes em praticamente tudo ,temos exemplos
          deles como instagram,tik tok,WhatsApp,Facebook,Twitter e etc
        </YourComment>

        <MyComment>
          <Author>Kaic Torquato</Author>
          Show!
        </MyComment>
      </Content>

      <Footer>
        <Emojis>
          <ImHappy style={{ display: "flex", height: 25, width: 25 }} />
        </Emojis>
        <Input />

        <Insert>
          <GoPaperclip style={{ display: "flex", height: 30, width: 30 }} />
        </Insert>

        <Camera>
          <MdOutlinePhotoCamera
            style={{ display: "flex", height: 30, width: 30 }}
          />
        </Camera>
      </Footer>
    </Container>
  );
}
