import {BorrowModel} from "./borrow-model.model";
import {ReviewModel} from "./review-model.model";

export interface UsersModel {
  borrow: BorrowModel
  email: String;
  firstName: String;
  idUsers: number;
  lastName: String;
  phone: String;
  password: String;
  reviews: ReviewModel[]
}
