import { PlayerType } from '../constants/Collections';
import { IGameState, IState } from '../constants/Types';
//

export default class LB {
  public static initialize(size: number, difficulty: number): void {
    LB.winLines = LB.getWiningLines(size);
    LB.depth = 0;
    LB.difficulty = difficulty;
  }

  public static minimax(board: number[]): IGameState {
    const player: PlayerType = LB.definePlayer(board);
    board = LB.getMax([...board], player);
    const state: IState = LB.getResolvedState(board);
    return { board, state };
  }

  public static getMax(board: number[], player: PlayerType): number[] {
    const isTerminal: boolean = LB.isTerminal(board);
    if (isTerminal) {
      return board;
    }

    const empties: number[] = LB.getEmpties(board);
    for (const el of empties) {
      board[el] = player;
      LB.getMin(board, LB.getOpponent(player));
    }

    return board;
  }
  public static getMin(board: number[], player: PlayerType): number[] {
    const isTerminal: boolean = LB.isTerminal(board);
    if (isTerminal) {
      return board;
    }

    const empties: number[] = LB.getEmpties(board);
    for (const el of empties) {
      board[el] = player;
      LB.getMax(board, LB.getOpponent(player));
    }

    return board;
  }

  private static winLines: number[][];
  private static depth: number;
  private static difficulty: number;

  private static isTerminal(board: number[]): boolean {
    if (LB.isDraw(board)) {
      return true;
    }
    for (const line of LB.winLines) {
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

  private static getResolvedState(board: number[]): IState {
    if (LB.isDraw(board)) {
      return { line: [], winner: null, draw: true };
    }
    for (const line of LB.winLines) {
      const isOver: boolean = line.every((i: number) => {
        return board[i] && board[i] === board[line[0]];
      });
      if (isOver) {
        return { line, winner: board[line[0]], draw: true };
      }
    }
    return { line: [], winner: null, draw: true };
  }

  private static getEmpties(board: number[]): number[] {
    const empties: number[] = [];
    board.forEach((i: number, index: number) => {
      i === 0 && empties.push(index);
    });
    return empties;
  }

  private static getOpponent(player: PlayerType): PlayerType {
    return player === PlayerType.X ? PlayerType.O : PlayerType.X;
  }

  private static isDraw(board: number[]): boolean {
    return board.every((i: number) => {
      return i !== 0;
    });
  }
}
