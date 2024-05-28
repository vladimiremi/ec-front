import React from "react";
import {
  Button,
  Container,
  Emojis,
  EmojisContainer,
  Input,
  Optional,
  Title,
} from "./styles";
import { IoMdHappy } from "react-icons/io";
import { BiTired } from "react-icons/bi";
import { FaRegFaceAngry, FaRegFaceTired } from "react-icons/fa6";
import { FaRegTired } from "react-icons/fa";
import { ImHappy } from "react-icons/im";
import { MdOutlineSick } from "react-icons/md";
import { BsEmojiFrown } from "react-icons/bs";
import { RiEmotionSadLine } from "react-icons/ri";
import Link from "next/link";

export default function Emotions() {
  return (
    <Container>
      <Title>Como você está se sentindo?</Title>
      <EmojisContainer>
        <Emojis>
          <ImHappy style={{ height: 30, width: 30 }} />
        </Emojis>
        <Emojis>
          <RiEmotionSadLine style={{ height: 35, width: 35 }} />
        </Emojis>
        <Emojis>
          <FaRegFaceAngry style={{ height: 30, width: 30 }} />
        </Emojis>
        <Emojis>
          <FaRegFaceTired style={{ height: 30, width: 30 }} />
        </Emojis>
        <Emojis>
          <MdOutlineSick style={{ height: 35, width: 35 }} />
        </Emojis>
        <Emojis>
          <BsEmojiFrown style={{ height: 30, width: 30 }} />
        </Emojis>
      </EmojisContainer>
      <Optional>
        Opcional
        <Input placeholder="O que está acontecendo?" />
      </Optional>

      <Link href={"/task"} >
        <Button>Continuar</Button>
      </Link>
    </Container>
  );
}
