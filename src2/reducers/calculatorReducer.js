// import types from '../actions/types';

// const defaultState = {
//     result : 0,
//     sumInfo: {
//         frist : 0,
//         second : 0,
//     },
// }

// export default calculator = (state = defaultState, action) => {    
//     // For Debugger
//     // console.log('payload:' + action.payload);

//     switch (action.type) {
//         case types.CALCULATOR_UPDATE_SUM_FIRST:
//             return {
//                 // ...state,
//                 result : action.payload + state.sumInfo.second,
//                 sumInfo: {
//                     frist:action.payload,
//                     second:state.sumInfo.second
//                 }
//             };
//         case types.CALCULATOR_UPDATE_SUM_SECOND:
//             return {
//                 // ...state,
//                 result : action.payload + state.sumInfo.frist,
//                 sumInfo: {
//                     frist:state.sumInfo.frist,
//                     second:action.payload
//                 }
//             };
//         default:
//             return state;
//     }
// };


// action이 어떻게 (How) 변경시켜야 하는 지는 reducer(들)가 정의합니다.
import types from '../actions/types';

const defaultState = {
    result: 0,
    sumInfo: {
        first: 0,
        second: 0
    }
}

export default calculator = (state = defaultState, action) => {
    switch(action.type) {
        case types.CALCULATOR_UPDATE_SUM_FIRST:
            return {
                // ...state
                result: action.payload + state.sumInfo.second,
                sumInfo: {
                    first: action.payload,
                    second: action.sumInfo.second
                }
            };
        case types.CALCULATOR_UPDATE_SUM_SECOND:
            return {
                // ...state
                result: action.payload + state.sumInfo.first,
                sumInfo: {
                    first: state.sumInfo.first,
                    second: action.payload
                }
            };
        default:
            return state;
    }
}