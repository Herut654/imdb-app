import React, { useEffect } from "react"
import "./movies.css"
import CardList from "../components/cardList/cardList";
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from "../features/movies/moviesSlice";

const Movies = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies)

    useEffect(() => {
        dispatch(getMovies());
    });

    return (
        <div className="poster">
            <h2 className="list__title">MovieList</h2>
            <CardList dataList={movies} />
        </div>
    )
}

export default Movies