import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Book from '../images/book.png';
import Star from './star';
import ComplimentForm from './complimentForm';
import Start from './start';

export default () => (
  <div className="app-container">
    <img className="image-book" alt="Book" src={Book} />
    <h1 className="font-worksans-semi text-title">Como foi a ajuda do tutor?</h1>
    <div className="container-star">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
    <Switch>
      <Route exact path="/">
        <Start />
      </Route>
      <Route exact path="/complimentForm">
        <ComplimentForm />
      </Route>
    </Switch>
    <div className="container-main-buttons">
      <Link className="font-worksans-semi button-cancel" to="/">
        PULAR
      </Link>
      <Link className="button button-confirm" to="#noWhereYet">
        <p className="font-worksans-semi button-confirm__text">CONFIRMAR</p>
        <div className="button-confirm__shadow" />
      </Link>
    </div>
  </div>
);
