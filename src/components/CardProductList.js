import CardProduct from "./CardProduct"
import { Products } from '../data/Product'

const CardProductList = () => {

  return (
    <div>
      <div className="cards">
      {Products.map((product) => {
        return (
          <CardProduct
            key={product.id}
            nama={product.nama}
            deskripsi={product.deskripsi}
            imgURL={product.imageURL}
          />
        );
      })}

    </div>
    </div>
  )
}

export default CardProductList
