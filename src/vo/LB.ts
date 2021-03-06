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
    // console.warn(LB.getMax(board, player));
    const state: IState = LB.getResolvedState(board);
    return { board, state };
  }

  // public static getMax(
  //   board: number[],
  //   player: PlayerType,
  // ): { board: number[]; max: number } {
  //   const newBoard: number[] = [...board];
  //   const states: Map<number, number[]> = new Map();
  //   if (LB.isDraw(board)) {
  //     states.set(-10, board);
  //   } else if (LB.isTerminal(board)) {
  //     const state: IState = LB.getResolvedState(board);
  //     if (state.winner === player) {
  //       states.set(10, board);
  //     } else {
  //       states.set(-20, board);
  //     }
  //   } else {
  //     const emptyIndexes: number[] = LB.getEmptyIndexes(board);
  //     emptyIndexes.forEach((i: number) => {
  //       newBoard[i] = player;
  //       const state: { board: number[]; min: number } = LB.getMin(
  //         newBoard,
  //         LB.definePlayer(newBoard),
  //       );
  //       states.set(state.min, board);
  //     });
  //   }
  //   // @ts-ignore
  //   const max: number = Math.max(...Object.keys(states));
  //   return { board: states.get(max), max };
  // }

  // public static getMin(
  //   board: number[],
  //   player: PlayerType,
  // ): { board: number[]; min: number } {
  //   const newBoard: number[] = [...board];
  //   const states: Map<number, number[]> = new Map();
  //   if (LB.isDraw(board)) {
  //     states.set(-10, board);
  //   } else if (LB.isTerminal(board)) {
  //     const state: IState = LB.getResolvedState(board);
  //     if (state.winner === player) {
  //       states.set(10, board);
  //     } else {
  //       states.set(-20, board);
  //     }
  //   } else {
  //     const emptyIndexes: number[] = LB.getEmptyIndexes(board);
  //     emptyIndexes.forEach((i: number) => {
  //       newBoard[i] = player;
  //       const state: { board: number[]; max: number } = LB.getMax(
  //         newBoard,
  //         LB.definePlayer(newBoard),
  //       );
  //       states.set(state.max, board);
  //     });
  //   }
  //   // @ts-ignore
  //   const min: number = Math.min(...Object.keys(states));
  //   console.warn(Object.keys(states));
  //   return { board: states.get(min), min };
  // }

  private static winLines: number[][];
  private static depth: number;
  private static difficulty: number;

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
    return board.filter((i: number) => i === PlayerType.X).length >
      board.filter((i: number) => i === PlayerType.O).length
      ? PlayerType.O
      : PlayerType.X;
  }

  private static getFirstEmpty(board: number[]): number {
    return board.findIndex((i: number) => i === 0);
  }

  private static getEmptyIndexes(board: number[]): number[] {
    const empties: number[] = [];
    board.forEach((i: number, index: number) => {
      i === 0 && empties.push(index);
    });
    return empties;
  }

  private static getOpponent(player: PlayerType): PlayerType {
    return player === PlayerType.X ? PlayerType.O : PlayerType.X;
  }

  private static getResolvedState(board: number[]): IState {
    if (LB.isDraw(board)) {
      return { line: [], winner: null, draw: true };
    } else {
      for (const line of LB.winLines) {
        const isOver: boolean = line.every((i: number) => {
          return board[i] && board[i] === board[line[0]];
        });
        if (isOver) {
          return { line, winner: board[line[0]], draw: false };
        }
      }
    }
    return { line: [], winner: null, draw: false };
  }

  private static isTerminal(board: number[]): boolean {
    return LB.isDraw(board) || LB.hasWinner(board);
  }

  private static isDraw(board: number[]): boolean {
    return LB.isFull(board) && !LB.hasWinner(board);
  }

  private static hasWinner(board: number[]): boolean {
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

  private static isFull(board: number[]): boolean {
    return board.every((i: number) => {
      return i !== 0;
    });
  }

  private static isEmpty(board: number[]): boolean {
    return board.every((i: number) => {
      return i === 0;
    });
  }
}
