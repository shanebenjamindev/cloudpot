import Footer from './components/Footer'
import Header from './components/Header'
import PageContent from './components/PageContent'
export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <div className='h-100vh'>
        <PageContent />
      </div>
      <Footer />
    </div>
  )
}
