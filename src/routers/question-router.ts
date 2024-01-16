import express, { RequestHandler } from "express";
import { QuestionRepository } from "../repository/question.respository";
import { QuestionService } from "../services/question-service";
import { QuestionController } from "../controllers/question.controller";
import { questionSchema } from "../validation-schemas/question-schema";
import { celebrate } from "celebrate";
import expressAsyncHandler from "express-async-handler";

const { create, questionId, updateQuestion } = questionSchema;
const questionRouter: express.Router = express.Router();
const respository: QuestionRepository = new QuestionRepository();
const service: QuestionService = new QuestionService(respository);
const controller: QuestionController = new QuestionController(service);

questionRouter.get("/getAll", expressAsyncHandler(controller.getAllQuestions as RequestHandler));
questionRouter.get(
  "/getQuestion/:id",
  celebrate(questionId),
  expressAsyncHandler(controller.getQuestion as RequestHandler)
);
questionRouter.post(
  "/create",
  celebrate(create),
  expressAsyncHandler(controller.createQuestion as RequestHandler)
);
questionRouter.put(
  "/update/:id",
  celebrate(updateQuestion),
  expressAsyncHandler(controller.updateQuestion as RequestHandler)
);
questionRouter.delete(
  "/delete/:id",
  celebrate(updateQuestion),
  expressAsyncHandler(controller.deleteQuestion as RequestHandler)
);

export default questionRouter;
