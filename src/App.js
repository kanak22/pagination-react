import './App.css';
import { Navbar} from 'react-bootstrap';
import Image from "./components/image";
import ImageURLs from './data';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(1);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = ImageURLs.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = pageNumber => {
    if(pageNumber > 0 && pageNumber <= ImageURLs.length){
      setCurrentPage(pageNumber);
    }
  }

  return (
    <div className="App">
      <div>
            <Navbar  bg="light" expand="lg">
                <Navbar.Brand className='m-1' href="#home">ModGenics</Navbar.Brand>
                <button className='nav-btn' onClick={() => paginate(currentPage + 1)}>ImageOne</button>
                <button className='nav-btn' onClick={() => paginate(currentPage + 1)}>ImageTwo</button>
                <button className='nav-btn' onClick={() => paginate(currentPage + 1)}>ImageThree</button>
                <button className='nav-btn' onClick={() => paginate(currentPage - 1 )}>ImageFour</button>
            </Navbar>
        </div>
        <Image image={currentImages[0]}/>

      <div className="pagination">
        <button className='btn' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        <button className='btn' onClick={() => paginate(currentPage + 1)} disabled={currentPage === ImageURLs.length}>1</button>
        <button className='btn' onClick={() => paginate(currentPage + 1)} disabled={currentPage === ImageURLs.length}>2</button>
        <button className='btn' onClick={() => paginate(currentPage + 1)} disabled={currentPage === ImageURLs.length}>3</button>
        <button className='btn' onClick={() => paginate(currentPage + 1)} disabled={currentPage === ImageURLs.length}>4</button>
        <button className='btn' onClick={() => paginate(currentPage + 1)} disabled={currentPage === ImageURLs.length}>Next</button>
        </div>
    </div>
  );
}

export default App;
