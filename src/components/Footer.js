import React, {useState} from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../../static/img/pngEmail.png'
import twitter from '../../static/img/phone.png'
import logo from '../../static/img/daveWhite.png'

const Footer = ( ) => {
  const [ phoneClass, setPhoneClass ] = useState('click')

  const handleClick = () => {
    setPhoneClass('clicked')
    setTimeout(() => {
      setPhoneClass('click')
    }, 3000)
  }

  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img src={logo} className='logoDDBottom'/>
      </div>
      <div className='horizontalDivisionThree'></div>
      <div className='centerAddress'>
        <p className='address'>DaveDesigns@gmail.com<br /><span className={phoneClass}>+1-206-111-1234</span></p><br />
        <p className='address'> 15234 ballpark ln.<br /> 184th Street<br /> Auburn, New Hampshire</p>
      </div>
      <div className='horizontalDivisionFour'></div>
        <div className="social" id='bottomOfFooter'>
          <div>
            <a title="facebook" href="https://www.facebook.com/DaveDesignsWoodWorking/" target="_blank">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </div>
          <div>
            <div className='aFake'>
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: '1em', height: '1em' }}
                onClick={handleClick}
              />
            </div>
          </div>
          <div>
            <Link to='/contact' id='bottomLink'>
              <img
                src={instagram}
                alt="Mail"
                style={{
                  width: '1em',
                  height: '1em'
                }}
              />
            </Link>
          </div>
        </div>
    </footer>
  )
}


export default Footer
