import React, { useEffect, useState } from "react"
import Card from "../Card/Card"
import { Firebase } from "../Firebase/firebase";
import PropTypes from "prop-types";
import "./CardList.scss"

export default function CardList(props: {
  firebase: Firebase
}) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  // let cards = require('../../../static/cards.json')
  useEffect(() => {
    props.firebase?.getCards().then((cards: any) => {
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
