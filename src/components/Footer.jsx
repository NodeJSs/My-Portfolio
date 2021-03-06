import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled("footer")`
    background-color:#14161d;
    text-align: center;
    color: white;
    padding: 1.5rem 0;
    letter-spacing: 0.05rem;
    
    
    a{
        color: white;
        transition: color 0.5s;
        :hover{
            color: #4ecca3;
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p style = {{margin: "0.7rem",}}>Built with 🍻 by <a href = "https://github.com/NodeJSs">Yusuff Faruq</a></p>
        </StyledFooter>
    );
}

export default Footer;
