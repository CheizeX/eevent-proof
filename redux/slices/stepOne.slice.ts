import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export type StepOneType = {
	fullName: string;
	email: string;
	phone: string;
};

const initialState: StepOneType = {
	fullName: '',
	email: '',
	phone: '',
};

const StepOneSlice: Slice<StepOneType> = createSlice({
	name: 'activeStep',
	initialState,
	reducers: {
		setStepOne: (state, action: PayloadAction<StepOneType>) => {
			return action.payload;
		},
	},
});

export const { setActiveStep } = StepOneSlice.actions;
export default StepOneSlice.reducer;
