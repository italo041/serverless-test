import { Sequelize, DataTypes, Model } from "sequelize";
import { User } from "../../../../entities/User";

export interface UserInstance extends Model<User> {}

export class UserModel {
  constructor(private connectR: Sequelize, private connectE: Sequelize) {}

  private bodyModel = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  };

  public read = this.connectR.define<UserInstance>("users", this.bodyModel);

  public execute = this.connectE.define<UserInstance>("users", this.bodyModel);
}
