import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const CSharpStyles = styled.div``;

const CSharp = () => {
    const [offset, setOffset] = useState();

    const handleScroll = () => {
        setOffset(window.scrollY);
    }

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <CSharpStyles> 
            <h1 id='title'>C#</h1>  
        </CSharpStyles>
    );
};

export default CSharp;