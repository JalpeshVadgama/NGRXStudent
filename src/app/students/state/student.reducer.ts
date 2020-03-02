const initialState = {
  students: [
    {
      firstname: "Jalpesh",
      lastname: "Vadgama",
      class: "MCA",
      id: 1
    }
  ],
  loading: false,
  loaded: true
};

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_STUDENTS": {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    default: {
      return state;
    }
  }
}
