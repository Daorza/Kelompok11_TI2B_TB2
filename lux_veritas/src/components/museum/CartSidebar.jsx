import React from "react";

export default function CartSidebar({ cartItems, onClose, onIncrease, onDrecrease, onRemove}) {
    const totalHarga = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div style={{ padding: "1rem", marginTop: "6rem", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "8px", position: "fixed", right: "0", top: "0", width: "360px", height: "80%", overflowY: "auto" }}>
            <button onClick={onClose} style={{ top: "1rem", left: "0.5rem", backgroundColor: "#B22222", color: "#fff", padding: "0.5rem 2rem", border: "none", borderRadius: "4px", cursor: "pointer" }}> Tutup Keranjang</button>
            <h2>Keranjang</h2>

            {cartItems.length === 0 ? (
                <p>Keranjang kosong, silakan menambahkan barang ke keranjang!</p>
            ) : (
                <>
                    <ul style={{ listStyleType: "none", padding: "0" }}>
                        {cartItems.map((item, index) => (
                            <li key={index} style={{ marginTop: '2rem'}}>
                                <strong>{item.name}</strong><br />
                                <div>
                                    Rp{item.price.toLocaleString("id-ID")}<br />
                                    <strong>Jumlah: {item.quantity}</strong><br />
                                </div>

                                <strong>Total: RP{(item.price * item.quantity).toLocaleString("id-ID")}</strong>
                                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem", justifyContent: 'center' }}>
                                    <button onClick={() => onDrecrease(item.id)}>-</button>
                                    <button onClick={() => onIncrease(item.id)}>+</button>
                                    <button onClick={() => onRemove(item.id)}>X</button>
                                </div>

                            </li>
                        ))}
                    </ul>
                    <br />
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