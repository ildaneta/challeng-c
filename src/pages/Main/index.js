import React from 'react';
import { Div, DivBusca, CampoBusca, Listagemfilmes, ImgFilme, DescCompleta, HeaderFilme, DescFilme, PorcentagemLista } from './styles';
import thor from '../../assets/thor-ragnarok.jpeg';

function Main() {
  return (
    <>
      <header id="main-header">
        <div className="content">
          <p>Movies</p>
        </div>
      </header>
      <Div>
        <DivBusca className="busca">
          <CampoBusca
            type="text"
            placeholder="Busque um filme por nome, ano ou gênero..."
          />
        </DivBusca>
      </Div>

      <Listagemfilmes>
        <ImgFilme src={thor} alt="filme thor Ragnarok" />
        <DescCompleta>
          <HeaderFilme>
            <p>Thor: Ragnarok</p>
          </HeaderFilme>
          <DescFilme>
            <PorcentagemLista>
              <p>75%</p>
            </PorcentagemLista>
          </DescFilme>
        </DescCompleta>
      </Listagemfilmes>
    </>
  );
}

export default Main;
