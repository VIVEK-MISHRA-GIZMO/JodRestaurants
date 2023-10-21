import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="NewsLetter"/>
      <h1 className='headtext__cormorant'>Subscribe to our NewLetter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='enter you email address' />
      <button className='custom__button'>subscribe</button>
    </div>
    
  </div>
);

export default Newsletter;
