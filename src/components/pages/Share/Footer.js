import React from 'react';

const Footer = () => {
    const year = new Date ().getFullYear();
    return (
        <div>
            <footer className="footer-color">
                <div className="text-light text-center p-3">
                    <h5 className="px-2 text-light">Follow Me : </h5>
                    <div className='d-flex justify-content-center'>
                        <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://github.com/Sharif33"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-github"></i></a>
                        <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sharif-rashed-623abb193/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-linkedin"></i></a>
                        <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://www.facebook.com/sharif.rashed01/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-facebook"></i></a>
                        <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://www.instagram.com/rashu_33/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-instagram"></i></a>
                        <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://discord.com/channels/926693183734304769/926693184279547916"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-discord"></i></a>
                        <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://t.me/Rashu33"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-telegram"></i></a>
                        <a className="text-decoration-none " rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCi_qzc-uH_Aei4aRd5Pr73w"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-youtube"></i></a>
                    </div>
                    <p>Copyright <span>&copy;</span> {year} <span className="text-warning">Sharif Mohammad Rashed</span> All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;