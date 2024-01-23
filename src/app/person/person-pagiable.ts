import { IPerson } from "./person";

export interface IPersonPagiable{
    content: any;
    pageNo: number;
    pageSize: number;
    totalElement: number;
    totalPages: number;
    last: number;
}