import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.scss';

const headerMenu = [
  { name: 'Home', path: '/' },
  { name: 'Movies', path: '/movie' },
  { name: 'Tv Series', path: '/tv' },
];

function Header(props) {
  const { pathname } = useLocation();

  const headerRef = useRef(null);

  useEffect(() => {
    const activeHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add('active');
      } else {
        headerRef.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', activeHeader);
    return () => {
      window.removeEventListener('scroll', activeHeader);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/">MOOSE</Link>
        </div>
        <ul className="header__nav">
          {headerMenu.map((header, index) => (
            <li
              key={index}
              className={pathname === header.path ? 'active' : ''}
            >
              <Link to={header.path}>{header.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;

// test 2
