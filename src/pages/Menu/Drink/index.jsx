import drink from '/images/cloudpot-menu/menu-drink.jpg'
import drink2 from '/images/cloudpot-menu/menu-drink2.jpg'
import './drink.css'

export default function Drink() {
  return (
    <section id='section__Drink' className='container-fluid container'>
    <h1 className='section__Title'>Drinks</h1>
      <div className='drink-list d-md-flex'>
        <div className='col-md-6'>
          <img src={drink2} />
        </div>
        <div className='col-md-6'>
          <img src={drink} />
        </div>
      </div>
    </section>
  )
}
