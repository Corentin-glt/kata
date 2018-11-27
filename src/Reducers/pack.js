/**
 * Created by corentin on 27/11/2018.
 */
import * as C from '../Actions/Pack/types';

const initialState = {
  packs: [],
  loading: false,
  error: null,
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.LOADING_PACK:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case C.CREATE_PACK_SUCCESS:
      return {
        packs: [...state.packs, action.pack],
        loading: false,
        success: true,
        error: null,
      };
    case C.CREATE_PACK_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };
    case C.DELETE_PACK_SUCCESS:
      let newPacks = [...state.packs];
      const indexToDelete = newPacks.findIndex(
        item => item.id === action.pack.id);
      if (indexToDelete > -1) {
        newPacks.splice(indexToDelete, 1);
      }
      return {
        packs: [...newPacks],
        loading: false,
        success: true,
        error: null,
      };
    case C.DELETE_PACK_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };
    case C.UPDATE_PACK_SUCCESS:
      let updatedPacks = [...state.packs];
      const indexToUpdate = updatedPacks.findIndex(
        item => item.id === action.pack.id);
      if (indexToUpdate > -1) {
        updatedPacks[indexToUpdate] = action.pack;
      }
      return {
        packs: [...updatedPacks],
        loading: false,
        success: true,
        error: null,
      };
    case C.UPDATE_PACK_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error,
      };

    default:
      return {
        ...state
      };
  }
}