import Header from './components/Header'
import PageContent from './components/PageContent'
export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <div className='mt-5 pt-5'>
        <PageContent />
      </div>
    </div>
  )
}
