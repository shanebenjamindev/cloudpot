import NavigatorComponent from '../../components/NavigatorComponent/NavigatorComponent'
import StoreSection from './StoreSection/StoreSection'
import './home.css'

export default function Home() {
  return (
    <div className="section__Home">
      <div className='bg-home d-flex align-items-center justify-content-center'>
        <div className='d-md-flex container justify-content-space-between'>
          <div className='col-md-5' data-aos="fade-left">
            <img width={"100%"} height={"100%"} src="https://assets-global.website-files.com/5fb85f26f126ce08d792d2d9/64a2386b6eca503f93490094_After_golden_gate.jpg" />
          </div>

          <div className='col-md-7' style={{ position: "relative" }}>
            <iframe style={{ position: "absolute" }} width={"100%"} height={"100%"} src="https://www.youtube.com/embed/BuEV3uJrtKo?autoplay=1" title="[G-GENE] CEO ĐÀO THẾ VINH CHIA SẺ VỀ GIÁ TRỊ CỐT LÕI GOLDEN GATE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>
      </div>
      <div data-aos="fade-down" data-aos-delay={200}>
        <div className='d-md-flex bg-white w-75 m-auto align-items-center homeLayout'  >
          <div className='text-center col-md-3'>
            <h1 className='section__Title '>CLOUDPOT</h1>
            <p>Chúc một ngày tốt lành</p>
            <p>Hãy lựa chọn một danh mục</p>
          </div>
          <div className='col-md-9'>
            <NavigatorComponent />
          </div>
        </div>
        <div className='w-75 m-auto'>
          <StoreSection />
        </div>
      </div>
    </div>
  )
}
