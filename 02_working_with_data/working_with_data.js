import React from 'react';
import { render } from 'react-dom';
import { Component } from 'react';

const Card = (props) => {
  return (
    <div style={{
      margin: "1em"
    }}>
      <img width="75" src={props.avatar_url} />
      <div style={{
        display: "inline-block",
        marginLeft: 10
      }}>
        <div style={{
          fontSize: "1.25em",
          fontWeight: "bold"
        }}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

// Sample Data
let data = [
  {
    name: "Austin Lauritsen",
    avatar_url: "https://avatars2.githubusercontent.com/u/958206?v=4",
    company: "Very Austin"
  },
  {
    name: "Paul O’Shannessy",
    avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
    company: "Facebook"
  }
];

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

render(<CardList cards={data} />, document.getElementById('root'));