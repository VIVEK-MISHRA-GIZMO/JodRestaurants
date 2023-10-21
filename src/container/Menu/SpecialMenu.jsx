import React from 'react';

import './SpecialMenu.css';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your Palatte' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>


    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Bear</p>
        <div className='app__specialMenu_menu_items '>
          {data.wines.map((wine, index) => {
            return (<MenuItem key={wine.title+index} price={wine.price} title={wine.title}
            tags={wine.tags}/>)
          })}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="Menu img" />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items '>
          {data.cocktails.map((cocktail, index) => {
            return (<MenuItem key={cocktail.title+index} title={cocktail.title}
              tags={cocktail.tags} price={cocktail.price}/>)
          })}
        </div>
      </div>
      
    </div>
   <div style={{marginTop:'15px'}}></div>
    <button type='button' className='custom__button'>View More</button>


  </div>

);

export default SpecialMenu;
