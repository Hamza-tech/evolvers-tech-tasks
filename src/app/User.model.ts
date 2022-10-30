export class User {
  public Id: string;
  public internalId: string;
  public Type: string;
  public Billing: string;
  public Email: string;
  public Provider: string;
  public State: string;
  public Trial: boolean;

  constructor(){
    this.Id = '';
    this.internalId = '';
    this.Type = '';
    this.Billing = '';
    this.Email = '';
    this.Provider = '';
    this.State = '';
    this.Trial = false;
  }
}


