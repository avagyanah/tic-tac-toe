const VO: any = {
  registerObserver(observer: any): void {
    this.observers.push(observer);
  },
  removeObserver(observer: any): void {
    this.observers.splice(this.observers.indexOf(observer), 1);
  },
};
export { VO };
//
