
const INITIALSTATE={
    data:[]
}
 const reducer = (state=INITIALSTATE,action) => {

    switch(action.type) {
        
        case 'GETALLITEMS' :
            return {
                ...state,
                data:action.payload
            }
    }
}

export default reducer;