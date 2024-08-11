import './Navbar.scss'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className='Navbar sm: block'>
      <p>Moments with L</p>
      <FaShoppingCart className='cart' />
    </section>
  )
}

export default Navbar
