import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import photo from '../images/PhotoMyrtleBeach.com-53.jpg';
import facebookLogo from '../images/104458_facebook_social media_fb_social_icon.png';
import githubLogo from '../images/394187_github_icon.png';
import instagramLogo from '../images/5279112_camera_instagram_social media_instagram logo_icon.png';
import twitterLogo from '../images/104461_twitter_icon.png';
import linkedInLogo from '../images/linkedin-logo.png'

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
        background: rgb(82, 183, 136);
        background: linear-gradient(to bottom, rgba(82, 183, 136, 1) 60%, rgba(64, 161, 116, 1) 60%, rgba(64, 161, 116, 1) 87%, rgba(53, 134, 95, 1) 87%);

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
            color: #06d6a0;
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

    & table {
        display: block;
        width: fit-content;
    }

    & h5 {
        margin: 0;
        text-align: center;
        padding: 100px 0 30px 0;
    }

    & #portrait {
        display: block;
        padding: 0;
        clip-path: circle(38%);
        width: 400px;
    }

    & #container {
        display: flex;
        justify-content: center;
        align-items: center;

        & > * {
            margin: 20px 100px;
        }
    }

    & #info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    & #info a {
        color: #06d6a0;
    }

    & textarea {
        resize: none;
        border-radius: 5px;
    }

    & form {
        display: flex;
        justify-content: center;
        align-items: center;

        & > * {
            margin: 5px;
        }
    }

    & h4 {
        text-align: center;
    }

    & th, td {
        padding-left: 40px;
        padding-right: 40px;
    }

    @media only screen and (max-width: 700px) {
        h1 {
            font-size: 40px;
            margin: 50px auto;
        }

        & h2 {
            font-size: 20px;
            margin: 50px auto;
        }

        & table {
            width: 100%;
        }

        & th, td {
            padding-inline: 20px;
        }
    }

    @media only screen and (max-width: 1590px) {
        & #container {
            flex-direction: column;
        }

        & #portrait {
            width: 300px;
        }
    }

    & .countdown-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: fit-content;
        margin: auto;

        & h2 {
            color: #06d6a0;
        }
    }

    & .countdown-content-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border: 4px solid #06d6a0;
        padding: 10px 20px;
        border-radius: 20px;
        width: fit-content;
    }

    & .interval-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .countdown-progressbar {
        width: 100%;
        height: 15px;
        background-color: #06d6a0;
        border-radius: 20px;
    }

    & .countdown-progressbar-container {
        width: 100%;
        margin-top: 20px;
        background-color: white;
        border-radius: 20px;
    }

    & .link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: white;
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <h1>Contact Me!</h1>
            <div id='container'>
                <div id='info'>
                    <img alt='' src={photo} id='portrait' />
                    <div>
                        <h2>Email: <a href='mailTo:christian.auman@outlook.com'>christian.auman@outlook.com</a></h2>
                        <h2>Phone: <a href='tel:3304865407'>( 330 )-486-5407</a></h2>
                    </div>
                </div>
                <table>
                    <tr>
                        <th><a className={'link'} href={'https://github.com/nboj'} target={'_blank'}
                            rel={'noreferrer'}>GitHub <img src={githubLogo} alt='' width='20px' height='20px' /></a></th>
                        <th><a className={'link'} href={'https://www.facebook.com/aumanchristian/'} target={'_blank'}
                            rel={'noreferrer'}>Facebook <img src={facebookLogo} alt='' width='20px' height='20px' /></a></th>
                    </tr>
                    <tr>
                        <td>Follow and get connected on Github</td>
                        <td>Follow to get to know more about me</td>
                    </tr>
                    <tr>
                        <th><a className={'link'} href={'https://www.instagram.com/christianaumanp/'} target={'_blank'}
                            rel={'noreferrer'}>Instagram <img src={instagramLogo} alt='' width='20px' height='20px' /></a></th>
                        <th><a className={'link'} href={'https://twitter.com/aumnchristian'} target={'_blank'}
                            rel={'noreferrer'}>Twitter <img src={twitterLogo} alt='' width='20px' height='20px' /></a></th>
                    </tr>
                    <tr>
                        <td>Follow to get to know more about me</td>
                        <td>Follow to get to know more about me</td>
                    </tr>
                    <tr>
                        <th><a className={'link'} href={'https://www.linkedin.com/in/christian-auman-a9537b203'} target={'_blank'}
                            rel={'noreferrer'}>Linked In <img src={linkedInLogo} alt='' width='20px' height='20px' /></a></th>
                    </tr>
                    <tr>
                        <td>Follow and get connected on linkedin.</td>
                    </tr>
                </table>
            </div>
            <h5 style={{ clear: 'both' }}>Christian Auman &copy; {new Date().getFullYear()}</h5>
        </FooterStyles>
    )
}

export default Footer;
