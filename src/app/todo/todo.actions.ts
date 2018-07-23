import { Action } from "@ngrx/store";

export const AGREGAR_TODO = '[TODO] Agregar Todo'
export const TOGGLE_TODO = '[TODO] Cambiar estado de Todo'
export const EDITAR_TODO = '[TODO] Editar texto Todo'
export const BORRAR_TODO = '[TODO] Borrar Todo'
export const TOGGLE_ALL_TODO = '[TODO] Cambiar estado de Todos los todo'
export const BORRAR_COMPLETED_TODOS = '[TODO] Borrar todos completos'

//clases Actions
export class AgregarTodoAction implements Action {

    readonly type = AGREGAR_TODO;
    constructor (public texto: string) {}
}

export class ToggleTodoAction implements Action {

    readonly type = TOGGLE_TODO;
    constructor (public id: number) {}
}

export class EditarTextoTodoAction implements Action {

    readonly type = EDITAR_TODO;
    constructor (public id: number, public texto: string) {}
}

export class BorrarTodoAction implements Action {

    readonly type = BORRAR_TODO;
    constructor (public id: number) {}
}

export class ToggleAllTodoAction implements Action {

    readonly type = TOGGLE_ALL_TODO;
    constructor (public allTodosState: boolean) {}
}
export class BorrarCompletedTodosAction implements Action {
    readonly type = BORRAR_COMPLETED_TODOS;
}


export type todoActions =   AgregarTodoAction       | 
                            ToggleTodoAction        |
                            EditarTextoTodoAction   |
                            BorrarTodoAction        |
                            ToggleAllTodoAction     |
                            BorrarCompletedTodosAction;

