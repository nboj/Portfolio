import React from 'react';
import './web.css';

const Web = () => {
    return(
        <div>
            <div id='web'> 
                <div id='outer-flex'>
                    <h1 id='title'>Web Development</h1> 
                    <div id='flex'>
                        <div>
                            <h1 className='title'>Html</h1>
                            <span className='underline' /> 
                            <p>Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text.</p> 
                        </div>
                        <div>
                            <h1 className='title'>Css</h1>
                            <span className='underline' />
                            <p>Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text.</p>
                        </div>
                        <div>
                            <h1 className='title'>Javascript</h1>
                            <span className='underline' />
                            <p>Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text. Sample text.</p>
                        </div>  
                    </div>
                </div> 
            </div> 
            <div id='react'>
                <img src='https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png' width='400px' className='reactLogo'/>
                <h1 id='title'>React</h1>
                    <div id='flex2'>
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
        </div>
    )
}

export default Web;