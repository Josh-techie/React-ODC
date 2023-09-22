import React, { useState } from 'react';

function Conditional({ count }) {
  return (

    count % 2 == 0 ? <h1>Count is even</h1> : <h1>Count is odd</h1>

    
  ) 

}
export default Conditional;