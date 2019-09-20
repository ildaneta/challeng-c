import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivBusca = styled.div`
  .busca {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CampoBusca = styled.input`
  border-radius: 20px;
  color: #2e6d94;
  width: 800px;
  height: 38px;
  border: 1px solid #fff;
  background: #ebebeb url(./images/search.svg) no-repeat 770px center;
  padding: 0 35px 0 10px;
  margin: 30px;
  font-family: 'Abel', sans-serif;
  font-size: 15px;

  &::placeholder{
    color: #2e6d94;
  }
`;

export const Listagemfilmes = styled.div`
  width: 830px;
  flex-direction: row;
  height: 270px;
  margin: 0 auto;
`;

export const ImgFilme = styled.img`
  display: flex;
  justify-content: flex-start;
  height: 265px;
  width: 175px;
  position: relative;
  float: left;
`;

export const DescCompleta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 640px;
  height: 265px;
  float: left;
  margin: 0 auto;
`;

export const HeaderFilme = styled.div`
  display: flex;
  background: #116193;
  height: 54px;

  box-shadow: 0.5px 0.5px 0.5px 0.5px rgba(107, 106, 106, 0.25);

  p{
    display: flex;
    flex-direction: row;

    margin: 10px 0 20px 93px;
    font-family: 'Abel', sans-serif;
    color: #48eff8;
    font-size: 33px;
    font-weight: lighter;
  }
`;

export const DescFilme = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 330px;
  background: #e6e6e6;
  padding-left: 14px;

  &::after{
    clear: both;
  }
`;

export const PorcentagemLista = styled.div`
  display: flex;
  align-items: center;
  background: #116193;
  border: 3px solid #48eff8;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  margin-top: -30px;
  box-shadow: 0px 0px 0px 3px #116193;

  p{
    display: flex;
    margin: 0 auto;
    font-family: "Abel", sans-serif;
    color: #48eff8;
    font-size: 20px;
  }
`;

export const DataFilme = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;

  span{
    color: #a5a1a1;
    font-family: "Lato", sans-serif;
    margin: -35px 0 0 69px;
    font-weight: 100;
  }
`;

export const TextoFilme = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 14.5px;
  line-height: 18.5px;
  color: #6e6a6a;
  padding-right: 12.9px;
  margin-bottom: 30px;
`;

export const TipoFilme = styled.div`
  display: flex;
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

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 60px;
  width: 250px;
  height: 50px;
`;

export const Paginacao = styled.div`
  margin: 0 5px;

  .enable {
    display: flex;
    justify-content: center;
    background: #116193;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: -10px;
    border: 2.4px solid #48eff8;
    box-shadow: 0px 0px 0px 1.6px #116193;
  }

  span .enable {
    color: #48eff8;
    font-size: 25px;
    margin: 0;
  }

  span.color {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #48eff8;
    cursor: pointer;
  }

  span.disable {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #116193;
    cursor: pointer;
  }
`;