import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type StepTwoType = {
	id: number;
	name: string;
	description: string;
};

const initialState: StepTwoType = {
	id: 0,
	name: '',
	description: '',
};

const StepTwoSlice = createSlice({
	name: 'setStepTwo',
	initialState,
	reducers: {
		setStepTwo: (state: StepTwoType, action: PayloadAction<StepTwoType>) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export const { setStepTwo } = StepTwoSlice.actions;
export default StepTwoSlice.reducer;
