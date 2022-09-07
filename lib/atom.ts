import { atom } from 'jotai';

export const isFilterApplied = atom(false);

export const initialSort = atom<string>('Newest to Oldest');
export const initialVendorFilter = atom<string[]>([]);
export const initialVarietyFilter = atom<string[]>([]);
export const initialCountryFilter = atom<string[]>([]);
export const initialProcessFilter = atom<string[]>([]);
