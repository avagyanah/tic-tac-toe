import Board from './Borad';

class Player {
  public max_depth: number;
  public nodes_map: any;

  constructor(max_depth: number = -1) {
    this.max_depth = max_depth;
    this.nodes_map = new Map();
  }
  /**
   * Uses minimax algorithm to get the best move
   * @param {Object} board - an instant of the board class
   * @param {Boolean} maximizing - whether the player is a maximizing or a minimizing player
   * @param {Function} callback - a function to run after the best move calculation is done
   * @param {Number} depth - used internally in the function to increment the depth each recursive call
   * @return {Number} the index of the best move
   */
  public getBestMove(
    board: any,
    maximizing: boolean = true,
    callback: (a?: any) => void,
    depth: number = 0,
  ): number {
    if (board.constructor.name !== 'Board') {
      throw new Error(
        'The first argument to the getBestMove method should be an instance of Board class.',
      );
    }
    // @ts-ignore
    const TRACE: any = window.trace_ttt;

    if (depth === 0) {
      this.nodes_map.clear();
    }

    if (board.isTerminal() || depth === this.max_depth) {
      if (board.isTerminal().winner === 'x') {
        return 100 - depth;
      } else if (board.isTerminal().winner === 'o') {
        return -100 + depth;
      }
      return 0;
    }

    const console_styles: any = {
      turn_and_available_moves:
        'background: #7f3192; color: #fff; font-size:14px;padding: 0 5px;',
      exploring_parent:
        'background: #353535;color: #fff;padding: 0 5px;font-size:18px',
      exploring_child: 'background: #f03;color: #fff;padding: 0 5px',
      parent_heuristic:
        'background: #26d47c; color: #fff; font-size:14px;padding: 0 5px;',
      child_heuristic:
        'background: #5f9ead; color: #fff; font-size:14px;padding: 0 5px;',
      all_moves:
        'background: #e27a50;color: #fff;padding: 0 5px;font-size:14px',
      best_move:
        'background: #e8602a;color: #fff;padding: 0 5px;font-size:18px',
    };

    const {
      turn_and_available_moves,
      exploring_parent,
      exploring_child,
      child_heuristic,
      parent_heuristic,
      all_moves,
      best_move,
    } = console_styles;

    if (TRACE) {
      const p: string = maximizing ? 'Maximizing' : 'Minimizing';
      console.log(
        `%c${p} player's turn Depth: ${depth}`,
        turn_and_available_moves,
      );
      console.log(
        `%cAvailable Moves: ${board.getAvailableMoves().join(' ')}`,
        turn_and_available_moves,
      );
      if (depth === 0) {
        board.printFormattedBoard();
      }
    }

    if (maximizing) {
      let best: number = -100;
      board.getAvailableMoves().forEach((index: number) => {
        const child: any = new Board(board.state.slice());
        child.insert('x', index);

        if (TRACE) {
          const styles: any = depth === 0 ? exploring_parent : exploring_child;
          console.log(`%cExploring move ${index}`, styles);
          child.printFormattedBoard();
        }

        const node_value: any = this.getBestMove(
          child,
          false,
          callback,
          depth + 1,
        );
        best = Math.max(best, node_value);

        if (TRACE) {
          if (depth === 0) {
            console.log(
              `%cMove ${index} yielded a heuristic value of ${node_value}`,
              parent_heuristic,
            );
          } else {
            console.log(
              `%cChild move ${index} yielded a heuristic value of ${node_value}`,
              child_heuristic,
            );
          }
        }

        if (depth === 0) {
          const moves: any = this.nodes_map.has(node_value)
            ? `${this.nodes_map.get(node_value)},${index}`
            : index;
          this.nodes_map.set(node_value, moves);
        }
      });
      if (depth === 0) {
        let ret: any;
        if (typeof this.nodes_map.get(best) === 'string') {
          const arr: any = this.nodes_map.get(best).split(',');
          const rand: any = Math.floor(Math.random() * arr.length);
          ret = arr[rand];
        } else {
          ret = this.nodes_map.get(best);
        }
        if (TRACE) {
          this.nodes_map.forEach((index: any, value: any) => {
            console.log(`%cMove(s) ${index} yielded ${value}`, all_moves);
          });
          console.log(`%cMove ${ret} was decided as the best move`, best_move);
        }
        callback(ret);
        return ret;
      }
      return best;
    }

    if (!maximizing) {
      let best: number = 100;
      board.getAvailableMoves().forEach((index: any) => {
        const child: any = new Board(board.state.slice());
        child.insert('o', index);

        if (TRACE) {
          const styles: any = depth === 0 ? exploring_parent : exploring_child;
          console.log(`%cExploring move ${index}`, styles);
          child.printFormattedBoard();
        }

        const node_value: any = this.getBestMove(
          child,
          true,
          callback,
          depth + 1,
        );
        best = Math.min(best, node_value);

        if (TRACE) {
          if (depth === 0) {
            console.log(
              `%cMove ${index} yielded a heuristic value of ${node_value}`,
              parent_heuristic,
            );
          } else {
            console.log(
              `%cChild move ${index} yielded a heuristic value of ${node_value}`,
              child_heuristic,
            );
          }
        }

        if (depth === 0) {
          const moves: any = this.nodes_map.has(node_value)
            ? this.nodes_map.get(node_value) + ',' + index
            : index;
          this.nodes_map.set(node_value, moves);
        }
      });
      if (depth === 0) {
        let ret: any;

        if (typeof this.nodes_map.get(best) === 'string') {
          const arr: any = this.nodes_map.get(best).split(',');
          const rand: any = Math.floor(Math.random() * arr.length);
          ret = arr[rand];
        } else {
          ret = this.nodes_map.get(best);
        }
        if (TRACE) {
          this.nodes_map.forEach((index: any, value: any) => {
            console.log(`%cMove(s) ${index} yielded ${value}`, all_moves);
          });
          console.log(`%cMove ${ret} was decided as the best move`, best_move);
        }
        callback(ret);
        return ret;
      }
      return best;
    }
  }
}

export default Player;
