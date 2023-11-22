import Footer from './components/Footer'
import Header from './components/Header'
import PageContent from './components/PageContent'
export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <div className='my-3 py-5'>
        <PageContent />
      </div>
      <Footer />
    </div>
  )
}
