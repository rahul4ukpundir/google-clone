export const initialState ={
    googleData:null
}


const reducer = (state, action) => {
    switch(action.type){
        case "SET_GOOGLE_DATA":
          return{
            ...state,
            googleData: action.googleData
          }
        default: return state;
    }

}

export default reducer;