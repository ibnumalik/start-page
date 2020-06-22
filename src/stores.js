import { writable } from 'svelte/store';
import { Storage } from './storage';

const savedObjectives = Storage.get('objectives');
export const objectives = writable(savedObjectives);
