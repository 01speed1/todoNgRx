

import * as fromFilterActions from './filter.actions';

const initialState: fromFilterActions.filtrosValidos = 'Todos';

export function filterReducer(
    state = initialState, 
    action: fromFilterActions.filterActions): fromFilterActions.filtrosValidos {
    switch (action.type) {
        case fromFilterActions.SET_FILTER: 
            return action.filter;
        

        default: return state;
        
    }
}

