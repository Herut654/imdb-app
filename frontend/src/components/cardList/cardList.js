import React from "react"
import "./cardList.css"
import Cards from "../card/card"

const CardList = ({ dataList }) => {

    return (
        <div className="movie__list">
            <div className="list__cards">
                {
                    dataList.map((data, i) => (
                        <Cards data={data} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default CardList