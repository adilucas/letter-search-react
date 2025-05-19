import { useCallback, useEffect, useState } from "react";
import { getCityList, type CityItem } from "../utils/api";
import debounce from "lodash.debounce";

export const useSearch = () => {
  const [letter, setLetter] = useState('');
  const [cities, setCities] = useState<CityItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const list = await getCityList();
        setCities(list);
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
    }, 500), []
  )

  const count = cities && letter ? cities.filter(c => c.name.toLowerCase().startsWith(letter.toLowerCase())).length : 0;

  return {
    letter,
    handleSearch,
    count,
    isLoading,
    error
  }
}
