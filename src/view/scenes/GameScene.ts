export const GAME_SCENE_START: string = 'GameSceneStart';
//
export class GameScene extends BaseScene {
  private board: Square[] = [];

  constructor(game: IGame) {
    super(game);
    gameProxy.registerObserver(this);
  }

  protected updateView(key: string, value: any, receiver: any): void {
    switch (receiver) {
      case gameProxy:
        switch (key) {
          case 'size':
            this.startGame(value);
            break;
          case 'board':
            this.updateBoard(value);
            break;
          case 'winner':
            value && this.stopGame(value);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  private startGame(boardSize: number): void {
    this.createBoard(boardSize);
  }
  private stopGame(winner: PlayerType): void {
    this.disableBoardInput();
    this.drawResolvedLine(gameProxy.resolvedLine, winner);
  }

  private createBoard(size: number): void {
    const board: PIXI.Container = new PIXI.Container();
    for (let i: number = 0; i < size; ++i) {
      for (let j: number = 0; j < size; ++j) {
        const square: Square = new Square();
        square.position.set(j * square.width * 0.95, i * square.height * 0.925);
        square.interactive = true;
        square.buttonMode = true;
        square.once('pointerdown', () => {
          Register.emit(SQUARE_CLICK, i * size + j);
        });
        //
        board.addChild(square);
        this.board.push(square);
      }
    }
    this.addChild(board);
    board.position.set(
      GAME_WIDTH + this.board[0].width / 2,
      CENTER.y - (board.height - this.board[0].height) / 2,
    );
    this.board.forEach((square: Square, index: number) => {
      TweenLite.to(square, 0.5, {
        x: square.x - CENTER.x - board.width / 2,
        delay: index * 0.03,
        ease: Expo.easeOut,
      });
    });
  }

  private disableBoardInput(): void {
    this.board.forEach((square: Square) => (square.interactive = false));
  }
  private drawResolvedLine(resolvedLine: number[], winner: PlayerType): void {
    const color: number =
      winner === playerProxy.settings.player ? 0x0ccc55 : 0xf45a5a;
    resolvedLine.forEach((i: number) => {
      const square: Square = this.board[i];
      square.tint = color;
      square.shake();
    });
  }

  private updateBoard(board: number[]): void {
    for (let i: number = 0; i < board.length; ++i) {
      const square: Square = this.board[i];
      const el: number = board[i];
      if (square.type === el) {
        continue;
      } else {
        square.type = el;
      }
      //
      if (el !== 0) {
        square.interactive = false;
      }
    }
  }
}
//
import { Expo, TweenLite } from 'gsap';
import { PlayerType } from '../../constants/Collections';
import { CENTER, GAME_WIDTH } from '../../constants/Constants';
import { IGame } from '../../constants/Types';
import Register from '../../register/Register';
import { gameProxy } from '../../vo/GameProxy';
import { playerProxy } from '../../vo/PlayerProxy';
import Square, { SQUARE_CLICK } from '../components/Square';
import BaseScene from './BaseScene';
