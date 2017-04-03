export default function profileReducer(state={
    activeLeftTab:'Frontend'
},action){
	switch(action.type){		
		case "ACTIVATE_TAB":{
            return {
                ...state,
                activeLeftTab:action.payload
            }
        }
        break;
	}
	return state;
}