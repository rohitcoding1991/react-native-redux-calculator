// import reducers from '../reducers';
// import { createStore } from 'redux';

// export default function initStore() {
//     const store = createStore( 
//         reducers,
//         // applyMiddleware(
//         //     // Middleware will not be applied to this sample.
//         // ), 
//     );
//     return store;
// }

// store는 변화시킬 데이터 구조를 가지고 있는 reducer 와 middleware를 가지고 있다.
// store를 변경시키는것은 action뿐이다.
import reducers from '../reducers';
import { createStore } from 'redux';

export default function initStore () {
    const store = createStore (
        reducers,
    )
    return store;
}