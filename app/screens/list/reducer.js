
const initialState = {
    list: [],
  };
  export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case "MUSIC_LIST": {
            if(action.payload.data && action.payload.status === 200) {
                let user = action.payload.data.feed.entry              
              return {
                  ...state,
                  list: user
              };
            } else {
              return {
                  ...state,
                  initialState
              };
            }
          }
        default:
          return {
              ... state
          };
      }
    }
   
  
  
  