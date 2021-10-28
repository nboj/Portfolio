import React from 'react';
import styled from 'styled-components';
import photo from '../images/PhotoMyrtleBeach.com-53.jpg';
import facebookLogo from '../images/104458_facebook_social media_fb_social_icon.png';
import githubLogo from '../images/394187_github_icon.png';
import instagramLogo from '../images/5279112_camera_instagram_social media_instagram logo_icon.png';
import linkedInLogo from '../images/734393_in_linked_media_online_social_icon.png';
import twitterLogo from '../images/104461_twitter_icon.png';

const FooterStyles = styled.div`
  & {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #212529;
    height: fit-content;
    width: 100%;
    color: #ffffff;
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 70px;
    background: rgb(82,183,136);
    background: linear-gradient(to bottom, rgba(82,183,136,1) 60%, rgba(64,161,116,1) 60%, rgba(64,161,116,1) 87%, rgba(53,134,95,1) 87%);

  }

  & h1 {
    position: relative;
    font-family: 'Raleway', sans-serif;
    color: transparent;
    font-size: 80px;
    width: fit-content;
    font-weight: 800;
    line-height: 72px;
    margin: 100px auto 100px auto;
    text-align: center;
    text-transform: uppercase;

    &:after {
      position: absolute;
      content: 'CONTACT ME!';
      color: #40916c;
      clip-path: polygon(70% 0, 100% 0, 100% 67%, 70% 50%);
      right: -4px;
      top: 0.8px;
    }

    &:before {
      position: absolute;
      content: 'CONTACT ME!';
      color: white;
      clip-path: polygon(0 0, 70% 0, 70% 50%, 100% 67%, 100% 100%, 0 100%);
    }
  }

  & td {
    padding: 0 0 100px 0;
  }

  & th {
    position: relative;
    color: #f8f8f8;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 0 24px;
    text-decoration: underline;
  }

  & th, td {
    padding-right: 40px;
    padding-left: 40px;
  }

  & table {
    display: block;
    float: right;
    width: fit-content;
    margin-right: 70px;
    margin-top: 100px;
  }

  & h5 {
    margin: 0;
    text-align: center;
    padding: 100px 0 30px 0;
  }

  & #portrait {
    display: block;
    float: left;
    padding: 0;
    clip-path: circle(38%);
    width: 400px;
  }

  & #container {
    position: relative;
  }

  & #info {
    display: flex;
    position: absolute;
    height: 100%;
    justify-content: center;
    align-items: center;
    float: left;
  }

  & #info a {
    color: #06d6a0;
  }

  & th img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(10px);
  }

  @media only screen and (max-width: 1590px) {
    & #info {
      position: relative;
      margin: 100px auto;
      float: none;
    }

    & #portrait {
      width: 300px;
    }

    & table {
      float: none;
      margin: auto;
    }
  }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <h1>Contact Me!</h1>
            <div id='container'>
                <div id='info'>
                    <img alt='' src={photo} id='portrait'/>
                    <div>
                        <h2>Email: <a href='mailTo:christian.auman@outlook.com'>christian.auman@outlook.com</a></h2>
                        <h2>Phone: <a href='tel:3304865407'>( 330 )-486-5407</a></h2>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>GitHub <img src={githubLogo} alt='' width='20px' /></th>
                        <th>Facebook <img src={facebookLogo} alt='' width='20px' /></th>
                    </tr>
                    <tr>
                        <td>Follow and get connected on Github</td>
                        <td>Follow to get to know more about me</td>
                    </tr>
                    <tr>
                        <th>Instagram <img src={instagramLogo} alt='' width='20px' /></th>
                        <th>Twitter <img src={twitterLogo} alt='' width='20px' /></th>
                    </tr>
                    <tr>
                        <td>Follow and get connected on Github</td>
                        <td>Follow to get to know more about me</td>
                    </tr>
                    <tr>
                        <th>Linked In <img src={linkedInLogo} alt='' width='20px' /></th>
                        <th>Twitter <img src={twitterLogo} alt='' width='20px' /></th>
                    </tr>
                    <tr>
                        <td>Follow and get connected on Github</td>
                        <td>Follow to get to know more about me</td>
                    </tr>
                </table>
            </div>
            <h5 style={{clear: 'both'}}>Christian Auman &copy; 2021</h5>
        </FooterStyles>
    )
}

export default Footer;