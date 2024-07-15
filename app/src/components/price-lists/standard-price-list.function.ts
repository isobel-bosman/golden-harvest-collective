import { PriceList } from '../../types/priceList.type';

export const getStandardPriceList = (): PriceList[] => {
  return [
    {
      heading: 'Raw Honey',
      products: [
        {
          description: '375g (squeeze)',
          price: 'R65',
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
          price: 'R760',
        },
      ],
    },
    {
      heading: 'Creamed Honey',
      products: [
        {
          description: '300g',
          price: 'R55',
        },
      ],
    },
    {
      heading: 'Honeycomb',
      products: [
        {
          description: '350g',
          price: 'R70',
        },
      ],
    },
    {
      heading: 'Gift Favours',
      products: [
        {
          description: '165g',
          price: 'R50',
        },
      ],
    },
    {
      heading: 'Food Grade Wax',
      products: [
        {
          description: 'per Kg',
          price: 'R290',
        },
      ],
    },
  ];
};
