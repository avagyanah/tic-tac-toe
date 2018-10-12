import moment from 'moment';
import uuid from 'uuid';
import { SkillType } from '../constants/Collections';

const userVO: any = {
  id: uuid(),
  name: 'Guest',
  rating: 200,
  skill: SkillType.Beginner,
  timescale: moment.utc().valueOf(),
};

export { userVO };
