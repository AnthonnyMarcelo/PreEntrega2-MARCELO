import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import { ItemsContext } from "./contexts/ItemsContext";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const { addItem } = useContext(ItemsContext);

    const onAdd = (count) => {
        addItem({ ...item, quantity: count });
     };
    useEffect(() => {
        const db = getFirestore();
    
        const refDoc = doc(db, "items", id);
    
        getDoc(refDoc)
            .then((snapshot) => {
                setItem({ id: snapshot.id, ...snapshot.data() });
            })
            .finally(() => setLoading(false));
    }, [id]);
    if (loading) return <Container className="mt-4">espere porfavor. . .</Container>;
    return(
    <Container className='mt-4'>
    <h1>{item.tittle}
    </h1>
    <h2>{item.name}</h2>
    <img src={item.imageId} height={250} />
    <br/>
    <h4>{item.categoryId}</h4>
    <b>{item.detail}</b>
    <ItemCount stock={item.stock} onAdd={onAdd}/>
    </Container>
    );  
};  