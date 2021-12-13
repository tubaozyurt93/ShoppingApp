
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
            console.log('Payload', action.payload)
            return {
                ...state,
                filteredList: state.data.map(item => item.category === action.payload ? [...state.filteredList, item] : item)

            }
        default:
            return state;
    }
}

export default reducer;