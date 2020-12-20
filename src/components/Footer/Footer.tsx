import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("Make By 김준혁")}</p>
                    <p style={{marginTop: "15px"}}>Theme By <a href="https://github.com/wnsgur1198/myfolio">myFolio</a></p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;