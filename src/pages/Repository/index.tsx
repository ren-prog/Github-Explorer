import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

import { Header, RepositoryInfo, Issues } from "./styles";
import logo from "../../assets/logo.svg";

interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="" />
        <Link to="/">
          <FiChevronRight size={20} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong></strong>
            <p></p>
          </div>
        </header>
        <ul>
          <li>
            <strong></strong>
            <span></span>
          </li>
          <li>
            <strong></strong>
            <span></span>
          </li>
          <li>
            <strong></strong>
            <span></span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asdasd">
          <div>
            <strong>asdasdasd</strong>
            <p>asdasdasd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
