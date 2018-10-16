const popupVO: any = {
  queue: [],
};

// @ts-ignore
const viewVO: IViewProxy = {
  popup: generateProxy(popupVO),
};

const viewProxy: IViewProxy = generateProxy(viewVO);
//
export { viewProxy, IPopupProxy };
//
import { IPopupProxy, IViewProxy } from '../constants/Types';
import { generateProxy } from '../utils/Utils';
