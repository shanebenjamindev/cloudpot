import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the default styles

import comboyouthful from '/images/cloudpot-menu/combo-youthful.jpg';
import comboenergy from '/images/cloudpot-menu/combo-energy.jpg';
import combowandering from '/images/cloudpot-menu/combo-wandering.jpg';
import combofresh from '/images/cloudpot-menu/combo-fresh.jpg';

import './combo.css';

const images = [
    {
        original: comboyouthful,
        thumbnail: comboyouthful,
        originalClass: 'slider-image',
    },
    {
        original: comboenergy,
        thumbnail: comboenergy,
        originalClass: 'slider-image',
    },
    {
        original: combowandering,
        thumbnail: combowandering,
        originalClass: 'slider-image',
    },
    {
        original: combofresh,
        thumbnail: combofresh,
        description: 'Combo Thanh Tao (không có hải sản)',
        originalClass: 'slider-image',
    },
];

const Combos = () => {
    return (
        <section id='section__Combo' className='container-fuild mx-5'>
            <h3 className='section__Title'>Combos</h3>
            <div className='combo-list'>
                <Gallery items={images} showBullets showThumbnails thumbnailPosition="bottom"  />
            </div>
        </section>
    );
}

export default Combos;
