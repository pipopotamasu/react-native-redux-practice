import { AppRegistry } from 'react-native';
import App from './src/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux/native';
import Counter from './reducers/counter.js';

let store = createStore(Counter)

let ReduxApp = React.createClass({
  render: function() {
    return(
      <Provider store={store}>
       {() => <App />}
      </Provider>
    );
  }
});

AppRegistry.registerComponent('react_native_redux_practice', () => ReduxApp);
