import { PlayerType } from '../constants/Collections';

/*0 0 1*/
/*1 0 2*/
/*0 0 0*/
export interface IState {
  board: number[];
  resolved: boolean;
}

export default class LB {
  public static initialize(size: number): void {
    this.winingLines = this.getWiningLines(size);
  }

  public static move(board: number[]): IState {
    const player: number = this.definePlayer(board);
    const index: number = this.getFirstEmpty(board);
    let resolved: boolean = this.checkForResolvedGame(board);
    if (!resolved) {
      board[index] = player;
      resolved = this.checkForResolvedGame(board);
    }
    return { board, resolved };
    // return this._move(board, player, index);
  }

  private static winingLines: number[][] = [];

  //
  // private static _move(
  //   board: number[],
  //   player: number,
  //   index: number,
  // ): number[] {
  //   while (index !== -1) {
  //     board[index] = player;
  //     player = player === Player.X ? Player.O : Player.X;
  //     index = this.getFirstEmpty(board);
  //     this._move(board, player, index);
  //   }
  //   return board;
  // }

  //
  private static checkForResolvedGame(board: number[]): boolean {
    for (const line of this.winingLines) {
      const isOver: boolean = line.every((i: number) => {
        return board[i] && board[i] === board[line[0]];
      });
      if (isOver) {
        return isOver;
      }
    }
    return false;
  }

  private static getWiningLines(n: number): number[][] {
    const winLines: number[][] = [];
    const d1: number[] = [];
    const d2: number[] = [];

    for (let i: number = 0; i < n; ++i) {
      d1.push((n + 1) * i);
      d2.push(n * (i + 1) - (i + 1));
      //
      const row: number[] = [];
      const cell: number[] = [];
      for (let j: number = 0; j < n; ++j) {
        row.push(i * n + j);
        cell.push(j * n + i);
      }
      winLines.push(row, cell);
    }
    winLines.push(d1, d2);
    return winLines;
  }

  private static definePlayer(board: number[]): number {
    // const xArr: number[] = [];
    // const oArr: number[] = [];
    // board.forEach((el: number) => {
    //   if (el) {
    //     if (el === Player.X) {
    //       xArr.push(el);
    //     } else {
    //       oArr.push(el);
    //     }
    //   }
    // });
    const xArr: number[] = board.filter((i: number) => i === PlayerType.X);
    const oArr: number[] = board.filter((i: number) => i === PlayerType.O);

    return xArr.length > oArr.length ? PlayerType.O : PlayerType.X;
  }

  private static getFirstEmpty(board: number[]): number {
    const avail: number = board.find((i: number) => i === 0);
    return board.indexOf(avail);
  }
}
