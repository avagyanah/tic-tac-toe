import { VO } from '../vo/VO';

function generateProxy(object: any): any {
  Object.assign(object, VO);
  Object.defineProperty(object, 'observers', {
    value: [],
  });
  return new Proxy(object, {
    set(
      target: any,
      property: string | number | symbol,
      value: any,
      receiver: any,
    ): boolean {
      target[property] = value;
      object.observers.forEach((observer: any) => {
        observer.updateView(property, target[property]);
      });
      return true;
    },
  });
}

function getEnumKeys(e: any): any[] {
  return Object.keys(e).filter((k: any) => typeof e[k as any] === 'number');
}

function getEnumValues(e: any): any[] {
  return getEnumKeys(e).map((k: any) => e[k as any]);
}

export { generateProxy, getEnumValues, getEnumKeys };
