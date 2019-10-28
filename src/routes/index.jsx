import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import LoginPage from '../pages/Login';
import CharacterPage from '../pages/Character';
import CharactersPage from '../pages/Characters';
import EpisodePage from '../pages/Episode';
import EpisodesPage from '../pages/Episodes';

export default function Routes() {
    return (
      <Switch>

        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute exact path="/">
          <EpisodesPage />
        </PrivateRoute>

        <PrivateRoute exact path="/episodes">
          <EpisodesPage />
        </PrivateRoute>

        <PrivateRoute path="/episodes/:id">
          <EpisodePage />
        </PrivateRoute>

        <PrivateRoute exact path="/characters">
          <CharactersPage />
        </PrivateRoute>

        <PrivateRoute path="/characters/:characterId">
          <CharacterPage />
        </PrivateRoute>

      </Switch>
    )
}