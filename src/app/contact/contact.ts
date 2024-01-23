import { IPerson } from "../person/person";

export interface IContact {
    id: string,
    name: string,
    email: string,
    phoneNumber: string,
    person: IPerson;
}