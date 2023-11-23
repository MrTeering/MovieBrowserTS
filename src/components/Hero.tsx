type heroPropsType = {
    title: string
}

const Hero = (props: heroPropsType) => {
    return (
        <header className="bg-dark py-4">
            <h1 className="text-light px-4">{props.title}</h1>
        </header>
    )
}

export default Hero