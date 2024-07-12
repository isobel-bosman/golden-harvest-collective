import { PriceList } from '../../types/price-list.type';

export const getBulkSalesList = (): PriceList[] => {
  return [
    {
      heading: 'Wildflower and Cosmos',
      products: [
        {
          name: 'up to 200kg',
          price: 'R85.00 pkg',
        },
        {
          name: '201 - 999kg',
          price: 'R80.00 pkg',
        },
        {
          name: 'over 1000kg',
          price: 'R75.00 pkg',
        },
      ],
    },
    {
      heading: 'Seasonal Premium Varieties',
      products: [
        {
          name: 'up to 200kg',
          price: 'R90.00 pkg',
        },
        {
          name: '201 - 999kg',
          price: 'R85.00 pkg',
        },
        {
          name: 'over 1000kg',
          price: 'R75.00 pkg',
        },
      ],
    },
  ];
};
