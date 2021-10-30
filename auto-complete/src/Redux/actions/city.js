import * as types from "../constants"
export const filterCities = (e) => (dispatch, getState) => {

  if (e.target.value.length >= 3) {
    let all_cities = getState().cities.cities
    let filtered_cities = []
    all_cities.map(city => {
      if (city.toLowerCase().replace(/\s+/g, '').includes(e.target.value.toLowerCase().replace(/\s+/g, ''))) {
        //alert("hi")
        filtered_cities.push(city)
      }
    })
   if(filtered_cities.length>0){
    dispatch({ type:types.UPDATE_CITIES,payload: filtered_cities,error:""  })
   }else{
    dispatch({ type:types.UPDATE_CITIES,payload: filtered_cities,error:"No results found" })
   }
  }else{
    dispatch({ type:types.UPDATE_CITIES,payload: [],error:"" })
  }
}

export const resetCity=()=>(dispatch)=>{
  dispatch({ type:types.UPDATE_CITIES,payload: [],error:"" })
}
