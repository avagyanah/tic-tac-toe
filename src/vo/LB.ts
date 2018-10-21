import { PlayerType } from '../constants/Collections';
const board3: number[] = [1, 0, 1, -1, -1, 0, 0, 0, 0];
const board4: number[] = [1, 0, 1, 1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//
export interface IGameState {
  board: number[];
  state: IState;
}

interface IState {
  line: number[];
  winner: PlayerType;
}

export default class LB {
  public static initialize(board: number[]): void {
    this.winLines = this.getWiningLines(board.length);
    console.warn(this.winLines);
  }

  public static minimax(board: number[]): IGameState {
    const player: PlayerType = this.definePlayer(board);
    // LB.getMax(board, player);
    return;
  }

  // public static getMax(board: number[], player: PlayerType): IGameState {
  //   const isTerminal: boolean = LB.isTerminal(board);
  //   if (isTerminal) {
  //     return { board, state };
  //   }

  //   const state: IState = LB.getResolvedState(board);
  //   if (state.winner) {
  //     return { board, state };
  //   }
  //   let value: number = -Infinity;
  //   const a: any = LB.getFirstEmpty(board);
  //   // tslint:disable-next-line
  //   for (let i: number = 0; i < board.length; ++i) {
  //     value = Math.max(value, LB.getMin(board));
  //   }
  //   return value;
  // }
  // public static getMin(board: number[], player: PlayerType): number {
  //   const isTerminal: boolean = LB.isTerminal(board);
  //   if (isTerminal) {
  //     return;
  //   }
  //   let value: number = +Infinity;
  //   // tslint:disable-next-line
  //   for (let i: number = 0; i < board.length; ++i) {
  //     value = Math.min(value, LB.getMax(board));
  //   }
  //   return value;
  // }

  //
  //
  // _________________________________________
  public static move(board: number[]): IGameState {
    let state: IState = this.getResolvedState(board);
    if (state.winner) {
      return { board, state };
    }
    //
    const player: PlayerType = this.definePlayer(board);
    const index: number = this.getFirstEmpty(board);
    board[index] = player;
    state = this.getResolvedState(board);
    return { board, state };
  }

  private static winLines: number[][];

  private static getResolvedState(board: number[]): IState {
    const winLines: number[][] = this.getWiningLines(Math.sqrt(board.length));
    for (const line of winLines) {
      const isOver: boolean = line.every((i: number) => {
        return board[i] && board[i] === board[line[0]];
      });
      if (isOver) {
        return { line, winner: board[line[0]] };
      }
    }
    return { line: [], winner: null };
  }

  private static isTerminal(board: number[]): boolean {
    const winLines: number[][] = this.getWiningLines(Math.sqrt(board.length));
    for (const line of winLines) {
      const isOver: boolean = line.every((i: number) => {
        return board[i] && board[i] === board[line[0]];
      });
      if (isOver) {
        return true;
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
