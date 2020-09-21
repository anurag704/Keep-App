import React from'react';

const Footer = () =>{

 const year =new Date().getFullYear();

return (
<>
<footer className="fixed-bottom">
    <p>copyright © {year}</p>
</footer>
</>
);
};

export default Footer;