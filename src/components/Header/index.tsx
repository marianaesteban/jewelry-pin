import React, { useState } from 'react';
import { useProductsContext } from 'contexts/GlobalState';
import { Container, Menu, MenuItem } from './styles';
import { Link, useLocation } from 'react-router-dom';
import { IProducts } from 'types/api/Product';

const Header = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { favorites, getProducts, allProducts, bracelets, earrings, singleEarrings, pendants, rings } = useProductsContext();
  const location = useLocation();

  const handleFilter = (type: IProducts[], filterName: string) => {
    //TODO: MOVE THIS TO A HELPER IN ORDER TO REUSE IT
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    getProducts(type);
    setActiveFilter(filterName);
  };

  return (
    <Container>
      <Menu>
        <ul>
          <MenuItem isActive={activeFilter === 'all'} onClick={() => handleFilter(allProducts, 'all')}>
            <Link to={`/`}>All</Link>
          </MenuItem>
          <MenuItem isActive={activeFilter === 'bracelets'} onClick={() => handleFilter(bracelets, 'bracelets')}>
            <Link to={`/`}>Bracelets</Link>
          </MenuItem>
          <MenuItem isActive={activeFilter === 'earrings'} onClick={() => handleFilter(earrings, 'earrings')}>
            <Link to={`/`}>Earrings</Link>
          </MenuItem>
          <MenuItem isActive={activeFilter === 'singleEarrings'} onClick={() => handleFilter(singleEarrings, 'singleEarrings')}>
            <Link to={`/`}>Single Earrings</Link>
          </MenuItem>
          <MenuItem isActive={activeFilter === 'pendants'} onClick={() => handleFilter(pendants, 'pendants')}>
            <Link to={`/`}>Pendants</Link>
          </MenuItem>
          <MenuItem isActive={activeFilter === 'rings'} onClick={() => handleFilter(rings, 'rings')}>
            <Link to={`/`}>Rings</Link>
          </MenuItem>
          <MenuItem
            isActive={activeFilter === 'favorites' || location.pathname === '/favorites'}
            onClick={() => handleFilter(allProducts, 'favorites')}
          >
            <Link to={`/favorites`}>Favorites ({favorites.length})</Link>
          </MenuItem>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
