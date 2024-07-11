import { PriceList } from '../../types/priceList.type';

export const getStandardPriceList = (): PriceList[] => {
  return [
    {
      heading: 'Raw Honey',
      products: [
        {
          name: '375g (squeeze)',
          price: 'R60',
        },
        {
          name: '500g (squeeze)',
          price: 'R80',
        },
        {
          name: '1Kg (squeeze)',
          price: 'R140',
        },
        {
          name: '1.5Kg (tub)',
          price: 'R200',
        },
        {
          name: '7Kg (tub)',
          price: 'R785',
        },
      ],
    },
    {
      heading: 'Creamed Honey',
      products: [
        {
          name: '300g ALOE',
          price: 'R50',
        },
      ],
    },
    {
      heading: 'Honeycomb',
      products: [
        {
          name: '350g',
          price: 'R65',
        },
      ],
    },
    {
      heading: 'Gift Favours',
      products: [
        {
          name: '165g',
          price: 'R43',
        },
      ],
    },
    {
      heading: 'Food Grade Wax',
      products: [
        {
          name: 'per Kg',
          price: 'R280',
        },
      ],
    },
    {
      heading: 'Bulk Orders',
      products: [
        {
          name: '375g x 24 (box)',
          price: 'R1300',
        },
        {
          name: '500g x 24 (box)',
          price: 'R1725',
        },
        {
          name: '1Kg x 12 (box)',
          price: 'R1620',
        },
      ],
    },
  ];
};
