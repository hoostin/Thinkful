import React, { useEffect, useState, useRef } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { deleteCard } from "../../utils/api";
export default function CardView({
  card: { id, front, back },
  cards,
  setCards,
  deck,
  setDeck,
  decks,
  setDecks,
}) {
  const url = useRouteMatch().url;
  function handleDelete(event) {
    const abortController = new AbortController();
    if (window.confirm("Delete this card?")) {
      // const tempCards = cards.filter((card) => card.id != id);
      // setCards([...tempCards]);
      // const tempDeck = deck;
      // tempDeck.cards = cards;
      // setDeck(...tempDeck);
      // const tempDecks = decks.filter((theDeck) => theDeck.id != deck.id);
      // tempDecks.push(tempDeck);
      // deleteCard(id, abortController.signal);
      deleteCard(id, abortController.signal)
        .then(() => {
          const filteredCards = deck.cards.filter(
            (selected) => selected.id !== id
          );
          setDeck(() => {
            return { ...deck, cards: filteredCards };
          });
          setCards(() => {
            return [...filteredCards];
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  return (
    <div className="card container">
      <div className="d-flex row ">
        <div className="col-6">
          <p>{front}</p>
        </div>
        <div className="col-6">
          <p>{back}</p>
        </div>
      </div>
      <div className=" float-right text-right">
        <Link
          to={`${url}/cards/${id}/edit`}
          className="btn btn-secondary ml-1 oi oi-pencil"
        >
          Edit
        </Link>
        <button
          className="btn btn-danger float-right oi oi-trash ml-3"
          onClick={handleDelete}
        ></button>
      </div>
    </div>
  );
}
