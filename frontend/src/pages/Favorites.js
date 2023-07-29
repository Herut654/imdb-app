import React from "react"
import "./movies.css"
import CardList from "../components/cardList/cardList";
import { useSelector } from 'react-redux'
import useStyles from "./style";

const Favorites = () => {
    const classes = useStyles();
    const favorites = useSelector((state) => state.favorites)
    const arr = []
    Object.keys(favorites).forEach(value => arr.push({ value: favorites[value] }))
    const array = arr[0].value

    return (
        <div className="poster">
            <h2 className="list__title">Favorites</h2>
            {array.length <= 0 ? <div className={classes.noFavText}>No Favorites</div> : <CardList dataList={array} />}
        </div>
    )
}

export default Favorites