import { DataTypes, Model } from "sequelize";
import { sequelize } from "../models/index";
import { Test } from "./test";
import { Question } from "./question";
class TestQuestions extends Model {
  id!: number;
  test_id!: number;
  question_id!: number;
}
TestQuestions.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    test_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Test,
        key: "id",
      },
    },
    question_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Question,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "test_questions",
    tableName: "test_questions",
  }
);

TestQuestions.belongsTo(Test, { foreignKey: "test_id" });
TestQuestions.belongsTo(Question, { foreignKey: "question_id" });

export { TestQuestions };