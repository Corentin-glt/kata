/**
 * Created by corentin on 27/11/2018.
 */
import * as C from './types';

export const loadingPack = () => {
  return {
    type: C.LOADING_PACK
  }
};

export const createPackSuccess = (pack) => {
  return {
    type: C.CREATE_PACK_SUCCESS,
    pack
  }
};

export const createPackError = (error) => {
  return {
    type: C.CREATE_PACK_ERROR,
    error
  }
};
export const deletePackSuccess = (pack) => {
  return {
    type: C.DELETE_PACK_SUCCESS,
    pack
  }
};

export const deletePackError = (error) => {
  return {
    type: C.DELETE_PACK_ERROR,
    error
  }
};

export const updatePackSuccess = (pack) => {
  return {
    type: C.UPDATE_PACK_SUCCESS,
    pack
  }
};

export const updatePackError = (error) => {
  return {
    type: C.UPDATE_PACK_ERROR,
    error
  }
};

export const createPack = (pack) => {
  return (dispatch) => {
    dispatch(loadingPack());
    console.log(pack);
    if (!pack.title || typeof pack.title !== 'string' ||
      pack.title.length === 0 || !pack.price ||
      typeof pack.price !== 'number' || !pack.user_id ||
      typeof pack.user_id !== "string") {
      dispatch(createPackError('Variable is missing'))
    } else {
      pack.id = guidGenerator();
      dispatch(createPackSuccess(pack))
    }
  }
};

export const updatePack = (pack) => {
  return (dispatch) => {
    dispatch(loadingPack());
    if (!pack.title || typeof pack.title !== 'string' ||
      pack.title.length === 0 || !pack.price ||
      typeof pack.price !== 'number' || !pack.id ||
      typeof pack.id !== 'string') {
      dispatch(updatePackError('Variable is missing'))
    } else {
      dispatch(updatePackSuccess(pack))
    }
  }
};

export const deletePack = (pack) => {
  return (dispatch) => {
    dispatch(loadingPack());
    if (!pack.id || typeof pack.id !== 'string') {
      dispatch(deletePackError('ID is missing'))
    } else {
      dispatch(deletePackSuccess(pack))
    }
  }
};

const guidGenerator = () => {
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
};

