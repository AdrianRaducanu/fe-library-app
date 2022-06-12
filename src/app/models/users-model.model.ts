import {BorrowModel} from "./borrow-model.model";
import {ReviewModel} from "./review-model.model";

export interface UsersModel {
  borrow: BorrowModel
  email: String;
  firstName: String;
  idUsers: BigInt;
  lastName: String;
  phone: String;
  reviews: ReviewModel[]
}
