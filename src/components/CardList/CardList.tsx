import React, { useState, useEffect } from "react"
import Card from "../Card/Card"
import { Firebase } from "../Firebase";
import PropTypes from "prop-types";
import "./CardList.scss"

export default function CardList(props: {
  firebase: Firebase
}) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    props.firebase?.getCards().then(cards => {
      setIsloading(false);
      setCards(cards);
    });
  }, [props]);

  return (
    <div className="card-list">
      {isLoading && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
      {cards.map((card: any, index: number) => {
        return <Card cardInfo={card} key={index}></Card>
      })}
    </div>
  )
}

CardList.propTypes = {
  firebase: PropTypes.instanceOf(Firebase),
};
