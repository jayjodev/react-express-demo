const initialState = {
  input: "",
  error: "",
  people: [],
  group: "",
};

// Reducers
export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PEOPLE":
      return {
        ...state,
        people: action.payload.people,
      };
    case "INPUT_PEOPLE":
      return {
        ...state,
        input: action.payload.input,
      };
    case "ADD_PEOPLE":
      return {
        ...state,
        people: state.people.concat([action.payload.input]),
      };
      case "GROUP_PEOPLE":
        return {
          ...state,
          group: action.payload.group,
        };

    case "DELETE_PEOPLE":
      return {
        ...state,
        people: state.people.filter((a) =>
          a !== action.payload.input ? a : null
        ),
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

