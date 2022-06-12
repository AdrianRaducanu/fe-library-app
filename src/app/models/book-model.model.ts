import {BorrowModel} from "./borrow-model.model";
import {ReviewModel} from "./review-model.model";

export interface BookModel {
  author: String;
  available: boolean;
  avgStar: number;
  borrow: BorrowModel
  category: String;
  description: String;
  idBook: number;
  image: String;
  imgPaths: String;
  reviews: ReviewModel[]
  title: String;
}
