interface Props {
    itemCount: number,
    pageSize: number,
    currentCount: number,
    onPageChange: (page: number) => void
}

const PageNationButton = ({ itemCount, pageSize, onPageChange }: Props) => {
    const totallPageCount = Math.ceil(itemCount / pageSize);
    console.log(totallPageCount);
    return (
        <>
            <nav>
                <ul>
                    {Array(totallPageCount).fill(1).map((page, key) => (
                        <li key={key}>
                            <a onClick={() => onPageChange(key+1)}>{key + 1}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default PageNationButton