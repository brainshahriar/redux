import { ActionType } from "../action-type"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const depositeMoney = (amount : number) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type : ActionType.DEPOSITE,
            payload:amount
        })
    }
}

export const withdrawMoney = (amount : number) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type : ActionType.WITHDRAW,
            payload:amount
        })
    }
}

export const bankcruptMoney = (amount : number) => {
    return (dispatch : Dispatch<Action>) => {
        dispatch({
            type : ActionType.BANKRUPT
        })
    }
}