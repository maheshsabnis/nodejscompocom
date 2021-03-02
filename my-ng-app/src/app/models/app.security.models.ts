export class RegisterUser {
  constructor(
    public Email:string,
    public Password:string,
    public ConfirmPassword:string
  ){}
}

export class AuthUser {
  constructor(
    public Email:string,
    public Password:string
  ){}
}

export class ResponseMessage {
  constructor(
    public Message:string
  ){}
}

export class ProductResponse {
  constructor(
    public ProductId:number,
    public ProductName:string
  ){}
}
