import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              id={robots[i].id}
              name={robots[i].name}
              serialnumber={robots[i].serialnumber}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;