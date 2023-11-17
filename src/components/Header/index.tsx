import React from 'react';
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartPie, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUsers, faChartPie, faUser); // Add the down arrow icon

export function Header() {
  return (
    <header className="header">
      <div className="card-container">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>
      </div>
      <nav className="nav">
        <ul className="menu">
          <li>
            <a href="/funcionarios" className="menu-item">
              <FontAwesomeIcon icon={faUsers} className="menu-icon" />
              <span className="menu-text">Funcionários</span>
            </a>
          </li>
          <li>
            <a href="/pgr" className="menu-item">
              <FontAwesomeIcon icon={faChartPie} className="menu-icon" />
              <span className="menu-text">PGR</span>
            </a>
          </li>
          <li>
            <a href="/meu-cadastro" className="menu-item">
              <FontAwesomeIcon icon={faUser} className="menu-icon" />
              <span className="menu-text">Meu Cadastro</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
