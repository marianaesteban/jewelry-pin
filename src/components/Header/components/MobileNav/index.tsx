import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IProducts } from 'types/api/Product';
import Select from 'components/Select';
import { useMenuItems } from 'components/Header/constants';

interface IMobileNav {
  handleFilter: (productList: IProducts[], filterName: string) => void;
  activeFilter: string;
}

const MobileNav = ({ handleFilter, activeFilter }: IMobileNav) => {
  const menuItems = useMenuItems();
  const history = useHistory();
  const location = useLocation();
  const options = menuItems.map(item => {
    return {
      value: item.value,
      label: item.name,
      productList: item.productList
    };
  });
  const handleChange = (option: any) => {
    handleFilter(option.productList, option.value);
    history.push('/');
  };
  const setValue = () => {
    if (location.pathname === '/favorites') return options[0];
    if (activeFilter.length === 0) return options[0];
    options.find(option => option.value === activeFilter);
  };
  return (
    <Select
      value={setValue()}
      options={options}
      defaultValue={options[0]}
      onChange={(option: any) => option && handleChange(option)}
      isSearchable={false}
    />
  );
};
export default MobileNav;
