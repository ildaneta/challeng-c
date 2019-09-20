import styled from 'styled-components';

export const DivBusca = styled.div`
  .busca {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Busca = styled.input`
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
