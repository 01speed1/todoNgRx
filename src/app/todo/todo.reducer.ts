import * as fromTodoActions from './todo.actions'
import { Todo } from './model/todo.model';

const todo1 = new Todo('Estudiar NgRx')
const todo2 = new Todo('Ver pelicula')

const estadoInicial: Todo[] = [todo1, todo2];


export function todoReducer ( 
    state = estadoInicial, 
    action: fromTodoActions.todoActions ): Todo[]  {
    
    switch ( action.type ) {
        case fromTodoActions.AGREGAR_TODO:
            
            const todo = new Todo( action.texto );
            return [...state, todo ]            

        case fromTodoActions.TOGGLE_TODO:
            return state.map(( todoEedit )=> {
                if (todoEedit.id===action.id){
                    return {
                        ...todoEedit,
                        completado:!todoEedit.completado
                    }
                }else return todoEedit ;
            });

        case fromTodoActions.EDITAR_TODO:
            return state.map( todo => {
                if ( todo.id === action.id ) {
                    return {
                        ...todo,
                        texto: action.texto
                    }                    
                } else return todo;
            } )
        
        case fromTodoActions.BORRAR_TODO:
            return state.filter(todo => {
                if ( todo.id !== action.id ){
                    return todo;
                }
            })
        
        case fromTodoActions.TOGGLE_ALL_TODO:
            return state.map(todo => {
                return { ...todo, completado: action.allTodosState }
            })

        case fromTodoActions.BORRAR_COMPLETED_TODOS:
            return state.filter( todo => !todo.completado)
            

        default: return state;

    }

} 