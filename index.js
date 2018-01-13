import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './src/reducers/index.js';

let store = createStore(Counter)

// let ReduxApp = React.createClass({
//   render: function() {
//     return(
//       <Provider store={store}>
//        {() => <App />}
//       </Provider>
//     );
//   }
// });

class ReduxApp extends Component<{}> {
    render() {
      return(
        <Provider store={store}>
          <App/>
        </Provider>
      );
    }
}

AppRegistry.registerComponent('react_native_redux_practice', () => ReduxApp);
