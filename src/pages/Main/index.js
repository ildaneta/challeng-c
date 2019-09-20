import React from 'react';
import { DivBusca, Busca } from './styles';

function Main() {
  return (
    <>
      <header id="main-header">
        <div className="content">
          <p>Movies</p>
        </div>
      </header>
      <DivBusca>
        <Busca
          type="text"
          placeholder="Busque um filme por nome, ano ou gênero..."
        />
      </DivBusca>
    </>
  );
}

export default Main;
