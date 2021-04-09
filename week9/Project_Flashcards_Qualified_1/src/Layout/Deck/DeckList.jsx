import React, { useEffect, useState } from "react";
import CreateDeckButton from "./CreateDeckButton";
//import Header from "../Header";
//import NotFound from "../NotFound";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Deck from "./Deck";
import { listDecks } from "../../utils/api/index";

export default function DeckList({ decks, setDecks }) {
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then(setDecks).catch(setError);

    return () => abortController.abort();
  }, []);

  if (error) {
    //  return <ErrorMessage error={error} />;
    console.log("very big bad");
  }
  const deckList = decks.map((deck) => (
    <Deck key={deck.id} deck={deck} decks={decks} setDecks={setDecks} />
  ));

  return (
    <div>
      <CreateDeckButton />
      {deckList}
    </div>
  );
}
