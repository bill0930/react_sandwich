import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent';
// allow me to configure React Application 
// So react store become avaliable to all components in my components
import './App.css';

const store = ConfigureStore(); 

class App extends Component {

  render() {
    return ( //return routerzz
      <Provider store={store}>
        <BrowserRouter basename = "/v1"> 
        <div >
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;