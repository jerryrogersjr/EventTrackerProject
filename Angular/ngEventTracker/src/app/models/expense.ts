export class Expense {
  private id: number;
  private expenseDate: Date;
  private paidToName: string;
  private expenseType: string;
  private paymentType: string;
  private workorderNumber: number;
  private description: string;
  private expenseTotal: number;
  private createdAt: Date;
  private updatedAt: Date;

  constructor( // Constructor needed if private for encapsulation.

    id?: number,
    expenseDate?: Date,
    paidToName?: string,
    expenseType?: string,
    paymentType?: string,
    workorderNumber?: number,
    description?: string,
    expenseTotal?: number,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    this.id = id;
    this.expenseDate = expenseDate;
    this.paidToName = paidToName;
    this.expenseType = expenseType;
    this.paymentType = paymentType;
    this.workorderNumber = workorderNumber;
    this.description = description;
    this.expenseTotal = expenseTotal;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
