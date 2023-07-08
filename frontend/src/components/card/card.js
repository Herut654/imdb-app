import React, { useEffect, useState } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from "../../features/favorites/favoriteSlice";
import { IconButton } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

const Cards = ({ data }) => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites)
    const arr = []
    Object.keys(favorites).forEach(value => arr.push({ value: favorites[value] }))
    const array = arr[0].value

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>
        {
            isLoading
                ?
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
                :
                <div className="cards">
                    <img className="cards__img" alt="dataImage" src={"http://image.tmdb.org/t/p/w500/" + data.backdrop_path} />
                    <div className="cards__overlay">
                        <div className="card__title">{data.title}</div>
                        <div className="card__runtime">
                            {data ? data.release_date : ""}
                            <span className="card__rating">{data ? data.vote_average : ""}<i className="fas fa-star" /></span>
                        </div>
                        <div className="card__description">{data ? data.overview.slice(0, 118) + "..." : ""}</div>
                        {array.find(({ id }) => id === data.id) ?
                            <IconButton onClick={() => dispatch(removeFavorite(data))} className="likeBtn">
                                <FavoriteBorder className="likeBtn" />
                            </IconButton>
                            :
                            <IconButton onClick={() => dispatch(addFavorite(data))} className="unLikeBtn">
                                <FavoriteBorder className="unLikeBtn" />
                            </IconButton>
                        }
                    </div>

                </div>
        }
    </>
}

export default Cards