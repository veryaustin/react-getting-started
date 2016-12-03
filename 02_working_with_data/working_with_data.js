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

const CardList = (props) => {
  return (
    <div>
      <Card name="Austin Lauritsen"
        avatar_url="https://avatars2.githubusercontent.com/u/958206?v=4"
        company="Very Austin"
      />
    </div>
  );
};

render(<CardList />, document.getElementById('root'));