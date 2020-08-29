export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  // "BQBp0wkOy3rreIfxKLxQAJ2s2iXTfruClQ55nh5MxyFFlCPkU5hDt28FMIl-XLGd-91Vd23SCDP6MKe0qVqIQIQulToQAtwhSY8Lr7O0rIuSXCyef9bMURfzTNv0H3ZzPbTla4_FehxWj77gY9rpjwBYrbok5xcM6uxZRFfRIodbHFzl",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
