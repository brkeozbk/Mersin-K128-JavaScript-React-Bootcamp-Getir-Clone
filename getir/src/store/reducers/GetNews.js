import { GET_NEWS } from "../constants/GetNews";

const initialState = {
  news: [],
  fetching: false,
  fetched: false,
  error: null,
};
export default function news(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS.GET_NEWS_PENDING:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: null,
      };
    case GET_NEWS.GET_NEWS_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        news: {...action.payload.data},
      };
    case GET_NEWS.GET_NEWS_REJECTED:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
