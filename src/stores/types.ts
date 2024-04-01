export interface PersonalInfo {
  nationality:  string;
  familyName: string;
  firstName: string;
  idType: string;
  idNumber: string;
  birthDate: string;
}

export interface AddressInfo {
  address: string;
  city: string;
  district: string;
  agreement: boolean;
}

export interface CardInfo {
  card: string;
  cardType: string;
  expirationDate: string;
  securityCode: string;
  billingAddress: string;
}

export interface SignupErrors {
  email: boolean;
  phone: boolean;
  password: boolean;
  personalInfo: boolean;
  addressInfo: boolean;
  cardInfo: boolean;
}

export interface RootState {
  loading: boolean;
  email: string;
  phone: string;
  password: string;
  personalInfo: PersonalInfo;
  personalInfoFullfilled: boolean;
  addressInfo: AddressInfo;
  addressInfoFullfilled: boolean;
  cardInfo: CardInfo;
  cardInfoFullfilled: boolean;
  errors: SignupErrors;
}