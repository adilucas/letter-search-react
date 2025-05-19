import { useCallback, useEffect, useMemo, useState } from "react";
import { getCityList, type CityItem } from "../utils/api";
import debounce from "lodash.debounce";
import { getFromStorage, saveToStorage } from "../utils/storage";

export const useSearch = () => {
  const [letter, setLetter] = useState('');
  const [cities, setCities] = useState<CityItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const cached = getFromStorage();

      if (cached) {
        setCities(cached);
        return;
      }

      setIsLoading(true);
      try {
        const list = await getCityList();
        setCities(list);
        saveToStorage(list);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown Error');
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const handleSearch = useCallback(
    debounce((value: string) => {
      if (/^[a-zA-Z]?$/.test(value)) {
        setLetter(value);
      }
    }, 300), []
  )

  const count = useMemo(() => {
    if (!letter || !cities) return 0;

    return cities.filter(city => city.name.toLowerCase().startsWith(letter.toLowerCase())).length;
  }, [letter, cities]);

  useEffect(() => {
    return () => {
      handleSearch.cancel();
    }
  }, [handleSearch])

  return {
    letter,
    handleSearch,
    count,
    isLoading,
    error
  }
}
