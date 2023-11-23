import { useParams } from "react-router-dom"
import Hero from "../Hero"
import { useEffect, useState } from "react"

interface movieParamsInterface {
    original_title: string,
    poster_path: string,
    overview: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    revenue: number,
    runtime: number
}

const MovieDetailPage = () => {
    const { id } = useParams()
    const [movieParams, setMovieParams] = useState<movieParamsInterface>()
    
    let movieTitle:string
    if (movieParams?.original_title) {
        movieTitle = movieParams.original_title
    } else {
        movieTitle = 'Loading the movie...'
    }

    let posterUrl:string

    if (movieParams?.poster_path) {
        posterUrl = `https://image.tmdb.org/t/p/w500/${movieParams.poster_path}`
    } else {
        posterUrl = `https://loremflickr.com/500/750`
    }

    const revenue = movieParams?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=3c8d059046e9bb1392d6c5f0d03dbac5`)
            .then(response => response.json())
            .then(data => {
                setMovieParams(data)
            })
    }, [id])

    function renderMovie() {
        return (
            <>
                <Hero title={movieTitle} />
                <div className="container">
                    <div className="row py-4">
                        <div className="col-md-3">
                            <img src={posterUrl} className="card-img-top" alt={movieTitle} />
                        </div>
                        <div className="col-md-6">
                            <h2>{movieParams?.original_title}</h2>
                            <h4>{movieParams?.tagline}</h4>
                            <p>{movieParams?.overview}</p>
                            <ul>
                                <li>{movieParams?.vote_average}/10 over {movieParams?.vote_count} votes</li>
                                <li>Runtime: {movieParams?.runtime}</li>
                                <li>Revenue: $ {revenue}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return renderMovie()
}

export default MovieDetailPage