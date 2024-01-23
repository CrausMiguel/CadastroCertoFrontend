import { IContact } from "../contact/contact";

export interface IPerson {
    id: string,
    name: string,
    cpf: string,
    birthday: 0,
    contacts: IContact[]
}
