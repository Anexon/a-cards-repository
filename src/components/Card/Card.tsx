import React from "react"
import "./Card.scss"

export default function Card(props: any) {
  return (
    <div className="card-container">
      <div className="title-container">
        <h1>{props.cardInfo.name}</h1>
        <span className="identifier">{props.cardInfo.id}</span>
      </div>
      <div
        className="picture-container"
        style={{ backgroundImage: "url(" + props.cardInfo.imageUrl + ")" }}
      ></div>
      <div className="description-container">
        <p className="description">{props.cardInfo.description}</p>
      </div>
    </div>
  )
}
