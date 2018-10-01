export default class ScaleManager {
  constructor(
    private canvas: HTMLCanvasElement,
    private width: number,
    private height: number,
  ) {
    window.onload = window.onresize = window.onorientationchange = () => {
      this.resize();
    };
  }

  private resize(): void {
    const scale: number = Math.min(
      window.innerHeight / this.height,
      window.innerWidth / this.width,
    );
    this.canvas.style.position = 'absolute';
    this.canvas.style.width = this.width * scale + 'px';
    this.canvas.style.height = this.height * scale + 'px';
    this.canvas.style.left =
      (window.innerWidth - this.width * scale) * 0.5 + 'px';
    this.canvas.style.top =
      (window.innerHeight - this.height * scale) * 0.5 + 'px';
  }
}
