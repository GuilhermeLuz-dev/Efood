class Food {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  score?: number;
  link: string;
  preco: number;

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    tags: string[],
    score: number,
    link: string,
    preco: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.tags = tags;
    this.score = score;
    this.link = link;
    this.preco = preco;
  }
}

export default Food;
