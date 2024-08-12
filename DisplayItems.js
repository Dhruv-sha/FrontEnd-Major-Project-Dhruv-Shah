import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function DisplayItems() {


    const [items, setItems] = useState([]);
    const navigate=useNavigate();


    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = () => {
        axios.get('http://localhost:5000/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items data', error)
            })

    }

    const handelDelete = (id)=>{

        axios.delete(`http://localhost:5000/items/${id}`)
        .then(response => {
            fetchItems();
        })
        .catch(error => {
            console.error('There was an error Deleting the item data', error)
        })

    }


    return (
        <div className="container mt-4">
            <h2>Our Menu</h2>
            <div className="row">
                {items.map(item => (
                    <div className="col-md-4" key={item.id}>
                        <div className="card mb-4">
                            <img src={item.image} height={300} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">crust: {item.crust}</p>
                                <p className="card-text">Description: {item.description}</p>
                                <p className="card-text">Price: ${item.price}</p>
                                <button class="btn btn-danger me-2" onClick={() =>handelDelete(item.id)}>Delete</button>
                                <button class="btn btn-warning" onClick={()=>navigate(`/update-item/${item.id}`)}>Update</button>
                            </div>
                        </div>
                    </div>


                ))}
            </div>


        </div>
    )
}


export default DisplayItems;