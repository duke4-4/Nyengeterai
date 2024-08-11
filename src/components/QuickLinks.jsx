import './Navbar.scss'
import QuickLinkImg from '../assets/quicklinks.png'

const QuickLinks = () => {
  return (
    <div className='Quicklinks'>
       <div className="QL-header">
         <h2>Quick Links</h2>
        <h4>Ready to get started?</h4>
       </div>
      <div className="container">
        <div className="col left image-container">
            <img className='QL-img' src={QuickLinkImg} alt="Quick Links" />
        </div>
        <div className="col right">
             <h2>Quick Links</h2>
        <h4>Ready to get started?</h4>
       </div>

        </div>
      </div>
   
  )
}

export default QuickLinks
