import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import '../Newslatter/Newslatter.scss';

function Newslatter() {
  return (
    <div className='Newsletter-section'>
      <div className='Newsletter-content'>
        <span className='small-text'>News letter</span>
        <span className='big-text'>Sign up for the latest updates and offers</span>
        <div className='from'>
          <input type='text' placeholder='Email Address' />
          <button>Subscribe</button>
        </div>
        <div className='text'>
          Will be used in accordance with our privacy policy
        </div>
        <div className='social-icons'>
          <div className='icon'>
            <FaFacebookF size={14} />
          </div>
          <div className='icon'>
            <FaTwitter size={14} />
          </div>
          <div className='icon'>
            <FaInstagram size={14} />
          </div>
          <div className='icon'>
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
