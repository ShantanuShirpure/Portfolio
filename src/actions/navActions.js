export function selectActivateTab(val){
	return function(dispatch){
		console.log("Inside navActions call action  "+ val);
			return dispatch({type:"ACTIVATE_TAB",payload:val})
		}
	}
