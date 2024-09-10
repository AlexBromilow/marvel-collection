import React, { useContext } from 'react';
import { Button } from './stories/Button';
import { AuthContext, AuthContextType } from './Context/AuthContext';

function App() {

  return (
    <div className="App">
      <Button label='button' />
    </div>
  );
}

export default App;
