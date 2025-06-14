import React from "react";

export default function CartSidebar({ cartItems, onClose, onIncrease, onDrecrease, onRemove}) {
    const totalHarga = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <button onClick={onClose}> X </button>
            <h2>Keranjang</h2>

            {cartItems.length === 0 ? (
                <p>Keranjang kosong, silakan menambahkan barang ke keranjang!</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                <strong>{item.name}</strong><br />
                                Rp{item.price.toLocaleString("id-ID")}<br />
                                <strong>Jumlah: {item.quantity}</strong><br />
                                <strong>Total: RP{(item.price * item.quantity).toLocaleString("id-ID")}</strong>
                                <div>
                                    <button onClick={() => onDrecrease(item.id)}>-</button>
                                    <button onClick={() => onIncrease(item.id)}>+</button>
                                    <button onClick={() => onRemove(item.id)}>X</button>
                                </div>

                            </li>
                        ))}
                    </ul>
                    <hr />
                    <p>
                        <strong>Total:</strong> Rp{totalHarga.toLocaleString("id-ID")}
                    </p>
                    <button onClick={() => alert("Checkout berhasil!")}>
                        Checkout
                    </button>
                </>
            )}
        </div>
    );
}