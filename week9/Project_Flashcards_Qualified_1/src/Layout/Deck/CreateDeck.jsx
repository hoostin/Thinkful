import React, { useEffect, useState } from "react";
import DeckView from "./DeckView";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import EditDeckForm from "../Forms/EditDeckForm";
import CreateDeckForm from "../Forms/CreateDeckForm";

export default function CreateDeck({ decks, setDecks }) {
  return (
    <div>
      <BreadCrumb decks={decks} />
      <h2>Create Deck</h2>
      <CreateDeckForm decks={decks} setDecks={setDecks} />
      {/* <EditDeckForm
        deck={deck}
        setDeck={setDeck}
        deckUrl={deckUrl}
        decks={decks}
        setDecks={setDecks}
      /> */}
    </div>
  );
}
