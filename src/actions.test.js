import { restartGame, RESTART_GAME } from "./actions";

// describe()

describe('restartGame', () => {
	it('Should create a new answer', () => {
		const correctAnswer = 45
		const action = restartGame(correctAnswer);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(correctAnswer);
	});
}):


// export const ADD_LIST = 'ADD_LIST';
// export const addList = title => ({
//     type: ADD_LIST,
//     title
// });

// export const ADD_CARD = 'ADD_CARD';
// export const addCard = (text, listIndex) => ({
//     type: ADD_CARD,
//     text,
//     listIndex
// });
