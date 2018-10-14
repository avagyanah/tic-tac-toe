// @ts-ignore
const vo: IGameProxy = {
  board: [],
  resolvedLine: [],
  difficulty: 0,
  size: NaN,
  winner: null,
};
const gameProxy: IGameProxy = generateProxy(vo);
export { gameProxy, IGameProxy };
//
import { IGameProxy } from '../constants/Types';
import { generateProxy } from '../utils/Utils';
