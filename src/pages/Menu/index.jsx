import ALC from './ALC';
import Combos from './Combo';
import Drink from './Drink';
import './menu.css';
import menutime from '../../../public/images/cloudpot-menu/menu_files/image386.png'
import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default function Menu() {
  return (
    <div className='bg-menu'>
      {naviMenu()}
      <div className='menu-container d-md-flex flex-wrap  align-items-center  text-right'>
        <div className='col-md-3 text-center my-2'>
          <img className='cloudpot-logo' src="https://imagedelivery.net/1J0pLjFdKJBzEdIlr1bDRQ/35c89544-caf4-4573-0408-fac18280d400/public" />
        </div>
        <div className='col-md-3'>
          <img src={menutime} />
        </div>

        <div className='col-md-3'>
          <div className="menu-item">
            <span>3 phút</span>
            <span className='text-info'> (2) </span>
            <div className="dropdown-menu">
              <a href="#">Hải sản có vỏ (Sò, Ngao)
              </a>
              <a href="#">Nấm (3 đến 5 phút)
              </a>
            </div>
          </div>
          <div className="menu-item">
            <span>4 phút</span>
            <span className='text-info'> (5) </span>
            <div className="dropdown-menu">
              <a href="#">Hải sản (bạch tuột - Tôm - Mực nứt)</a>
              <a href="#">Hải sản có vỏ (Vẹm - Ốc hương - Sò điệp)</a>
              <a href="#">Cá</a>
              <a href="#">Đồ ăn kèm (Xúc xích - Đậu hũ phô mai)</a>
              <a href="#">Rau củ (Cà rốt baby - Mướp - Bầu - Ngô - Cải bắp)</a>
            </div>
          </div>
          <div className="menu-item">
            <span>5 phút</span>
            <span className='text-info'> (6) </span>
            <div className="dropdown-menu">
              <a href="#">Hải sản (Mực)</a>
              <a href="#">Hải sản có vỏ (Ốc Bullot - Bào Ngư)</a>
              <a href="#">Cá (Cá basa - Cá hồi)</a>
              <a href="#">Thịt (Thịt heo - bê - dê)</a>
              <a href="#">Đồ ăn kèm (Bánh bao - Viên ốc)</a>
              <a href="#">Rau củ (Bắp cải - Bí đỏ - Bí ngòi - Súp lơ - Ngô - Ngó xuân - Khoai lang)</a>
            </div>
          </div>

        </div>

        <div className='col-md-3'>
          <div className="menu-item">
            <span>6 phút</span>
            <span className='text-info'> (4) </span>
            <div className="dropdown-menu">
              <a href="#">Cá (Cá chình)</a>
              <a href="#">Thịt (bò 4-6 phút)</a>
              <a href="#">Đồ ăn kèm (Xôi khúc - Nhân sò điệp - Nhân tôm)</a>
              <a href="#">Há cảo các loại</a>
            </div>
          </div>
          <div className="menu-item">
            <span>7 phút</span>
            <span className='text-info'> (3) </span>
            <div className="dropdown-menu">
              <a href="#">Hải sản (Tôm sú hấp miền)</a>
              <a href="#">Thịt (Gà - Chim câu)</a>
              <a href="#">Đồ ăn kèm</a>
            </div>
          </div>
          <div className="menu-item">
            <span>8 phút</span>
            <span className='text-info'> (1) </span>
            <div className="dropdown-menu">
              <a href="#">Cá điêu hồng</a>
            </div>
          </div>
          <div className="menu-item">
            <span>10 phút</span>
            <span className='text-info'> (1) </span>
            <div className="dropdown-menu">
              <a href="#">Thịt (Gà hmong)</a>
            </div>
          </div>
        </div>
      </div>

      <Combos />
      <ALC />
      <Drink />
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
      <a href='#section__ALC' className='nav-link'>
        <li>
          ALC
        </li>
      </a>
      <a href='#section__Drink' className='nav-link'>
        <li>
          Drink
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