import React from 'react';
import UnityPage from "../modules/UnityPage";

const NumberWizard = () => {
    return(
        <UnityPage
            className='unity-page'
            title='Number Wizard'
        />
    );
}

const PooperPunk = () => {
    return(
        <UnityPage
        className='unity-page'
            title='Pooper Punk'
        />
    );
}

const BlockBreaker = () => {
    return(
        <UnityPage
        className='unity-page'
            title='Block Breaker'
        />
    );
}

const Platformer = () => {
    return(
        <UnityPage
        className='unity-page'
            title='2D Platformer'
        />
    );
}

export {
    NumberWizard,
    PooperPunk,
    BlockBreaker,
    Platformer
};