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

export default function task() {
  return (
    <Container>
      <Title>
        Tarefas
        <Link href={"/add"}>
          <Add>
            <MdAdd style={{ fontSize: 40 }} />
          </Add>
        </Link>
      </Title>

      <Link href={"/lessons"} >
      <Tasks>
        <TasksName>
          Desenvolvimento de Algorítmo
          <Status style={{ color: "green" }}>
            <FaCheckCircle />
            Feito
          </Status>
        </TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>
      </Link>

      <Tasks>
        <TasksName>
          Linguagem de Programação
          <Status style={{ color: "red" }}>
            <GoAlertFill />
            Pendente
          </Status>
        </TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>
          Arquitetura de Computadores
          <Status style={{ color: "red" }}>
            <GoAlertFill />
            Pendente
          </Status>
        </TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>
          Desenvolvimento de Jogos
          <Status style={{ color: "orange" }}>
            <RiProgress4Fill />
            Em andamento
          </Status>
        </TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>
          Fundamento de Banco de Dados
          <Status style={{ color: "green" }}>
            <FaCheckCircle />
            Feito
          </Status>
        </TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>
          Fundamentos Redes de Computadores
          <Status style={{ color: "green" }}>
            <FaCheckCircle />
            Feito
          </Status>
        </TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Tasks>
        <TasksName>
          Ambiente Virtual de Aprendizagem
          <Status style={{ color: "orange" }}>
            <RiProgress4Fill />
            Em andamento
          </Status>
        </TasksName>

        <TasksDate>
          25/05/2024
          <Hours>17:57</Hours>
        </TasksDate>
      </Tasks>

      <Footer>
        <TasksButton>
          <MdLibraryBooks style={{ height: 25, width: 25 }} />
          Tarefas
        </TasksButton>

        <SocialButton>
          <IoChatbubbleEllipsesOutline style={{ height: 25, width: 25 }} />
          Social
        </SocialButton>

        <PerfilButton>
          <IoPersonOutline style={{ height: 25, width: 25 }} />
          Perfil
        </PerfilButton>
      </Footer>
    </Container>
  );
}
