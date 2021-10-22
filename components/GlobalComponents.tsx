import styled from 'styled-components';

const Title1 = styled.span`
@media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes.xl};;
}
@media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes.xl};
}
@media only screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xxl};
}
@media only screen and (min-width: 992px) {
    font-size: ${props => props.theme.fontSizes.xxl};
}
@media only screen and (min-width: 1200px) {
    font-size: ${props => props.theme.fontSizes.titleSize};
}
color: #333;
`;

const Title2 = styled.span`
@media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes.lg};;
}
@media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes.xl};
}
@media only screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xl};
}
@media only screen and (min-width: 992px) {
    font-size: ${props => props.theme.fontSizes.xxl};
}
@media only screen and (min-width: 1200px) {
    font-size: ${props => props.theme.fontSizes.xxl};
}
color: #333;
`;

const Title3 = styled.span`
@media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes.md};;
}
@media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes.md};
}
@media only screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.lg};
}
@media only screen and (min-width: 992px) {
    font-size: ${props => props.theme.fontSizes.lg};
}
@media only screen and (min-width: 1200px) {
    font-size: ${props => props.theme.fontSizes.xl};
}
color: #333;
`;

const Content = styled.span`
@media only screen and (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes.xm};;
}
@media only screen and (min-width: 600px) {
    font-size: ${props => props.theme.fontSizes.sm};
}
@media only screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.md};
}
@media only screen and (min-width: 992px) {
    font-size: ${props => props.theme.fontSizes.md};
}
@media only screen and (min-width: 1200px) {
    font-size: ${props => props.theme.fontSizes.lg};
}
color: #333;
`;

export { Title1, Title2, Title3, Content , Button};

interface PropsType {
    width?: string;
}


const Button = styled.button < PropsType > `
    padding: 15px 10px;
    text-align: center;
    margin-top: 30px;
    border-radius: 30px;
    border: 0px;
    height: 60px;
    ${({ width }) => {
        return width ? `width: ${width};` : 'width: 70%;';
    }
    }
    color: white;
    font-size: 18px;
    font-weight: bold;
    background-color: #009223;
    &:hover {
        background-color: #ffce32;
        transition: background-color 0.3s;
        -webkit-transition: background-color 0.3s;
    };
    cursor: pointer;
`;