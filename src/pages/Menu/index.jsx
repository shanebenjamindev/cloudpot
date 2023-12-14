import ALC from './ALC';
import Drink from './Drink';
import Combo from './Combo';
import './menu.css';
import menutime from '../../../public/images/cloudpot-menu/menu_files/image386.png'
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default function Menu() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    menutime
  ]
  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };
  return (
    <div className='bg-menu'>
      {naviMenu()}
      <div className='menu-container d-md-flex flex-wrap align-items-center container'>
        <div className='col-md-6 text-center my-2'>
          <img className='cloudpot-logo' src="https://imagedelivery.net/1J0pLjFdKJBzEdIlr1bDRQ/35c89544-caf4-4573-0408-fac18280d400/public" />
        </div>
        {images.map((image, index) => (
          <div key={index} className='col-md-6'>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              onClick={() => openModal(image)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}

        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal">
              <img src={selectedImage} alt="Modal Image" />
            </div>
          </div>
        )}
      </div>
      <Combo />
      <Drink />
      <ALC />
      {BackToTopButton()}
    </div>
  )
}

function naviMenu() {
  return (
    <ol className='naviMenu'>
      <a href='#section__Combo' className='nav-link'>
        <li>
          Combo
        </li>
      </a>

      <a href='#section__Drink' className='nav-link'>
        <li>
          Drink
        </li>
      </a>

      <a href='#section__ALC' className='nav-link'>
        <li>
          ALC
        </li>
      </a>
    </ol>
  )
}


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Adjust the scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div
      className={`back-to-top ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      ↑ Back to Top
    </div>
  );
};