//src/types/types.ts
enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}
export interface IFormInput {
  firstName: String;
  lastName: String;
  nickName: String;
  email: String;
  password: String;
  dateOfBirth: Date;
  gender: GenderEnum;
  mobile: String;
  address: String;
  ReactDatepicker: Date;
}
