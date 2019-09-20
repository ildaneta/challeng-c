import React from 'react';
import {
  Container,
  DescCompletaFilme,
  NomeFilme,
  ImgFilme,
  Img,
  InfoComplementares,
  Sinopse,
  Informacoes,
  Section,
  InfoTitulos,
  Classificacoes,
  TipoFilme,
  Classif,
  ContainerPorc,
  Porcentagem,
  VideoTrailler
} from './styles';
import thor from '../../assets/thor-ragnarok.jpeg';

export default function Description() {
  return (
    <>
      <header id="main-header">
        <div className="content">
          <p>Movies</p>
        </div>
      </header>
      <Container>
        <DescCompletaFilme>
            <NomeFilme>
              <span>Thor Ragnarok</span>
            </NomeFilme>
            <ImgFilme className="img-filme">
              <Img src={thor} alt="filme thor Ragnarok"/>
            </ImgFilme>
            <InfoComplementares>
              <Sinopse>
                <span>Sinopse</span>
                <hr/>
                <p>
                  Thor está preso do outro lado do universo. Ele precisa correr
                  contra o tempo para voltar a Asgard e parar Ragnarok, a destruição
                  de seu mundo, que está nas mãos da poderosa e implacável vilã
                  Hela.
                </p>
              </Sinopse>
              <Informacoes>
                <span>Informações</span>
                <hr />
              </Informacoes>
              <Section>
                <InfoTitulos>
                    <div>
                      <span class="letra">Situação</span>
                      <span class="letra-menor">Lançado</span>
                    </div>
                    <div>
                      <span class="letra">Idioma</span>
                      <span class="letra-menor">Inglês</span>
                    </div>
                    <div>
                      <span class="letra">Duração</span>
                      <span class="letra-menor">2h10min</span>
                    </div>
                    <div>
                      <span class="letra">Orçamento</span>
                      <span class="letra-menor">$180.000.000,00</span>
                    </div>
                    <div>
                      <span class="letra">Receita</span>
                      <span class="letra-menor">$853.977.000,00</span>
                    </div>
                    <div>
                      <span class="letra">Lucro</span>
                      <span class="letra-menor">$673.977.000,00</span>
                    </div>
                </InfoTitulos>
              </Section>
              <Classificacoes>
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
              </Classificacoes>
              <ContainerPorc>
                <Porcentagem>
                  <p>75%</p>
                </Porcentagem>
              </ContainerPorc>
            </InfoComplementares>
        </DescCompletaFilme>
      </Container>
      <VideoTrailler>
      <div>
        <iframe
          width="1250" height="555" src="https://www.youtube.com/embed/v7MGUNV8MxU"
          frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      </VideoTrailler>
    </>
  );
}
