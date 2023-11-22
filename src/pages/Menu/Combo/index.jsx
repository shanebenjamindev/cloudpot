import combofresh from '/images/cloudpot-menu/combo-fresh.jpg';
import comboenergy from '/images/cloudpot-menu/combo-energy.jpg';
import combowandering from '/images/cloudpot-menu/combo-wandering.jpg';
import comboyouthful from '/images/cloudpot-menu/combo-youthful.jpg';

export default function Combos() {
    return (
        <div id='section__Combo' className='container'>
            <h3 className='section__Title'>Combos (scroll to left)</h3>
            <div className='combo-list'>
                <div >
                    <img className='combo-item' src={comboyouthful} />
                </div>

                <div >
                    <img className='combo-item' src={comboenergy} />
                </div>

                <div >
                    <img className='combo-item' src={combowandering} />
                </div>

                <div className='position-relative'>
                <p className='combothanhtao bg-dark m-2 text-white p-2 position-absolute'> combo <span className='section__Title'>thanh tao</span> không có hải sản</p>
                <img className='combo-item' src={combofresh} />
                </div>
            </div>
        </div>
    )
}
