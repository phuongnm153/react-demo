const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            let index = state.findIndex(obj => obj.id === action.data.id);
            if (index === -1) {
                return [...state, action.data]
            }
            return state;
        case 'DELETE':
            return state.filter((obj) => obj.id !== action.id);
        case 'EDIT':
            return state.map((obj) => obj.id === action.id ? { ...obj, edit: !obj.edit } : obj);
        case 'UPDATE':
            return state.map((obj) => {
                if (obj.id === action.data.id) {
                    obj.name = action.data.name;
                    obj.price = action.data.price;
                    obj.quantity = !action.data.quantity;
                    return obj;
                }

                return obj;
            });

        default:
            return state
    }
};

export default productReducer;