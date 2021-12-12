export const GETALLITEMS = (items) =>{
return {
    type:'GETALLITEMS',
    payload:items
}
}
export const filteredList = (items) =>{
    return {
        type:'FILTER_ITEM',
        payload:items
    }
    }