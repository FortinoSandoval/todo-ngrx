import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] create', props<{ text: string }>());