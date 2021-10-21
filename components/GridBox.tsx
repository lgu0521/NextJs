import styled from 'styled-components';
import { Title3, Content } from './GlobalComponents';

interface BoxItem {
    step: string,
    procedure: string,
}

interface GridItemProps{
    height: string,
    col: number,
    mdCol: number,
    smCol: number
}

interface GridProps extends GridItemProps{
    boxItems: BoxItem[]
}


const GridBox = ({ boxItems, height, col, mdCol, smCol }: GridProps) => {
    return (
        <>
            { boxItems.map((item, key) => (
                <GridItem key={key} height={height} col={col} mdCol={mdCol} smCol={smCol}>
                    <Title3 style={FONT_STYLE}>
                        <p>{item.step}</p>
                    </Title3>
                    <Content>
                        <p>{item.procedure}</p>
                    </Content>
                </GridItem>
            ))
            }
        </>
    );
};

const FONT_STYLE = {
    color: "black",
    fontWeight: 500

}

const GridItem = styled.div<GridItemProps>`
    height: ${(props) => props.height ? props.height : '100px'};
    display:inline-block;
    margin: 10px;
    box-sizing: border-box;
    background: #f7f7f7;

    @media only screen and (max-width: 600px) {
        padding: 10px 10px;
        width: calc(100%/${(props) => props.smCol ? props.smCol : 2} - 23px);
    }
    @media only screen and (min-width: 600px) {
        padding: 10px 20px;
        width: calc(100%/${(props) => props.smCol ? props.smCol : 2} - 23px);
    }
    @media only screen and (min-width: 768px) {
        padding: 10px 20px;
        width: calc(100%/${(props) => props.mdCol ? props.mdCol : 3} - 23px);
    }
    @media only screen and (min-width: 992px) {
        padding: 10px 30px;
        width: calc(100%/${(props) => props.col ? props.col : 4} - 23px);
    }
    @media only screen and (min-width: 1200px) {
        padding: 10px 30px;
        width: calc(100%/${(props) => props.col ? props.col : 4} - 23px);
    }
`

export default GridBox;