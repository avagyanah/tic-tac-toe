import uuid from 'uuid';
import { SkillType } from '../constants/Collections';
import { IUserVO } from '../constants/Types';

// @ts-ignore
const userVO: IUserVO = {
  id: uuid(),
  name: 'Guest',
  rating: 200,
  skill: SkillType.Beginner,
};

export { userVO };
