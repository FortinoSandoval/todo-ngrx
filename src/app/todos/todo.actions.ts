import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] create', props<{ text: string }>());

export const toggle = createAction('[TODO] toggle', props<{ id: number }>());

export const edit = createAction('[TODO] edit', props<{ text: string, id: number }>());

export const deleteTodo = createAction('[TODO] delete', props<{ id: number }>());

export const toggleAll = createAction('[TODO] toddlgeAll', props<{ completed: boolean }>());