import styled from 'styled-components';

export const Container = styled.div`
  width: 1250px;
  margin: 0 auto;
`;

export const DescCompletaFilme = styled.div`
  background: #f2f2f2;
  height: 571px;
  margin-bottom: 40px;
`;

export const NomeFilme = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  flex-direction: column;
  background: #e2e2e2;
  margin-top: 50px;

  span {
    font-family: 'Abel', sans-serif;
    font-size: 40px;
    color: #116193;
    margin-left: 10px;
    padding: 10px 0 0 40px;
  }
`;

export const ImgFilme = styled.div`
  .img-filme {
    width: 350px;
    height: 500px;
    float: right;
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 350px;
  height: 500px;
  float: right;
`;

export const InfoComplementares = styled.div`
  width: 880px;
  padding: 30px 9px 30px 52px;
`;

export const Sinopse = styled.div`
  span {
    font-size: 23px;
    color: #116193;
    margin-bottom: 5px;
  }

  hr {
    margin: 5px 0px 12px 0px;
    border: 0;
    border-bottom: 2px solid #48eff8;
  }

  p {
    font-family: 'Lato', sans-serif;
    font-size: 14.5px;
    line-height: 18.5px;
    color: #6e6a6a;
    padding-right: 12.9px;
    margin-bottom: 35px;
  }
`;

export const Informacoes = styled.div`
  font-size: 23px;
  color: #116193;
  margin-bottom: 5px;

  hr {
    margin: 5px 0px 12px 0px;
    border: 0;
    border-bottom: 2px solid #48eff8;
  }
`;

export const Section = styled.section`
  width: 757px;
  height: 60px;
  margin-bottom: 60px;
`;

export const InfoTitulos = styled.section`
  margin-bottom: -3px;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 38px;
    margin-right: 9px;
  }

  span.letra {
    font-size: 23.5px;
    color: #116193;
    margin: 0 auto;
  }

  span.letra-menor {
    color: #6e6a6a;
    font-size: 14px;
    margin: 0 auto;
  }
`;

export const Classificacoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TipoFilme = styled.div`
  display: flex;
  margin-top: -30px;
  margin-left: 28px;
`;

export const Classif = styled.div`
  background: #fffefe;
  font-size: 13px;
  font-weight: 500;
  color: #116193;
  padding: 5px 11px;
  margin-right: 6px;
  border: 1px solid #116193;
  border-radius: 20px;
`;

export const ContainerPorc = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Porcentagem = styled.div`
  display: flex;
  align-items: center;
  background: #116193;
  border: 6px solid #48eff8;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 4px #116193;

  p {
    display: flex;
    margin: 0 auto;
    font-family: "Abel", sans-serif;
    color: #48eff8;
    font-size: 35px;
  }
`;

export const VideoTrailler = styled.section`
  display: flex;
  justify-content: center;
  height: 600px;
`;
