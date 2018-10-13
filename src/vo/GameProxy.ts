// @ts-ignore
const vo: IGameProxy = {
  board: [],
  resolved: false,
  difficulty: 0,
  size: NaN,
};
const gameProxy: IGameProxy = generateProxy(vo);
export { gameProxy, IGameProxy };
//
import { IGameProxy } from '../constants/Types';
import { generateProxy } from '../utils/Utils';
