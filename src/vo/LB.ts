import { PlayerType } from '../constants/Collections';

/* 2 0 1 */
/* 0 1 2 */
/* 1 0 0 */
export interface IGameState {
  board: number[];
  resolvedState: IResolvedState;
}

interface IResolvedState {
  line: number[];
  winner: PlayerType;
}

export default class LB {
  public static initialize(size: number): void {
    this.winingLines = this.getWiningLines(size);
  }

  public static move(board: number[]): IGameState {
    let resolvedState: IResolvedState = this.checkForResolvedGame(board);
    if (resolvedState.winner) {
      return { board, resolvedState };
    }
    //
    const player: PlayerType = this.definePlayer(board);
    const index: number = this.getFirstEmpty(board);
    board[index] = player;
    resolvedState = this.checkForResolvedGame(board);
    // get move by minmax depends on depth/difficulty
    return { board, resolvedState };
  }

  private static winingLines: number[][] = [];

  //
  private static checkForResolvedGame(board: number[]): IResolvedState {
    for (const line of this.winingLines) {
      const isOver: boolean = line.every((i: number) => {
        return board[i] && board[i] === board[line[0]];
      });
      if (isOver) {
        return { line, winner: board[line[0]] };
      }
    }
    return { line: [], winner: null };
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

  private static definePlayer(board: number[]): PlayerType {
    const xArr: number[] = board.filter((i: number) => i === PlayerType.X);
    const oArr: number[] = board.filter((i: number) => i === PlayerType.O);

    return xArr.length > oArr.length ? PlayerType.O : PlayerType.X;
  }

  private static getFirstEmpty(board: number[]): number {
    const avail: number = board.find((i: number) => i === 0);
    return board.indexOf(avail);
  }
}
