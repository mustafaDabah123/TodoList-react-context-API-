export default (state,action) => {
    switch(action.type){
        case "ADD_ITEM":
            return {
                ...state,
                items:[action.payload , ...state.items]
            };
        case "DELETE_ITEM":
            return {
                ...state,
                items:state.items.filter(item => item.id !== action.payload)
            };    

        default:
            return state ;     
    }

}