
// import { combineReducers } from 'redux';
// import CalculatorReducer from './calculatorReducer';

// export default combineReducers({
    //     calculator: CalculatorReducer,
    // });
    


// action 이 어떻게 변경시켜야 하는지는 reducer가 정의한다.
import { combineReducers } from "redux";
import CalculatorReducer from './calculatorReducer';

export default combineReducers({
    calculator: CalculatorReducer
})