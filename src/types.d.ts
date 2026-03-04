declare interface Food {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
}

declare type Restaurant = {
  id: number;
  titulo: string;
  destacado: true;
  tipo: string;
  avaliação: number;
  descricao: string;
  capa: string;
  cardapio: Food[];
};
