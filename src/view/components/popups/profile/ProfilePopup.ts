export default class ProfilePopup extends BasePopup {
  constructor() {
    super(profilePopup);

    this.createFields();
  }

  private createFields(): void {
    const deviance: { x: number; y: number } = {
      x: 50,
      y: 70,
    };
    const centerY: number = this.bg.y + this.title.height / 2;
    //
    const nameField: NameField = new NameField();
    nameField.position.set(CENTER.x - deviance.x, centerY - 2 * deviance.y);
    //
    const skillField: SkillField = new SkillField();
    skillField.position.set(CENTER.x - deviance.x, centerY - 1 * deviance.y);
    //
    const gamesPlayedField: GamesPlayedField = new GamesPlayedField();
    gamesPlayedField.position.set(CENTER.x - deviance.x, centerY);
    //
    const ratingField: RatingField = new RatingField();
    ratingField.position.set(CENTER.x - deviance.x, centerY + 1 * deviance.y);
    //
    this.addChild(nameField, skillField, gamesPlayedField, ratingField);
  }
}

class NameField extends BaseField {
  constructor() {
    super('name', playerProxy.user.name);
  }
}

class SkillField extends BaseField {
  constructor() {
    super('skill', getEnumKey(SkillType, playerProxy.user.skill));
  }
}

class GamesPlayedField extends BaseField {
  constructor() {
    super('games', playerProxy.gamesPlayed.toString());
  }
}

class RatingField extends BaseField {
  constructor() {
    super('rating', playerProxy.user.rating.toString());
  }
}
//
import { SkillType } from '../../../../constants/Collections';
import { CENTER } from '../../../../constants/Constants';
import { getEnumKey } from '../../../../utils/Utils';
import { playerProxy } from '../../../../vo/PlayerProxy';
import BasePopup from '../BasePopup';
import { profilePopup } from '../PopupConfigs';
import { BaseField } from './components/BaseField';
