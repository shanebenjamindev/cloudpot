import './drink.css'
import menuData from '/src/menuData.json';
export default function Drink() {


  const renderDrink = () => {
    return menuData.map((menu) => {
      return menu.drinkList.map((drink,index) => {
        return <div key={index} className='drink-item'><img src={drink.imageUrl} /></div>
      });
    })
  }

  return (
    <section id='section__Drink'>
      <hr className="w-75" style={{ border: "1px solid var(--secondary-color)" }} />
      <div className='drink-list d-md-flex'>
        {
          renderDrink()
        }
      </div>

    </section>
  )
}
