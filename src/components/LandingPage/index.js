import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPageStyle.css'



function LandingPage() {
    return (
            <div className='entero' >
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link to="/home">
                        <button className='boton'> Home</button>
                    </Link>
                    <br></br>
                    <span className='sign'>Developed by: <a className="link" href='https://www.linkedin.com/in/juan-pablo-arnau-aba418233/'> JuanArnau7 </a></span>
            </div>
    );
}

export default LandingPage;
