import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title> Explore repositórios no github </Title>

      <Form action="">
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62337593?s=460&u=5d39faf678bc8f8ebf40e9d9b53fd95939133538&v=4"
            alt="Renan"
          />

          <div>
            <strong> Rockeseat/unform</strong>
            <p>Easy peasy highly</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62337593?s=460&u=5d39faf678bc8f8ebf40e9d9b53fd95939133538&v=4"
            alt="Renan"
          />

          <div>
            <strong> Rockeseat/unform</strong>
            <p>Easy peasy highly</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
