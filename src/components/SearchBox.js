import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa1'>
      <input
        className='pa2 b-green bg-lightest-blue'
        type='search'
        placeholder='Search Robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;