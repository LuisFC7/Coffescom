import React from 'react';
import './styles.css';
import bannerImg from './banner2.png';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>Alimentos y productos de forma rápida</h1>
        <p>Hecha un vistazo a los productos del día</p>
        <button onClick={handleScrollMenu}>
          Ver menú de tiendas <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;
