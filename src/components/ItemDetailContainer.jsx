import { useEffect, useState } from "react";
import { useParams } from "react";

import Container from "react-bootstrap/Container";
import data from '../data/catalogo.json';
import Button from 'react-bootstrap/Button';

export const ItemDetailContainer = () => {
const [item, setItem] = useState ();
const [loading, setLoading] = useState (true);
const { id } = useParams();

useEffect(() => {
        new Promise((resolve, reject) =>{
            setTimeout(() => resolve(data), 2000);
        }).then((response) => {
                const finded = response.find((i) => i.id === Number(id));
                setItem (finded);
            })
        .finally(() => setLoading(false));
    }, [id]);
    if (loading) return <Container className="mt-4">espere porfavor. . .</Container>;
    return(
    <Container className='mt-4'>
    <h1>Catalogo</h1>
    <h2>{item.name}</h2>
    <img src={item.img} />
    <h4>{item.category}</h4>
    <p>{item.detail}</p>
    </Container>
    );  
};  