import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  console.log('here');
  return (
    <div>
            hello React
    </div>
  );
};
console.log('herefirst');
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

