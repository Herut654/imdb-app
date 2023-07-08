import React, { useEffect } from "react"
import "./movies.css"
import CardList from "../components/cardList/cardList";
import { useSelector, useDispatch } from 'react-redux'
import { getTvShows } from "../features/tvShows/tvShowsSlice";
import Spinner from "../components/Spinner";

const TvShows = () => {
    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies)


    useEffect(() => {
        dispatch(getTvShows());
    });

    return (
        <>
            <div className="poster">
                <h2 className="list__title">MovieList</h2>
                {!movies ? <Spinner /> : (
                    <CardList dataList={movies} />
                )}
            </div>
        </>
    )
}

export default TvShows