import React from 'react';

const Actor = ({name, as}) => (
    <>
      <p><strong>{name}</strong><br/>
      <em>{as}</em></p>
    </>
);

export default Actor;