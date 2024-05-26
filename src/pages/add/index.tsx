import React from "react";
import {
  AddDescription,
  AddTask,
  AddTitle,
  Container,
  ContainerName,
  Date,
  Deadline,
  Description,
  Title,
  ToClose,
} from "./styles";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Add() {
  return (
    <Container>
      <ContainerName>Nova Tarefa</ContainerName>
      <Link href={"/task"}>
        <ToClose>
          <IoMdClose />
        </ToClose>
      </Link>

      <Title>
        Título
        <AddTitle placeholder="Adicione um título" />
      </Title>

      <Description>
        Descrição
        <AddDescription placeholder="Adicione uma descrição" />
      </Description>

      <Deadline>
        Data de Entrega
        <Date style={{color:"#9598a6"}} type="date" placeholder="Data de Entrega" />
      </Deadline>

      <AddTask>Publicar</AddTask>
    </Container>
  );
}
