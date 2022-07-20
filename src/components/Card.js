import React from 'react';

const Card = ({ name, email, id }) => {
  let random = Math.random(1, 9999);
  return (
    <div className='tc grow bg-light-pink br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${random}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
