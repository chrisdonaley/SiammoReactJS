import {useState} from 'react'
import { getFirestore, addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { useCartContext } from '../context/cartContext';
import { Button } from 'bootstrap';

export const Checkout = () =>{
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState('');
    const [orderId, setOrderId] = useState('');
    const [message, setMessage] = useState('');



const {cart, removeProduct, totalPrice} = useCartContext();
const total = totalPrice();

const manejarForm = (event) =>{
    event.preventDefault();
    if(!name  || !lastname  ||  !phone  || !email  || !emailConfirm){
        setError('Es obligatorio completar los campos solicitados');
        return;
    } else if (email !== emailConfirm){
        setError('Los correos no coinciden, por favor revisarlos')
        return;
    }
}
const order = {
    items: cart.map((product)=>({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
    })),
    total: total,
    fecha: new Date(),
    name,
    lastname,
    phone,
    email,
}


return(
    <div>
        <h1>Llena los datos del comprador</h1>
        <form onSubmit={manejarForm}>
            {cart.map((productos)=>(
                <div key={productos.item.id}> 
                    <p>
                        {productos.item.name} x {productos.item.cantidad}
                    </p>
                    <p>
                        ${productos.item.precio}
                    </p>
                </div>
            ))}
            <div>
                <label className='lab-check'>Nombre:</label>
                <input className='input-check'
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label className='lab-check'>Apellido:</label>
                <input className='input-check'
                type='text'
                value={lastname}
                onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div>
                <label className='lab-check'>Teléfono:</label>
                <input className='input-check'
                type='number'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div>
                <label className='lab-check'>E-mail:</label>
                <input className='input-check'
                type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label className='lab-check'>Confirmar E-mail:</label>
                <input className='input-check'
                type='text'
                value={emailConfirm}
                onChange={(e)=>setEmailConfirm(e.target.value)}/>
            </div>
            <div>
                <button type='submit'>Finalizar mi compra</button>
            </div>

        </form>
    </div>
)
}