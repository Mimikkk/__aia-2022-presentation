export enum ClientType {
  Standard = "Standard",
  Employee = "Employee",
  Student = "Student",
}

export module ClientType {
  export const list: ClientType[] = [
    ClientType.Standard,
    ClientType.Employee,
    ClientType.Student,
  ];
}
