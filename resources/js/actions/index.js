import * as types from './ActionTypes'

export const addProduct = payload => ({ type: types.ADD_PRODUCT, payload });
export const deleteProduct = payload => ({ type: types.DELETE_PRODUCT, payload });
export const editProduct = payload => ({ type: types.EDIT_PRODUCT, payload});
export const updateProduct = payload => ({ type: types.UPDATE_PRODUCT, payload});
export const listingProduct = payload => ({ type: types.LISTING_PRODUCT, payload});
