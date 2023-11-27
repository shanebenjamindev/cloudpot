import drink from '/images/cloudpot-menu/menu-drink.jpg'
import drink2 from '/images/cloudpot-menu/menu-drink2.jpg'
import drink3 from '/images/cloudpot-menu/drink_dessert.jpg'
import './drink.css'

export default function Drink() {

  return (
    <section id='section__Drink' className='w-75 m-auto'>
      <h1 className='section__Title'>Drinks</h1>
      <hr className="w-75" style={{ border: "1px solid var(--secondary-color)" }} />
      <div className='drink-list d-md-flex'>
        <div className='drink-item' data-aos="fade-up"
          data-aos-duration="1500">
          <img src={drink3} />
        </div>
        <div className='drink-item' data-aos="fade-right" data-aos-delay={1000} data-aos-duration="1000">
          <img src={drink} />
        </div>
        <div className='drink-item' data-aos="fade-right" data-aos-delay={1500} data-aos-duration="500">
          <img src={drink2} />
        </div>
      </div>

    </section>
  )
}
