import styled from "styled-components";

const ContentBox = styled.div`
    display: inline-block;
    width:100%;
    padding: 30px 0;
    text-align: center;
`

const TabButton = styled.span`
margin: 15px;
font-size: 25px;
font-weight: bold;
cursor: pointer;
&:hover{
    color: #ffce32;
    transition: background-color 0.3s;
    -webkit-transition: background-color 0.3s;
}
`
const ContentWrap = styled.div`
    @media only screen and (max-width: 768px) {
        width: auto;
    }
    @media only screen and (min-width: 1200px) {
        width: 1200px;
    }
    justify-content: center;
    text-align: center;
    margin: 0px auto ;
`


const Style = {
    ContentBox,
    TabButton,
    ContentWrap
};



export default Style;