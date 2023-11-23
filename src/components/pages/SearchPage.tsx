import Hero from "../Hero"
import MovieMiniature from "../partials/MovieMiniature"

export interface searchResultInterface {
    original_title: string,
    poster_path: string,
    id: number
}

type searchTypes = {
    searchText: string
    searchResult: searchResultInterface []
}

const SearchPage = (props: searchTypes) => {
    const movies = props.searchResult.map((obj, i) => {
        const movie = {
            title: obj.original_title,
            id: obj.id,
            img: obj.poster_path
        }
        return(<MovieMiniature movie={movie} key={i}/>)
    })

    return (
        <>
        <Hero title={'Searched for: ' + props.searchText} />
        <div className="container">
            <div className="row">
                {movies}
            </div>
        </div>
        </>
    )
}

export default SearchPage