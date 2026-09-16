import { GoodCard } from '../GoodCard/GoodCard';

export const GoodsList = ({ goodsFromServer }) =>
  goodsFromServer.map(good => <GoodCard good={good} />);
