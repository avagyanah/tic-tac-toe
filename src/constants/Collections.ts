enum PlayerType {
  X = 1,
  O = -1,
}
//
enum SkillType {
  Beginner = 1,
  Intermediate,
  Expert,
  Master,
}
//
enum SwitcherState {
  ON = 1,
  OFF = -1,
}
//
const GAME_SIZES: number[] = [3, 4];

export { PlayerType, SwitcherState, GAME_SIZES, SkillType };
