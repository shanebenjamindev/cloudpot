import NavigatorComponent from '../../components/NavigatorComponent/NavigatorComponent'
import StoreSection from './StoreSection/StoreSection'
import './home.css'

export default function Home() {
  return (
    <div className="section__Home">
      <div className='bg-home'> </div>
      <div className='d-md-flex homeLayout w-75 m-auto align-items-center'>
        <div className='text-center col-3'>
          <h1 className='section__Title '>CLOUDPOT</h1>
          <p>Chúc một ngày tốt lành</p>
          <p>Hãy lựa chọn một danh mục</p>
        </div>
        <div className='col-9'>
          <NavigatorComponent />
        </div>
      </div>
      <div className='w-75 m-auto'>
        <StoreSection />
      </div>
    </div>
  )
}
