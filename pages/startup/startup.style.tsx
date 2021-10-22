import styled from 'styled-components';

const Grid = styled.div`
    text-align: center;
    overflow: scroll;
    margin: 0 auto;
    @media only screen and (max-widTh: 768px) {
        widTh: auto;
    }
    @media only screen and (min-widTh: 1200px) {
        widTh: 1200px;
    }
`

const Tr = styled.tr`
height: 69px;
`;

const Th = styled.th`
    text-align: left;
    padding: 0 30px;
    color: #292929;
    line-height: 22px;
    font-weight: normal;
    border-bottom: 1px solid #dddddd;
`;

const Thead= styled.thead`
&> ${Tr} > ${Th}{
    font-weight: bold; 
}
`



const Td = styled.td`
    padding: 0 30px;
    text-align: left;
    color: #666;
    line-height: 22px;
    font-size: 16px;
    letter-spacing: -0.05em;
    border-bottom: 1px solid #dddddd;
`;

const Table = styled.table`
    border-spacing: 0;
    border-top: 4px solid #009223;
    min-width:1200px;
`

const Tfoot = styled.tfoot`
&> ${Tr} > ${Th}{
    font-weight: bold;
}
&> ${Tr} > ${Td}{
    font-weight: bold;
}
background-color: #f6f6f6;
`
const ModalWrap = styled.div`

`
const Modal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`
const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 5% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    height:70%;
    width: 50%; /* Could be more or less, depending on screen size */
    border-radius: 20px;
    border: 0px;
    display: flex;
`

const Button = styled.button`
border: 0px;
border-radius: 5px;
width:120px;
height: 50px;
color: white;
font-size: ${props => props.theme.fontSizes.lg};
background-color: black;
`

const ContentBox = styled.div`
    display: inline-block;
    width:100%;
    padding: 30px 0;
    text-align: center;
`

const ContentWrap = styled.div`
text-align: center;
`;

const Style = {
    Grid,
    Tr,
    Th,
    Button,
    Td,
    Table,
    Tfoot,
    ModalContent,
    Modal,
    ContentBox,
    ContentWrap,
    Thead,
    ModalWrap
};

export default Style;