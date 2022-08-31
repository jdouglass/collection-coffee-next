import { atom } from 'jotai';

export const isFilterApplied = atom(false);

export const initialSort = atom('Newest to Oldest');
export const initialVendorFilter = atom(['']);
export const initialVarietyFilter = atom(['']);
export const initialCountryFilter = atom(['']);
export const initialProcessFilter = atom(['']);
