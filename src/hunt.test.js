import { createHunt } from './hunt';

describe('HabitHunt', () => {
    it('creates a Hunt object when run', () => {
        // assert
        expect(createHunt()).toStrictEqual({});
    });
});