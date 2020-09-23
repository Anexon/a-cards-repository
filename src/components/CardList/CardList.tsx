import React from "react"
import Card from "../card"
import "./CardList.scss"

export default function CardList(props: any) {
  var json = require("../../../static/cards.json")
  return (
    <div className="card-list">
      {json.map((card: any, index: number) => {
        return <Card cardInfo={card} key={index}></Card>
      })}
    </div>
  )
}
