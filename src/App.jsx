import Header from '../Dingdong' 
import React, { useState } from 'react';



function App() {
  
  const name = 'Brad'

  return (

<div className='container'>
    <Header />
<p> Hello {name} from React </p>

</div>

    )
  };


export default App;