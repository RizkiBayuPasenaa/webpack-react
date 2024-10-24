import { useState } from "react";

export default function CardProduct(props) {
  const [jumlahProduct, setJumlahProduct] = useState(0);

  const tambahProduct = () => {
    setJumlahProduct(jumlahProduct + 1);
  };

  const kurangProduct = () => {
    if (jumlahProduct > 0) {
      setJumlahProduct(jumlahProduct - 1);
    }
  };

  return (
    <div className="card">
      <img
        style={{
          height: "200px",
          width: "100%",
          borderRadius: "10px 10px 0 0",
        }}
        src={props.imgURL}
        alt="Avatar"
      />
      <div className="container">
        <h4>{props.nama}</h4>
        <p>{props.deskripsi}</p>
      </div>

      <div className="card-keranjang jumlah-product">
        {jumlahProduct === 0 ? (
          <div onClick={tambahProduct} className="button">
            + Keranjang
          </div>
        ) : (

          <>
            <button className="button" onClick={kurangProduct}>-</button>
            <div>{jumlahProduct}</div>
            <button className="button" onClick={tambahProduct}>+</button>
          </>
        )}
      </div>
    </div>
  );
}
