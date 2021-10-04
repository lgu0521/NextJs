import Link from "next/link";
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    padding: 10px;
    margin-right: 10px;
`

const Li = styled.li`
    padding: 10px;
    color: white;
`
const Nav = styled.nav`
    width: 100%;
    height:100px;
`
const Wrap = styled.div`
    display: flex;
    justify-content: end;
    background: black;
`

const Header =  () => {
    return (
        <Nav>
            <Wrap>
                <Ul>
                    <Li>
                        <Link href="">
                            <a>Log in</a>
                        </Link>
                    </Li>
                    <Li>
                        <Link href="">
                            <a>Sing up</a>
                        </Link>
                    </Li>
                </Ul>
            </Wrap>
        </Nav>
    );
};

export default Header;