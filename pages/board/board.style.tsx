import styled from "styled-components";

const TabButton = styled.span<{isOpen: boolean}>`
    margin: 15px;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    color: #175436;
    opacity: ${props => props.isOpen ? ' 100%': '50%'};
    &:hover{
        color: #175436;
        opacity: 100%;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    }
`

const Style = {
    TabButton
};



export default Style;