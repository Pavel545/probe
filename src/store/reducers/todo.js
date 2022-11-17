import { NEXT_ID } from "../../constants";
import { ADD_PRODUCT, REMOVAL_PRODUCT} from "../actions/types/todo";
const initialState = {
  allIds: [],
  byIds: {},
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVAL_PRODUCT: {

      const {id}  = action.payload;

      const a1 =state.allIds.filter(item => item !==id)
      const a2 =   state.byIds
      delete a2[id]
      NEXT_ID.splice(id,1)
      console.log(NEXT_ID);
      
      return {
        ...state,
        allIds:a1,
        byIds: a2,
      };
    }
    case ADD_PRODUCT: {
      const { id, content } = action.payload;

      return {
        ...state,

        allIds: [...state.allIds, id],

        byIds: {
          ...state.byIds,

          [id]: {
            content,
            complete: false,
          },
        },
      };
    }

    
    
    

    default:
      return state;
  }
}
