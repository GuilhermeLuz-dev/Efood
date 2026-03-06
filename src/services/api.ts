import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type PurchaseProps = {
  orderId: string;
};

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: string;
      expires: {
        month: string;
        year: string;
      };
    };
  };
};

type Food = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

type Restaurant = {
  id: number;
  titulo: string;
  destacado: true;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Food[];
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/',
  }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes',
    }),
    purchase: builder.mutation<PurchaseProps, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetAllRestaurantsQuery, usePurchaseMutation } = api;
export default api;
