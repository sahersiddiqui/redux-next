// posts will be populated at build time by getStaticProps()
export default function Table(props) {
    return (
        <>
            <props.title/>
            {props.new}
            {props.children}
        </>
    )
}