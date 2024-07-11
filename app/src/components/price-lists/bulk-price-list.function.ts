import { PriceList } from '../../types/priceList.type';

export const getBulkSalesList = (): PriceList[] => {
  return [
    {
      heading: 'Wildflower and Cosmos',
      products: [
        {
          description: 'up to 200kg',
          price: 'R85.00 pkg',
        },
        {
          description: '201 - 999kg',
          price: 'R80.00 pkg',
        },
        {
          description: 'over 1000kg',
          price: 'R75.00 pkg',
        },
      ],
    },
    {
      heading: 'Seasonal Premium Varieties',
      products: [
        {
          description: 'up to 200kg',
          price: 'R90.00 pkg',
        },
        {
          description: '201 - 999kg',
          price: 'R85.00 pkg',
        },
        {
          description: 'over 1000kg',
          price: 'R75.00 pkg',
        },
      ],
    },
  ];
};
