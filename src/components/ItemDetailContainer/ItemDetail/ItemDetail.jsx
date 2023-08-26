import "./ItemDetail.css"
import ItemCount from "../../ItemCount/ItemCount"


const ItemDetail = ({ product, isloading }) => {
    
    if (isloading) {
        return <h2 className="text-center">Cargando detalle...</h2>
    }

    if (!product) {
        return <p>Producto no encontrado</p>
    }
    
    return (
        <div>

            <div key={product.id} className="backgroundDetail text-white p-5">
                <div className="container d-flex justify-content-center mt-5">
                    <div className="me-2 col-7 text-center">
                        <img src={`../src/assets/gorras/${product.img}`} className="imgStyle" alt="gorra" />
                    </div>
                    <div className="ms-2 col-5">
                        <h2>{product.name}</h2>
                        <h4>€ {product.price}</h4>
                        <p>O 3 cuotas fijas sin interes de €{product.price / 3}</p>
                        <p>Stock: {product.stock}</p>
                        <div className="my-4">
                            <ItemCount />
                            <button className="btn btn-success me-2">Añadir al Carrito</button>
                            <button type="submit" className="btn btn-primary ms-2">Comprar Ahora</button>
                        </div>
                        <div className="my-5">
                            <h5>Descripcion:</h5>
                            <p>{product.detailDescription[0]}</p>
                            <p>{product.detailDescription[1]}</p>
                            <p>{product.detailDescription[2]}</p>
                            <p>{product.detailDescription[3]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;