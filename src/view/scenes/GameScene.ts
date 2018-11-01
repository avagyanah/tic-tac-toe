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
    //
    this.board.forEach((square: Square, index: number) => {
      if (index === this.board.length - 1) {
        this.tweenToCenter(
          square,
          index * 0.03,
          square.x - CENTER.x - board.width / 2,
        );
      } else {
        this.tweenToCenter(
          square,
          index * 0.03,
          square.x - CENTER.x - board.width / 2,
        );
      }
    });
  }

  private tweenToCenter(
    square: Square,
    delay: number,
    toX: number,
  ): Promise<void> {
    return new Promise((resolve: any) => {
      TweenLite.to(square, 0.5, {
        x: toX,
        delay,
        ease: Expo.easeOut,
        onComplete: () => {
          resolve();
        },
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
    board.forEach((el: number, index: number) => {
      const square: Square = this.board[index];
      square.type = el;
      square.interactive = el !== 0 ? false : true;
    });
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
