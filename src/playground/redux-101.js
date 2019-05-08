import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
})



// Actions
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});

store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 20,
});

// Object desctructuring

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'foo' } = book.publisher;
// foo is default value
const { title, author } = book;

console.log(publisherName);

// Array Desctructuring
const address = ['1299 S Juniper Street', 'Los Angeles', 'California', '19146'];

const [street, city, state = 'New York'] = address;
// new york is default value

console.log(`You are in ${city} ${state}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);


