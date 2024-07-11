import { PriceList } from '../../types/priceList.type';

export const getStandardPriceList = (): PriceList[] => {
  return [
    {
      heading: 'Raw Honey',
      products: [
        {
          description: '375g (squeeze)',
          price: 'R60',
        },
        {
          description: '500g (squeeze)',
          price: 'R80',
        },
        {
          description: '1Kg (squeeze)',
          price: 'R140',
        },
        {
          description: '1.5Kg (tub)',
          price: 'R200',
        },
        {
          description: '7Kg (tub)',
          price: 'R785',
        },
      ],
    },
    {
      heading: 'Creamed Honey',
      products: [
        {
          description: '300g ALOE',
          price: 'R50',
        },
      ],
    },
    {
      heading: 'Honeycomb',
      products: [
        {
          description: '350g',
          price: 'R65',
        },
      ],
    },
    {
      heading: 'Gift Favours',
      products: [
        {
          description: '165g',
          price: 'R43',
        },
      ],
    },
    {
      heading: 'Food Grade Wax',
      products: [
        {
          description: 'per Kg',
          price: 'R280',
        },
      ],
    },
    {
      heading: 'Bulk Orders',
      products: [
        {
          description: '375g x 24 (box)',
          price: 'R1300',
        },
        {
          description: '500g x 24 (box)',
          price: 'R1725',
        },
        {
          description: '1Kg x 12 (box)',
          price: 'R1620',
        },
      ],
    },
  ];
};
