import { Product } from '../../types/product.type';
import honeyComb from '../../assets/images/products/honeycomb.jpeg';
import foodGradeWax from '../../assets/images/products/food-grade-wax.jpeg';
import creamedHoney from '../../assets/images/products/creamed-honey.jpeg';
import giftFavours from '../../assets/images/products/gift-favours.jpeg';
import wildflower375 from '../../assets/images/products/wildflower-375.jpeg';
import wildflower500 from '../../assets/images/products/wildflower-500.jpeg';
import wildflowerKg from '../../assets/images/products/wildflower-kg.jpeg';
import buffaloThorn500 from '../../assets/images/products/buffalo-thorn-500.jpeg';
import buffaloThornKg from '../../assets/images/products/buffalo-thorn-kg.jpeg';
import bluegum500 from '../../assets/images/products/bluegum-500.jpeg';

export const getFeaturedProducts = (): Product[] => {
  return [
    {
      image: honeyComb,
      name: 'Honeycomb 350g',
      price: 'R70',
    },
    {
      image: foodGradeWax,
      name: 'Food Grade Wax',
      price: 'R290 per Kg',
    },
    {
      image: creamedHoney,
      name: 'Creamed Honey',
      price: 'R55',
    },
    {
      image: giftFavours,
      name: 'Gift Favours 165g',
      price: 'R50',
    },
    {
      image: wildflower375,
      name: 'Wildflower 375g',
      price: 'R65',
    },
    {
      image: wildflower500,
      name: 'Wildflower 500g',
      price: 'R80',
    },
    {
      image: wildflowerKg,
      name: 'Wildflower 1Kg',
      price: 'R140',
    },
    {
      image: buffaloThorn500,
      name: 'Buffalo Thorn 500g',
      price: 'R80',
    },
    {
      image: buffaloThornKg,
      name: 'Buffalo Thorn 1Kg',
      price: 'R140',
    },
    {
      image: bluegum500,
      name: 'Bluegum 500g',
      price: 'R80',
    },
  ];
};
