// explain below concepts and write an example for each one

// action:an action is an object that have type and paylode type is what is going to do and paylode is somehow data
const CREATEBOOK = "book.create";
const action = {
  type: CREATEBOOK,
  paylod: data,
};

// action creator: is a function that create the action
const createBook = (data) => {
  return {
    type: CREATEBOOK,
    paylod: data,
  };
};

// reducer: a function that determines how the state of an application changes in response to an action sent to the store. its parameteres is initial state that is old state and the ation
//initial state is state before adding or any editing in data
const initialState = {
  books: [],
};
const bookReducer = (oldState = initialState, action) => {
  if ((CREATEBOOK = action.type))
    return { books: [...oldState.books, action.payload] };
};

// store:The Redux store is the main, central bucket which stores all the states of an application
const store = createStore(
    bookReducer,
  );
