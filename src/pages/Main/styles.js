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
