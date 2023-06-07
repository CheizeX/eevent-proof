import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export type StepType = {
	step: number;
	title: string;
	description: string;
};

const initialState: StepType = {
	step: 1,
	title: 'Step 1',
	description: 'Please enter your email address',
};

const activeStepSlice: Slice<StepType> = createSlice({
	name: 'activeStep',
	initialState,
	reducers: {
		setActiveStep: (state, action: PayloadAction<StepType>) => {
			return action.payload;
		},
	},
});

export const { setActiveStep } = activeStepSlice.actions;
export default activeStepSlice.reducer;
