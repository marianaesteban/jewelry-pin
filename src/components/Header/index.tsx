import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { IProducts } from 'types/api/Product';
import { useProductsContext } from 'contexts/GlobalState';
import { useMenuItems } from './constants';
import { Container, Menu, MenuItem } from './styles';
import MobileNav from './components/MobileNav';
const Header = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { favorites, getProducts, allProducts } = useProductsContext();
  const menuItems = useMenuItems();
  const location = useLocation();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  //NOTE: This is not the best approach to handling the product list
  const handleFilter = (type: IProducts[], filterName: string) => {
    //TODO: MOVE THIS TO A HELPER IN ORDER TO REUSE IT
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    getProducts(type);
    setActiveFilter(filterName);
  };

  return (
    <Container data-testid='app-header'>
      <Menu>
        {isTabletOrMobile ? (
          <>
            <MobileNav handleFilter={handleFilter} activeFilter={activeFilter} />
            <MenuItem as='div' isActive={location.pathname === '/favorites'} onClick={() => handleFilter(allProducts, '')}>
              <Link to={`/favorites`}>Favorites ({favorites.length})</Link>
            </MenuItem>
          </>
        ) : (
          <ul>
            {menuItems.map(item => (
              <MenuItem
                isActive={activeFilter === item.value || (activeFilter.length === 0 && location.pathname === '/' && item.value === 'all')}
                onClick={() => handleFilter(item.productList, item.value)}
                key={item.value}
              >
                <Link to={`/`}>{item.name}</Link>
              </MenuItem>
            ))}
            <MenuItem isActive={location.pathname === '/favorites'} onClick={() => handleFilter(allProducts, '')}>
              <Link to={`/favorites`}>Favorites ({favorites.length})</Link>
            </MenuItem>
          </ul>
        )}
      </Menu>
    </Container>
  );
};

export default Header;
