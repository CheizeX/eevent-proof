import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const StepOneSlice = createSlice({
	name: 'setStepOne',
	initialState,
	reducers: {
		setStepOne: (state: StepOneType, action: PayloadAction<StepOneType>) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export const { setStepOne } = StepOneSlice.actions;
export default StepOneSlice.reducer;
