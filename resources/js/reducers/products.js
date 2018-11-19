import * as types from '../actions/ActionTypes'

const initProducts = {
    products : []
};

const productReducer = (state = initProducts,  { type, payload }) => {
    switch (type) {
        case types.ADD_PRODUCT:
            return [...state, payload];
        case types.DELETE_PRODUCT:
            return {...state, products: state.products.filter((obj) => obj.id !== payload)};
        case types.EDIT_PRODUCT:
            return state.products.map((obj) => obj.id === payload ? { ...obj, edit: !obj.edit } : obj);
        case types.UPDATE_PRODUCT:
            return state.products.map((obj) => {
                if (obj.id === payload.id) {
                    obj.name = payload.name;
                    obj.price = payload.price;
                    obj.quantity = !payload.quantity;
                    return obj;
                }
                return obj;
            });
        case types.LISTING_PRODUCT:
        {
            return Object.assign({}, payload);
        }

        default:
            return state
    }
};

export default productReducer;