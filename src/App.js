import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';


function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://i0.wp.com/batman-news.com/wp-content/uploads/2022/01/The-Batman-2022-Movie-Poster-01.jpeg?fit=2764%2C4096&quality=80&strip=info&ssl=1',
      name: 'Batman',
      seller: 'Mumbai,Phoneix Mall',
      price: 250
    },
    {
      url: 'https://images.thedirect.com/media/photos/posd1_1.jpg',
      name: 'Black Adam',
      seller: 'City Mall',
      price: 180
    },
    {
      url: 'https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg',
      name: 'Uncharted',
      seller: 'Metro Junction Mall',
      price: 350
    },
    {
      url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/94ab2ad3-e0d4-4764-85ad-873af742bd4a/dake2cg-2edf5c6f-b3e7-478b-95d9-6e10d3358a5b.png/v1/fill/w_1024,h_1653,q_80,strp/the_new_avengers_movie_poster_by_arkhamnatic_dake2cg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1MyIsInBhdGgiOiJcL2ZcLzk0YWIyYWQzLWUwZDQtNDc2NC04NWFkLTg3M2FmNzQyYmQ0YVwvZGFrZTJjZy0yZWRmNWM2Zi1iM2U3LTQ3OGItOTVkOS02ZTEwZDMzNThhNWIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.493kJbOQ3yW-zA_LEE8vd7QxFZvhVadpz8nmw8V0Q7U',
      name: 'The New Avengers',
      seller: 'Oberoi Mall',
      price: 300
    },
    {
      url: 'https://lumiere-a.akamaihd.net/v1/images/p_thelastduel_homeentupdate_22197_ab6d9dbb.jpeg',
      name: 'The Last Duel',
      seller: 'Viviana Mall',
      price: 4000
    },
    {
      url: 'http://www.boxofficemovies.in/now/wp-content/uploads/John-Abraham-starrer-Romeo-Akbar-Walter-movie-poster.jpg',
      name: 'Romeo Akbar Walter',
      seller: 'Infinity Mall',
      price: 500
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;