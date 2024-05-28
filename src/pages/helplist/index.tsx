import React from "react";

import {
  Container,
  Tasks,
  TasksDate,
  TasksName,
  Hours,
  Status,
  Title,
  Footer,
  TasksButton,
  SocialButton,
  PerfilButton,
  Add,
} from "./styles";
import { MdAdd, MdLibraryBooks } from "react-icons/md";
import { IoChatbubbleEllipsesOutline, IoPersonOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { RiProgress4Fill } from "react-icons/ri";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function HelpList() {
  return (
    <Container>
      <Title>
        <Link href={"/task"}>
          <Add>
            <IoMdArrowBack style={{ fontSize: 40 }} />
          </Add>
        </Link>
        Tarefas
      </Title>

      <Link href={"/helpme"} >
        <Tasks>
          <TasksName>Desenvolvimento de Algorítmo</TasksName>

          <TasksDate>
            25/05/2024
            <Hours>17:57</Hours>
          </TasksDate>
        </Tasks>
      </Link>

      <Tasks>
        <TasksName>Linguagem de Programação</TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>Arquitetura de Computadores</TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>Desenvolvimento de Jogos</TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>Fundamento de Banco de Dados</TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>Fundamentos Redes de Computadores</TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>Ambiente Virtual de Aprendizagem</TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Footer />
    </Container>
  );
}
