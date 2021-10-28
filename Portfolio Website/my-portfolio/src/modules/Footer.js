import react from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  & {
    background-color: #212529;
    height: fit-content;
    width: 100%;
    padding: 100px 0;
    color: #ffffff;
  }
  
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 30px; 
    transform: translateY(-100px);
    background: linear-gradient(to bottom, #52b788 60%, #40916c 40%);
  }

  & h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 62px;
    font-weight: 800;
    line-height: 72px;
    margin: 0 0 24px;
    text-align: center;
    text-transform: uppercase;
  }
  
  & td {
    padding: 0 0 20px 0;
  }
  
  & th,td {
    padding: 0 20px;
  }
  
  & table {
    width: fit-content;
    margin: 100px 30px 0 auto;
  }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <h1>Contact Me!</h1>
            <table>
                <tr>
                    <th>GitHub</th>
                    <th>Facebook</th>
                </tr>
                <tr>
                    <td>Follow and get connected on Github</td>
                    <td>Follow to get to know more about me</td>
                </tr>
                <tr>
                    <th>GitHub</th>
                    <th>Facebook</th>
                </tr>
                <tr>
                    <td>Follow and get connected on Github</td>
                    <td>Follow to get to know more about me</td>
                </tr>
            </table>
        </FooterStyles>
    )
}

export default Footer;