import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import { ItemsContext } from "./contexts/ItemsContext";

const initialValues = {
    phone: "",
    email: "",
    name: "",
};

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const [order, setOrder] = useState(null);

    const { reset, removeItem, items } = useContext(ItemsContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyer({
            ...buyer,
            [name]: value,
        });
    };

    const generateOrder = () => {
        const orderData = {
            buyer: buyer,
            items: items,
            total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: new Date().toLocaleString(),
        };
        setOrder(orderData);
        console.log("Orden generada:", orderData);
    };

    return (
        <Container>
            <h2>Formulario de Comprador</h2>
            <form>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={buyer.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={buyer.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={buyer.phone}
                        onChange={handleInputChange}
                    />
                </div>
            </form>

            <button onClick={reset}>Vaciar</button>
            {items?.map((i) => {
                return (
                    <div key={i.id}>
                        <h1>{i.title}</h1>
                        <h2>{i.price}</h2>
                        <h3>{i.quantity}</h3>
                        <img src={i.imageId} height={200} alt={i.title} />
                        <span onClick={() => removeItem(i.id)}>X</span>
                    </div>
                );
            })}
            <button onClick={generateOrder}>Generar Orden de Compra</button>
            
            {order && (
                <div>
                    <h2>Orden Generada:</h2>
                    <p>Nombre: {order.buyer.name}</p>
                    <p>Email: {order.buyer.email}</p>
                    <p>Teléfono: {order.buyer.phone}</p>
                    <p>Total: {order.total}</p>
                    <p>Fecha: {order.date}</p>
                    <h3>Artículos:</h3>
                    <ul>
                        {order.items.map((item) => (
                            <li key={item.id}>{item.title} - {item.quantity} x ${item.price}</li>
                        ))}
                    </ul>
                </div>
            )}
        </Container>
    );
};
