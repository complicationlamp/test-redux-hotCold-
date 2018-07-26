import { restartGame, RESTART_GAME, makeGuess, MAKE_GUESS } from "./actions";

// describe()

describe('restartGame', () => {
	it('Should create a new answer', () => {
		const correctAnswer = 45
		const action = restartGame(correctAnswer);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(correctAnswer);
	});
});

describe('makeGuess', () => {
	it('Should compare a guess', () => {
		const guess = 5;
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
	});
});


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
