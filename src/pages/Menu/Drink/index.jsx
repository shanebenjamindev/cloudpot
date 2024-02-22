import './drink.css'
import menuData from '/src/menuData.json';
import quayline from '/images/quayline.jpg'

export default function Drink() {


  const renderDrink = () => {
    return menuData.drinkList.map((drink, index) => {
      return <div key={index} className='drink-item'><img src={drink.imageUrl} /></div>
    })
  }

  return (
    <section id='section__Drink' className='w-75 mx-auto my-3'>
      <h3 className='section__Title'>Quầy Line</h3>
      <hr className="w-75" style={{ border: "1px solid var(--secondary-color)" }} />
      <div className='drink-list d-md-flex'>
        {
          renderDrink()
        }
      </div>
      <h3 className='my-4 section__Title'>Quầy Line</h3>
      <img src={quayline} width={"100%"} />
    </section>
  )
}
