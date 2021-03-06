import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

const App = ({data}) => {
  return (
    <div className="App">
      <Header message={'Naming Contests'} />
      <div>
      {data.contests.map(item =>
         
        <ContestPreview key={item.id} contest={item} />
        
      )
      }
      </div>
    </div>
  );
};

export default App;
