import React, { useEffect } from 'react';

const Footer = () => {
    const year = new Date ().getFullYear();

    // Youtube

    useEffect(() => {
        const script2 = document.createElement('script');
    
        script2.src = `https://apis.google.com/js/platform.js`;
        script2.async = true;
        script2.defer = true;
    
        document.body.appendChild(script2);
    
        return () => {
          document.body.removeChild(script2);
        };
      }, []);

    // Github

    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = '//cdn.jsdelivr.net/github-cards/latest/widget.js';
    //     script.async = true;
    //     script.defer = true;
    
    //     document.body.appendChild(script);
    
    //     return () => {
    //       document.body.removeChild(script);
    //     };
    //   }, []);
    useEffect(() => {
       
        const script = document.createElement('script');
        script.src = 'https://buttons.github.io/buttons.js';
        script.async = true;
        script.defer = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);



    return (
        <div>
            <footer className='bg-skill-back'>
                <div className="text-light-slate text-center p-3">

                    <div className='d-flex justify-content-center align-item-center'>
                            {/* Github */}

                                {/* <div className="github-card" data-github="Sharif33" data-width="350" data-height="" data-theme="default">
                                </div>    */}
                        <div className='m-3 text-center'>
                            <a className="github-button" 
                            href="https://github.com/Sharif33" data-size="large" data-show-count="true" 
                            aria-label="Follow @Sharif33 on GitHub">Follow @Sharif33
                            </a>
                        </div>
                        {/* Youtube */}

                        <div className='m-3  text-center'>
                            <div className="g-ytsubscribe" 
                                data-channelid="UCi_qzc-uH_Aei4aRd5Pr73w" 
                                data-layout="default" 
                                data-count="default">                                
                            </div> 
                        </div>
                        
                    </div>

                    <div>
                        <p>Copyright <span>&copy;</span> {year} <span className="text-info font-custom">Sharif Mohammad Rashed</span> .</p>
                    </div>
                    
                </div>
            </footer>
        </div>
    );
};

export default Footer;