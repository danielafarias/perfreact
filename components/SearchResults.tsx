import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((result) => {
        return (
            <ProductItem product={result} key={result.id}/>
        );
      })}
    </div>
  );
}
