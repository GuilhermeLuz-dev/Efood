import {
  Card,
  TagsContainer,
  CardTitle,
  Description,
  InfosContainer,
  Review,
} from './style';

import Tag from '../Tag';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  tipo: string;
  destaque: boolean;
  image: string;
  score: number;
  description: string;
};

const Product = ({
  description,
  image,
  id,
  score,
  tipo,
  title,
  destaque,
}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <TagsContainer>
        {destaque ? <Tag>Destaque da semana</Tag> : <></>}
        <Tag>{tipo}</Tag>
      </TagsContainer>
      <InfosContainer>
        <div>
          <CardTitle>{title}</CardTitle>
          <Review>
            <span>{score}</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5564 12.206C17.108 12.639 16.9043 13.263 17.0093 13.875L17.6866 17.791C17.8976 19.01 16.9211 20 15.8134 20C15.5215 20 15.2201 19.931 14.9282 19.779L11.3845 17.93C11.1073 17.786 10.8038 17.714 10.4993 17.714C10.1959 17.714 9.89243 17.786 9.61523 17.93L6.07147 19.779C5.77957 19.931 5.47822 20 5.18632 20C4.07857 20 3.10207 19.01 3.31312 17.791L3.99037 13.875C4.09537 13.263 3.89167 12.639 3.44332 12.206L0.575768 9.433C-0.551933 8.342 0.0707209 6.441 1.62892 6.216L5.59162 5.645C6.21112 5.556 6.74662 5.17001 7.02277 4.61301L8.79517 1.05099C9.14377 0.349995 9.82207 0 10.4993 0C11.1776 0 11.8559 0.349995 12.2045 1.05099L13.9769 4.61301C14.2531 5.17001 14.7886 5.556 15.4081 5.645L19.3708 6.216C20.929 6.441 21.5516 8.342 20.4239 9.433L17.5564 12.206Z"
                fill="#FFB930"
              />
            </svg>
          </Review>
        </div>
        <Description>{description}</Description>
        <Link to={`profile/${id}`} className="link">
          <button type="button">Saiba Mais</button>
        </Link>
      </InfosContainer>
    </Card>
  );
};

export default Product;
