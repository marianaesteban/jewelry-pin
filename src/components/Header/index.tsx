import React, { useState } from 'react';
import { useProductsContext } from 'contexts/GlobalState';
import { Container, Menu, MenuItem } from './styles';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { favorites, getAllProducts, getBracelets, getEarrings, getSingleEarrings, getPendants, getRings } = useProductsContext();
  const location = useLocation();
  const handleFilter = (filterName: string) => {
    setActiveFilter(filterName);
  };

  return (
    <Container>
      <Menu>
        <ul>
          <MenuItem
            isActive={activeFilter === 'all'}
            onClick={() => {
              getAllProducts();
              handleFilter('all');
            }}
          >
            <Link to={`/`}>All</Link>
          </MenuItem>
          <MenuItem
            isActive={activeFilter === 'bracelets'}
            onClick={() => {
              getBracelets();
              handleFilter('bracelets');
            }}
          >
            <Link to={`/`}>Bracelets</Link>
          </MenuItem>
          <MenuItem
            isActive={activeFilter === 'earrings'}
            onClick={() => {
              getEarrings();
              handleFilter('earrings');
            }}
          >
            <Link to={`/`}>Earrings</Link>
          </MenuItem>
          <MenuItem
            isActive={activeFilter === 'singleEarrings'}
            onClick={() => {
              getSingleEarrings();
              handleFilter('singleEarrings');
            }}
          >
            <Link to={`/`}>Single Earrings</Link>
          </MenuItem>
          <MenuItem
            isActive={activeFilter === 'pendants'}
            onClick={() => {
              getPendants();
              handleFilter('pendants');
            }}
          >
            <Link to={`/`}>Pendants</Link>
          </MenuItem>
          <MenuItem
            isActive={activeFilter === 'rings'}
            onClick={() => {
              getRings();
              handleFilter('rings');
            }}
          >
            <Link to={`/`}>Rings</Link>
          </MenuItem>
          <MenuItem
            isActive={activeFilter === 'favorites' || location.pathname === '/favorites'}
            onClick={() => {
              handleFilter('favorites');
            }}
          >
            <Link to={`/favorites`}>Favorites ({favorites.length})</Link>
          </MenuItem>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
