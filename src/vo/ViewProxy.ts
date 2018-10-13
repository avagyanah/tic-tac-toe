const popupVO: any = {
  queue: [],
};
const popupProxy: IPopupProxy = generateProxy(popupVO);

// @ts-ignore
const viewVO: IViewProxy = {
  popup: popupProxy,
};

const viewProxy: IViewProxy = generateProxy(viewVO);
//
export { viewProxy, IPopupProxy, popupProxy, IViewProxy };
//
import { IPopupProxy, IViewProxy } from '../constants/Types';
import { generateProxy } from '../utils/Utils';
