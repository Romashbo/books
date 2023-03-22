import Cart from "./Component/cart/Cart";
import Header from "./Component/Header/Header";
import axios from "axios"
import { useEffect, useState } from "react";
import MyInput from "./Component/UI/Input/MyInput";
import { useFetching } from "./Component/MyHooks/useFetching";
import PostService from "./API/PostService";
import Loader from "./Component/UI/Loader/Loader";


function App() {

  const urlGoogle = "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCx2BcUwuuF2FP2F458G11d_HCiLhGqR00&maxResults=10"

  const [book, setBook] = useState([])
  const [search, setSearch] = useState('')

  // const searchBook = (evt) => {
  //   if (evt.key === "Enter") {
  //     axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyCx2BcUwuuF2FP2F458G11d_HCiLhGqR00')
  //       .then(res => setBook(res.data.items))
  //       .catch(err => console.log(err))
        
  //   }
  // }

const [fetchBook, isLoading, error] = useFetching (async (evt) => {
if (evt.key === "Enter") {
  const response = await PostService.getAll(search)
  setBook(response.data.items)
  console.log(response.data);
  console.log(book)
}
})



  return (
    <div className="App">
      <header className='header'>
        <h1 className='header_title'>Google Books</h1>
        <div className="header_search">
          <MyInput type="text"
        value={search} onChange={e => setSearch(e.target.value)}
       onKeyPress={fetchBook} placeholder="Поиск..."  />
        </div>
      </header>
      {error && <h1 style={{textAlign:"center"}}>Произошла ошибка ${error}</h1>}
      {isLoading
        ? <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <Loader />
        </div> 
        :
        <div>
          {/* <h3 style={{textAlign:"center"}}>{book.length}</h3> */}
          <Cart book={book} />
       </div>}
      
    </div>
  );
}

export default App;
