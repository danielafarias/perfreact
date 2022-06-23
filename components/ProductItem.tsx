import dynamic from "next/dynamic";
import { memo, useState } from "react";
import { AddToWishlistProps } from "./AddToWishlist";
// import { AddToWishlist } from "./AddToWishlist";

const AddToWishlist = dynamic<AddToWishlistProps>(() => {
  return import("./AddToWishlist")
}, {
  loading: () => <span>Carregando</span>
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div key={product.id}>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAdding(true)}>Add</button>
      {isAdding && (
        <AddToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAdding(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
