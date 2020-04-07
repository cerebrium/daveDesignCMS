import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import logo from '../../static/img/daveWhite.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img src={logo} className='logoDDBottom'/>
        </div>
        <div className='horizontalDivisionThree'></div>
        <div className='centerAddress'>
          <p className='address'>Address: 15234 ballpark ln., 184th st, New Hampshire</p>
        </div>
        <div className='horizontalDivisionFour'></div>
          <div className="social">
            <div>
              <a title="facebook" href="https://www.facebook.com/DaveDesignsWoodWorking/">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
            <div>
              <a title="twitter" href="https://twitter.com">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
            <div>
              <a title="instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer
