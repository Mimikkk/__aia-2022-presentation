export enum ClientType {
  Standard = "standard",
  Employee = "employee",
  Student = "student",
}

export module ClientType {
  export const list: ClientType[] = [
    ClientType.Standard,
    ClientType.Employee,
    ClientType.Student,
  ];
}
