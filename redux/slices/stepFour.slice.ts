import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type StepFourType = {
	id: number;
	option: string;
};

const initialState: StepFourType = {
	id: 0,
	option: '',
};

const StepFourSlice = createSlice({
	name: 'setStepFour',
	initialState,
	reducers: {
		setStepFour: (state: StepFourType, action: PayloadAction<StepFourType>) => {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export const { setStepFour } = StepFourSlice.actions;
export default StepFourSlice.reducer;
