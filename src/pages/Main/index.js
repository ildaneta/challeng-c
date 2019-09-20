import React from 'react';
import {
  Div,
  DivBusca,
  CampoBusca,
  Listagemfilmes,
  ImgFilme,
  DescCompleta,
  HeaderFilme,
  DescFilme,
  PorcentagemLista,
  DataFilme,
  TextoFilme,
  TipoFilme,
  Classif,
  Footer,
  Paginacao
} from './styles';
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
            <DataFilme>
              <span>25/10/2017</span>
            </DataFilme>
            <TextoFilme>
              <p>Thor está preso do outro lado do universo. Ele precisa correr
              contra o tempo para voltar a Asgard e parar Ragnarok, a destruição
              de seu mundo, que está nas mãos da poderosa e implacável vilã
              Hela. </p>
            </TextoFilme>
            <TipoFilme>
              <Classif>
                <span>Ação</span>
              </Classif>
              <Classif>
                <span>Aventura</span>
              </Classif>
              <Classif>
                <span>Fantasia</span>
              </Classif>
            </TipoFilme>
          </DescFilme>
        </DescCompleta>
      </Listagemfilmes>
      <Footer>
        <Paginacao>
          <span className="disable">1</span>
        </Paginacao>
        <Paginacao>
          <span className="enable color">2</span>
        </Paginacao>
        <Paginacao>
          <span className="disable">3</span>
        </Paginacao>
        <Paginacao>
          <span className="disable">4</span>
        </Paginacao>
      </Footer>
    </>
  );
}

export default Main;
