import type { CityItem } from "./api";

const STORAGE_KEY = 'cities_data';

export const saveToStorage = (data: CityItem[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const getFromStorage = (): CityItem[] | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}
