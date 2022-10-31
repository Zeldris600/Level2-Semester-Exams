import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [basket, setbasket] = useState([])
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 1,
      url:
        "https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg",
      basket: false,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 2,
      url:
        "https://images.pexels.com/photos/52533/orange-fruit-vitamins-healthy-eating-52533.jpeg",
      basket: false,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 3,
      url:
        "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      basket: false,
      quantity: 1,
    }
  ])
  function addtobasket(item) {
    let basket2 = [...basket]
    basket2.push({ ...item })
    products.map((i) => {
      if (i.id === item.id) {
        i.basket = true
      }
    })
    setbasket(basket2)

  }
  function removetobasket(item) {
    let basket2 = basket.filter((i) => i.id !== item.id)
    products.map((i) => {
      if (i.id === item.id) {
        i.basket = false
      }
    })
    setbasket(basket2)

  }
  function increase(item) {
    let x = basket.map((i) => {

      if (item.id === i.id) {
        console.log('hola')
        i.quantity += 1
      }
      return i
    })
    setbasket(x)

  }
  function decrease(item) {
    let x = basket.map((i) => {

      if (item.id === i.id && i.quantity > 1) {
        console.log('hola')
        i.quantity -= 1
      }
      return i
    })
    setbasket(x)
  }
  function total() {
    let x = 0
    basket.map((i) => {
      x += i.price * i.quantity

    })
    return x
  }
  return (
    <div className='container mt-2'>
      <h1 style={{textAlign: "center", marginBottom:"1rem"}}>Santa Lucia Shopping basket</h1>
      <div className='row justify-content-center'>
        {products.map((item) => (
          <div className='col-3' key={item.id}>
            <div className="card"  >
              <img src={item.url} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">
                  {item.name} - $ {item.price}
                </h6>
                {
                  item.basket === false
                  &&
                  <button className='btn btn-primary' onClick={() => addtobasket(item)}>
                    Add to basket
                </button>
                }
                {
                  item.basket === true
                  &&
                  <button className='btn btn-success' onClick={() => addtobasket(item)}>
                    Added
                </button>
                }
              </div>
            </div>
          </div>

        ))}

      </div>

      <div className='row mt-3'>
        <table className="table  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              basket.map((i, index) => (

                < tr key={i.id}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img src={i.url} style={{ width: '4rem' }} />
                  </th>
                  <td>{i.name}</td>
                  <td>
                    {i.price}
                  </td>
                  <td>
                    <button
                      onClick={() => decrease(i)}
                      className="btn btn-primary btn-sm"
                    >
                      -
                      </button>
                    {i.quantity}
                    <button
                      onClick={() => increase(i)}

                      className="btn btn-primary btn-sm"
                      size="sm"
                    >
                      +
                      </button>
                  </td>

                  <td>
                    <button onClick={() => removetobasket(i)} className="btn btn-danger">
                      Remove
                      </button>
                  </td >
                </tr >
              ))
            }
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col text-center">
          <h4>TOTAL: {total()}</h4>
        </div>
      </div>
    </div >
  );
}

export default App;
