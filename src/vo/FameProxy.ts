// @ts-ignore
const vo: IFameProxy = {
  users: [],
  sync: (data: IStoredFameData) => {
    vo.users = data.users;
  },
};
const fameProxy: IFameProxy = generateProxy(vo);

export { fameProxy, IFameProxy };
//
import { IFameProxy, IStoredFameData } from '../constants/Types';
import { generateProxy } from '../utils/Utils';
