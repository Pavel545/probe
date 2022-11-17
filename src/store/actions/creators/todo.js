import { NEXT_ID } from "../../../constants";
import { ADD_PRODUCT, REMOVAL_PRODUCT, COMPARISON_PRODUCT} from "../types/todo";
let nextTodoId = 0;

function GOTO() {
  NEXT_ID[NEXT_ID.length]=nextTodoId
  console.log(NEXT_ID);
  return ++nextTodoId
}
export const addProduct = (content) => ({
  type: ADD_PRODUCT,
  payload: {
    id: GOTO(),
    content,
  },
});

export const toggleProduct = (id) => ({
  type: COMPARISON_PRODUCT,
  payload: { id },
});

export const removalProduct =(id)=>({
    type:REMOVAL_PRODUCT,
    payload:{id:id},
})