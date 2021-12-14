const INITIALSTATE = {
    data: [],
    filteredList: []
}
const reducer = (state = INITIALSTATE, action) => {
    switch (action.type) {

        case 'GETALLITEMS':
            return {
                ...state,
                data: action.payload.data
            }
        case 'FILTER_ITEM':
            return {
                ...state,
                filteredList: state.data.filter(item => item.category === action.payload)

            }
        default:
            return state;
    }
}

export default reducer;