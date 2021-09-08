import React from 'react';
import './web.css';

const Web = () => {
    return(
        <div>
            <div id='web'> 
                <h1 id='title'>Web</h1>
            </div>
                <div id='flex'>
                    <div>
                        <h1>Html</h1>
                        <blockquote>
                            <p>Hello there!</p>
                        </blockquote>
                    </div>
                    <div>
                        <h1>Css</h1>
                    </div>
                    <div>
                        <h1>Javascript</h1>
                    </div>
                </div>
        </div>
    )
}

export default Web;