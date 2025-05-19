interface ResultCountProps {
  letter: string;
  count: number;
  isLoading: boolean;
  error: string | null;
}

export const ResultCount = ({ letter, count, isLoading, error }: ResultCountProps) => {
  return (
    <div className="mt-6 text-center">
      {isLoading && <p className="text-gray-500 animate-pulse">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && letter && (
        <p className="text-lg text-gray-700">
          Number of cities starting with<span className="font-bold text-blue-600">"{letter}"</span>: <span className="font-bold">{count}</span>
        </p>
      )}
      {!letter && !isLoading && !error && (
        <p className="text-gray-500">Enter the letter to see how many city names start with it.</p>
      )}
    </div>
  );
}
