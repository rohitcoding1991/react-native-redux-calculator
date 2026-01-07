// import * as calculatorAction from './calculatorAction';

// const ActionCreators = Object.assign({},   
//     calculatorAction,
// );


// export default ActionCreators;

// store를 변경시키는것은 action뿐이다.
import calculatorAction from './calculatorAction';

const ActionCreators = Object.assign({}, calculatorAction,);

export default ActionCreators;