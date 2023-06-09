import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export type StepType = {
	step: number;
};

const initialState: StepType = {
	step: 1,
};

const activeStepSlice: Slice<StepType> = createSlice({
	name: 'activeStep',
	initialState,
	reducers: {
		incrementStep: (state, action: PayloadAction<number>) => {
			state.step += action.payload;
		},
		decrementStep: (state, action: PayloadAction<number>) => {
			state.step -= action.payload;
		},
	},
});

export const { incrementStep, decrementStep } = activeStepSlice.actions;
export default activeStepSlice.reducer;
