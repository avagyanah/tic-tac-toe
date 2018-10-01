const popupVO: any = {
  queue: [],
};
const popupProxy: IPopupProxy = generateProxy(popupVO);

const viewVO: any = {
  popup: popupProxy,
};

const viewProxy: IViewProxy = generateProxy(viewVO);
//
export { viewProxy, IPopupProxy, popupProxy, IViewProxy };
//
import { IPopupProxy, IViewProxy } from '../constants/Types';
import { generateProxy } from '../utils/Utils';
