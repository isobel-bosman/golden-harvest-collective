import { PriceList } from '../../types/priceList.type';

export const getStandardPriceList = (): PriceList[] => {
  return [
    {
      heading: 'Raw Honey',
      products: [
        {
          name: '375g (squeeze)',
          price: 'R65',
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
          name: '3Kg (tub)',
          price: 'R390',
        },
        {
          name: '7Kg (tub)',
          price: 'R760',
        },
      ],
    },
    {
      heading: 'Creamed Honey',
      products: [
        {
          name: '300g',
          price: 'R55',
        },
      ],
    },
    {
      heading: 'Honeycomb',
      products: [
        {
          name: '350g',
          price: 'R70',
        },
      ],
    },
    {
      heading: 'Gift Favours',
      products: [
        {
          name: '165g',
          price: 'R50',
        },
      ],
    },
    {
      heading: 'Food Grade Wax',
      products: [
        {
          name: 'per Kg',
          price: 'R290',
        },
      ],
    },
  ];
};
