const reducer = (state,action) ={
    swith (action.type){
        case "deposite":
            return state + action.payload;
            case "deposite":
                return state - action.payload;
                case "bankrupt":
                    return 0;
                    default:
                        return state
    }
}