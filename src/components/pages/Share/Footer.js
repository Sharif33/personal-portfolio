import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundColor: "#223A5E" }}>
                <div className="p-2 bg-dark text-center">
                    <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://github.com/Sharif33"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-github"></i></a>
                    <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sharif-rashed-623abb193/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-linkedin"></i></a>
                    <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://www.facebook.com/sharif.rashed01/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-facebook"></i></a>
                    <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://www.instagram.com/rashu_33/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-instagram"></i></a>
                    <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://t.me/Rashu33"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-telegram"></i></a>
                    <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCi_qzc-uH_Aei4aRd5Pr73w"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-youtube"></i></a>
                </div>
                <div className="text-light text-center p-3">
                    <p>Copyright <span>&copy;</span>2021 <span className="text-warning">Sharif Mohammad Rashed</span> All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;