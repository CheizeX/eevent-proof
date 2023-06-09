import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type StepThreeType = {
	activeItems: number[];
};

const initialState: StepThreeType = {
	activeItems: [],
};

const StepThreeSlice = createSlice({
	name: 'setStepThree',
	initialState,
	reducers: {
		setStepThree: (state: StepThreeType, action: PayloadAction<number>) => {
			const itemExists = state.activeItems.includes(action.payload);
			if (itemExists) {
				const newActiveItems = state.activeItems.filter(
					item => item !== action.payload
				);
				return {
					...state,
					activeItems: newActiveItems,
				};
			} else {
				return {
					...state,
					activeItems: [...state.activeItems, action.payload],
				};
			}
		},
	},
});

export const { setStepThree } = StepThreeSlice.actions;
export default StepThreeSlice.reducer;
