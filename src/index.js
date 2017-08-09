import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware, combineReducers, compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import thunk from 'redux-thunk'
import BaseLayout from './components/Layout'

const userReducer = (state={}, action) => {
  if (action.type === 'AUTH'){
    return {
      username: action.username,
      token: action.token
    }
  }
  return state
}

  const reducer = combineReducers({
    user: userReducer
  })


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)


ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
