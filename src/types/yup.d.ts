export interface IProduct {
  name: string,
  price: number,
  stock?: number | null,
  description: string
}

export interface ICustomer {
  firstName: string,
  lastName: string,
  email: string,
  direction: string,
  step: number
}