import { Link } from "react-router-dom"

type movieMiniatureProps = {
    movie: {
        id: number,
        title: string,
        img: string
    }
}

const MovieMiniature = (props:movieMiniatureProps) => {
    let posterUrl
    if (props.movie.img) {
        posterUrl = `https://image.tmdb.org/t/p/w500/${props.movie.img}`
    } else {
        posterUrl = `https://loremflickr.com/500/750` 
    }

    return (

        <div className="col-md-3 movieMini pt-4">
            <img src={posterUrl} className="card-img-top" alt={props.movie.title} />
            <p className="movieMiniTitle">{props.movie.title}</p>
            <Link to={'/movie/' + props.movie.id} className="btn btn-primary movieMiniBtn">To title</Link>
        </div>

    )
}

export default MovieMiniature