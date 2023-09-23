import { views } from '$lib/views';

export const match = (param) => param in views;
