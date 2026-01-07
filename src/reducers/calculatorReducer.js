import types from '../actions/types'

const defaultState = {
    result : 0,
    sumInfo : {
        first : 0,
        second : 0,
    },
}

export default calculator = (state = defaultState, action) => {

    switch(action.type) {
        case types.CALCULATOR_UPDATE_SUM_FIRST:
            return {
                result : action.payload + state.sumInfo.second,
                sumInfo: {
                    first: action.payload,
                    second: state.sumInfo.second
                }
            };

        case types.CALCULATOR_UPDATE_SUM_SECOND:
            return {
                result: action.payload + state.sumInfo.first,
                sumInfo: {
                    first: state.sumInfo.first,
                    second: action.payload
                }
            };
        default:
            return state;
    }
};