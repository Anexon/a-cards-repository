import React from "react"
import Card from "../components/card"
import "./index.scss"

export default function Home() {
  var json = require("../../static/cards.json")
  console.log(json)
  return (
    <div className="card-list">
      {json.map((card: any) => {
        return <Card cardInfo={card}></Card>
      })}
    </div>
  )
}
