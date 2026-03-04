import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  }),
});

export const { useGetAllRestaurantsQuery } = api;
export default api;
