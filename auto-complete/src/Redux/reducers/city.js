
import * as types from "../constants"
const initialState = {
  cities: [
    'san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan', 'sabadell', 'salamanca', 'salt lake city', 'salinas', 'salem', 'sausalito', 'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 'tiajuna', 'tieling', 'thousand oaks', 'thunder bay', 'tokyo', 'tulsa'
  ],
  filtered_cities: [],
  error:""
};
export default function (state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_CITIES:
      return {
        ...state,
        filtered_cities: action.payload,
        error:action.error
      };
    default:
      return state;
  }
}
