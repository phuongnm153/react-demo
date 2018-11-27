import * as types from '../actions/actionTypes'

const productReducer = (state = [], { type, payload }) => {

    switch (type) {

    case types.ADD_PRODUCT:
    {

        return [
            ...state,
            payload
        ];

    }
    case types.DELETE_PRODUCT:
        return state.filter((obj) => obj.id !== payload);
    case types.EDIT_PRODUCT:
        return state.map((obj) => obj.id === payload ? { ...obj,
            'edit': true } : obj);
    case types.CANCEL_PRODUCT:
        return state.map((obj) => obj.id === payload ? { ...obj,
            'edit': false } : obj);
    case types.UPDATE_PRODUCT:
        return state.map((obj) => {

            if (obj.id === payload.id) {

                obj.name = payload.name;
                obj.price = payload.price;
                obj.quantity = payload.quantity;
                obj.edit = false;
                return obj;

            }
            return obj;

        });
    case types.LISTING_PRODUCT:
        return payload;

    default:
        return state

    }

};

export default productReducer;
