import {ActionType} from '../action-type/index'
interface DepositeAction{
    type:ActionType.DEPOSITE
    payload:number
}
interface WithdrawActiion{
    type:ActionType.WITHDRAW
    payload:number
}
interface BankrucpAction{
    type:ActionType.BANKRUPT
}

export type Action = DepositeAction | WithdrawActiion | BankrucpAction