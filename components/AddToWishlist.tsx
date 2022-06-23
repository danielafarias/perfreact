export interface AddToWishlistProps {
    onAddToWishlist: () => void;
    onRequestClose: () => void;
}

export default function AddToWishlist({ onAddToWishlist, onRequestClose }: AddToWishlistProps) {
    return (
        <span>Deseja adicionar aos favoritos?
            <button onClick={onAddToWishlist}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    )
}