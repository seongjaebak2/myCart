import "./QuantityInput.css";

export default function QuantityInput({
  quantity,
  setQuantity,
  stock,
  cartPage,
  productId,
}) {
  return (
    <>
      <button
        onClick={() =>
          cartPage
            ? setQuantity("decrease", productId)
            : setQuantity((n) => n - 1)
        }
        disabled={quantity <= 1}
        className="quantity_input_button"
      >
        -
      </button>
      <p className="quantity_input_count">{quantity}</p>
      <button
        onClick={() =>
          cartPage
            ? setQuantity("increase", productId)
            : setQuantity((n) => n + 1)
        }
        disabled={quantity >= stock}
        className="quantity_input_button"
      >
        +
      </button>
    </>
  );
}
