import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions'


describe('hotColdReducer', () => {
	it('should set the intial state when nothing is passed', () => {
		const state = reducer(undefined, {type: '__UNKNOWN'});
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.auralStatus).toEqual('');
		expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
		});
	});

	describe('restartGame', () => {
		it('Should clear out exiting data', () => {
			let state = {
				guesses: [3, 5],
			};
			state = reducer(state, restartGame());
			expect(state).toEqual({
				guesses: [],
				feedback: "Make your guess!",
				auralStatus: "",
				correctAnswer: undefined
			});
		});
	});

	describe('makeGuess', () => {
		it('Should accept guess', () => {
			let state = {
				guesses:[]
			};
			state = reducer(state, makeGuess(44));
			expect(state).toEqual({
				guesses: [44],
				feedback: "You got it!"
			})
		});
	});
