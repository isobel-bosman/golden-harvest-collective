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
      description: 'Honeycomb 350g',
      price: 'R65',
    },
    {
      image: foodGradeWax,
      description: 'Food Grade Wax',
      price: 'R280 per Kg',
    },
    {
      image: creamedHoney,
      description: 'Creamed Honey',
      price: 'R50',
    },
    {
      image: giftFavours,
      description: 'Gift Favours 165g',
      price: 'R43',
    },
    {
      image: wildflower375,
      description: 'Wildflower 375g',
      price: 'R60',
    },
    {
      image: wildflower500,
      description: 'Wildflower 500g',
      price: 'R80',
    },
    {
      image: wildflowerKg,
      description: 'Wildflower 1Kg',
      price: 'R140',
    },
    {
      image: buffaloThorn500,
      description: 'Buffalo Thorn 500g',
      price: 'R80',
    },
    {
      image: buffaloThornKg,
      description: 'Buffalo Thorn 1Kg',
      price: 'R140',
    },
    {
      image: bluegum500,
      description: 'Bluegum 500g',
      price: 'R80',
    },
  ];
};
