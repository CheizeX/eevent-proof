import { configureStore, combineReducers } from '@reduxjs/toolkit';
import activeStep from '../slices/steps.slice';
import StepOneSlice from '../slices/stepOne.slice';
import StepTwoSlice from '../slices/stepTwo.slice';
import StepThreeSlice from '../slices/stepThree.slice';
import StepFourSlice from '../slices/stepFour.slice';

const rootReducer = combineReducers({
	activeStep,
	StepOneSlice,
	StepTwoSlice,
	StepThreeSlice,
	StepFourSlice,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
