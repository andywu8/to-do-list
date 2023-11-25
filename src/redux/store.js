import { configureStore }  from '@reduxjs/toolkit';
import { reducer } from './reducer';

const store = confgiureStore({
    reducer: reducer,
});

export default store;
