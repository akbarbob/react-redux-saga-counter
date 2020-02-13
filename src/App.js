import React from "react";
import Header from "./Components/header";
import ErrorHandling from "./ErrorHandling/ErrorHandling";
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <div className="App">
      <ErrorHandling>
      <Provider store={store}>
        <Header />
       </Provider>
      </ErrorHandling>
    </div>
  );
}

export default App;
