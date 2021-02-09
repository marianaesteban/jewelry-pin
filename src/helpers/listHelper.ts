import { IProducts, IProductsEntity } from 'types/api/Product';

// Flatten product list and remove duplicates. It would probably be better to rearrange the list by product and assign the corresponding categories
export const filterList = (products: IProducts[]) => {
  //Flattening the original list, if no products return an empty array
  const productList = products
    .map((category: IProducts) => (!category.products ? [] : category.products.map((product: IProductsEntity) => product)))
    .flat();
  //Remove duplicates checking by product id
  return productList.filter(
    (item: IProductsEntity, index: number, array: IProducts[]) => array.findIndex((element: IProducts) => element.id === item.id) === index
  );
};
