const store = createStore(rootReducer);
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l !== listener);
    }
  }

  dispatch({ type: '@@redux/INIT'});

  return { getState, dispatch, subscribe };
}

const combineReducers = (reducers) => {
  return { state={}, action } => {
    return Object.keys(reducers).reduce((nextState, key) {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  }
}

const actionCreator = () => ({
    type: "",
    payload
})

const reducer = (prevState={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case "":
      return newState;
    case "":
      return newState;
    default:
      return state;
  }
}

class ContainerComponent extends React.Component {
  componentDidMount() {
    const { store } = this.props.store;
    this.unsubscribe = store.subscribe(this.forceUpdate);
  }

  componentWillUnmont() {
    this.unsubscribe();
  }

  render() {
    return ();
  }
}

ReactDOM.render(
  <App store={store} />,
  document.querySelector('#root')
);

class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextType = {
  store: React.PropsType.object
}
