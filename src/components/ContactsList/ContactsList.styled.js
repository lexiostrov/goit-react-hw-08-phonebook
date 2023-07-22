import styled from 'styled-components';

export const ContactContainer = styled.ul`
  padding-inline-start: 0;
  margin: 0;
  margin-top: 20px;
  @media (min-width: 600px) {
    margin-top: 30px;
    width: 400px;
  }
`;

export const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;

  & > p {
    width: 30%;
    font-size: 16px;
    @media (min-width: 600px) {
      width: 50%;
      font-size: 22px;
    }
  }
`;
