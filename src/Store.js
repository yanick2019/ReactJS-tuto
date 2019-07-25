import { createStore, combineReducers } from 'redux';
//import Reducer from './Reducer';
import * as ActionTypes from './ActionType';



// 一定要默认值 
// 一个值


//把import Reducer from './Reducer'; 里的内容直接放到这里了
/* import * as ActionTypes from './ActionType';
function Reducer(state = 0, action){
    switch (action.type) {
      case ActionTypes.INCREMENT :
        return state + 1;
      case ActionTypes.DECREMENT:
        return state - 1;
      default:
        return state;
    }
  };


const store = createStore(Reducer) */



// 多个值 
function count(state = 0, action) {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return state + 1;
        case ActionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

function text(state = '' , action) {
   
    var s = state
    if ( action.txt  != undefined  )
        s = action.txt;
    
       
        
    return s

};


const rootReducer = combineReducers({
    count,
    text
})






const store = createStore(rootReducer)

export default store;

