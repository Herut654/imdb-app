import React from "react"
import "./movies.css"
import CardList from "../components/cardList/cardList";
import { useSelector } from 'react-redux'
import Spinner from "../components/Spinner";

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites)
    const arr = []
    Object.keys(favorites).forEach(value => arr.push({value: favorites[value]}))
    const array = arr[0].value

    return (
        <>
            <div className="poster">
                <h2 className="list__title">MovieList</h2>
                {!array ? <Spinner /> : (
                    <CardList dataList={array} />
                )}
            </div>
        </>
    )
}

export default Favorites