import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import cover1 from '../../../public/images/cloudpot-menu-HCM/cover/cover1.jpg'
import cover3 from '../../../public/images/cloudpot-menu-HCM/cover/cover3.jpg'
import covertime from '../../../public/images/cloudpot-menu-HCM/cover/cover-time.jpg'
import './style.css'
import { Link } from 'react-router-dom';

export default function NavigatorComponent() {
  return (
    <div className="d-md-flex card-list container p-3">
      <div className="col-md-4 custom-card">
        <Link to='/services-page'>
          <div className='custom-overlay'></div>
          <Image src={cover3} fluid />
          <Card.Body className='custom-body'>
            <p>SERVICES</p>
          </Card.Body>
        </Link>
      </div>

      <div className="col-md-4 custom-card">
        <Link to='/memos-page'>
        <img src={covertime} />
        <div className='custom-overlay'></div>
          <Card.Body className='custom-body'>
            <p>MEMO</p>
          </Card.Body>
        </Link>
      </div>

      <div className="col-md-4 custom-card">
        <Link to="/menu-page">
          <div className='custom-overlay'></div>
          <Image src={cover1} fluid />
          <Card.Body className='custom-body'>
            <p>MENU</p>
          </Card.Body>
        </Link>
      </div>
    </div >
  );
}
