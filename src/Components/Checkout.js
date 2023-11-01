import {useState} from 'react'
import { getFirestore, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useCartContext } from '../context/cartContext';


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
    };
    
    Promise.all(
        order.items.map(async(productOrder)=>{
            const db= getFirestore();
            const productRef = doc (db, 'products', productOrder.id);
            const productDoc = await getDoc(productRef);
            const stockAct = productDoc.data().stock;
    
            await updateDoc(productRef, {stock: stockAct - productOrder.cantidad})
        })
    ).then(()=>{
        const db = getFirestore();
        addDoc(collection(db, 'orders'), order)
        .then((docRef)=>{
            setOrderId(docRef.id);
            removeProduct();
        })
        .catch((error)=>{
            console.log('Hubo un error en la creacion de la orden', error);
            setError('Error en orden');
        })
    });
    
    setName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setEmailConfirm('');
    
}



return(
    <div>
        <h1>Llena los datos del comprador</h1>
        <form onSubmit={manejarForm}>
            {cart.map((productos)=>(
                <div key={productos.items.id}> 
                    <p>
                        {productos.items.name} x {productos.items.cantidad}
                    </p>
                    <p>
                        ${productos.items.precio}
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

            {error && <p>{error}</p>}

            {orderId && (
                <p>Gracias por comprar en Siammo!. Tu orden es : {orderId}</p>
            )}
            <div>
                <button type='submit'>Finalizar mi compra</button>
            </div>

        </form>
    </div>
)
}