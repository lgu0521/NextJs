import Link from "next/link";
import styled from 'styled-components';
import Logo from '../../public/logo.jpeg'
import Image from 'next/image';
import { useMediaQuery } from "react-responsive"



const Ul = styled.div`
    display: flex;
    list-style: none;
`
const Li = styled.li`
    font-weight:500;
    color: #333333;
    text-decoration: none;
    @media only screen and (max-width: 600px) {
        font-size:${props => props.theme.fontSizes.xl};
        padding: 0 15px 0 15px;
    }
    @media only screen and (min-width: 600px) {
        font-size:${props => props.theme.fontSizes.xl};
        padding: 0 15px 0 15px;
    }
    @media only screen and (min-width: 768px) {
        font-size:${props => props.theme.fontSizes.xxl};
        padding: 0 30px 0 30px;
    }
    @media only screen and (min-width: 992px) {
        font-size:${props => props.theme.fontSizes.xxl};
        padding: 0 30px 0 30px;
    }
    @media only screen and (min-width: 1200px) {
        font-size:${props => props.theme.fontSizes.xxl};
        padding: 0 30px 0 30px;
    }
`

type WrapProps = {
    width: string,
    height: string
}

type NavProps = {
    height: string
}


const Wrap = styled.div`
    display: flex;
    float: left;
    justify-content: center;
    align-items: center;
    height: ${(props: NavProps) => props.height ? props.height : ""};
    width: ${(props: WrapProps) => props.width ? props.width : ""};
`
const LineWrap = styled.div`
    display: flex;
    float: left;
    justify-content: center;
    align-items: center;
    height: ${(props: NavProps) => props.height ? props.height : ""};
    width: ${(props: WrapProps) => props.width ? props.width : ""};
    box-shadow: 4px 4px 4px rgb(0 0 0 / 5%);
    @media only screen and (min-width: 768px){
        height: 60px !important;
    }
`

const Nav = styled.div`
    width: 100%;
    height: ${(props: NavProps) => props.height ? props.height : ""};
`
const Heade = styled.div`
    box-sizing: border-box;
    border-bottom: 1px solid rgb(0 0 0 / 20%);
    @media only screen and (min-width: 992px){
        box-shadow: 0 3px 3px rgb(0 0 0 / 20%) !important;
    }
`
const Header = () => {
    const isPc = useMediaQuery({
        query: "(min-width:992px)"});

    return (
        <div>{
            isPc ?
            <Heade>
                <Nav height="100px">
                    <Wrap width="20%" height="100%"> 
                        <Image height={70} width={78} src={Logo} />
                    </Wrap>
                    <Wrap width="60%" height="100%">
                        <Ul>
                            <Li>
                                <Link href="/brand">
                                    <a>브랜드</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="meau">
                                    <a>메뉴</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="store">
                                    <a>매장</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/business">
                                    <a>창업안내</a>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="/board">
                                    <a>게시판</a>
                                </Link>
                            </Li>
                        </Ul>
                    </Wrap>
                    <Wrap width="20%" height="100%"/>
                </Nav>
            </Heade>:
            <Heade>
            <Nav height="75px">
                <Wrap width="100%" height="75px">
                    <Image height={60} width={68} src={Logo} />
                </Wrap>
                <LineWrap width="100%" height="50px">
                    <Ul>
                        <Li>
                            <Link href="/brand">
                                <a>브랜드</a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="meau">
                                <a>메뉴</a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="store">
                                <a>매장</a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/business">
                                <a>창업안내</a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="/board">
                                <a>게시판</a>
                            </Link>
                        </Li>
                    </Ul>
                </LineWrap>
            </Nav>
        </Heade>
        }
        </div>

    )
};

export default Header;