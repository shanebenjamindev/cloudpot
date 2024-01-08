import './home.css'
import { Navbar } from '../../templates/Home/components/Header';

export default function Home() {
  return (
    <div className="section__Home">
      <div className='bg-home d-md-flex'>
        <div className='col-md-8 m-0 p-0 d-flex justify-content-center'>
          <video height="" muted autoPlay controls playsInline>
            <source type='video/mp4' src='/videos/review.mp4' />
          </video>
        </div>
        <div className='home-Title col-md-4'>
          <div className='text-center'>
            <h1 className='section__Title '>CLOUDPOT</h1>
            <hr className="w-100" style={{ border: "1px solid var(--secondary-color)" }} />
            <h3 className='text-light'>45 Trương Công Định</h3>
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  )
}