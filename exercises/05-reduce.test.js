/*
 * REDUCE
 *
 * You can implement almost anything with reduce.
 * But how do you implement reduce?
 * TIP: Use your friend, recursion
 */

const reduce = (arr, fn, initial) => {
	// TODO - IMPLEMENT ME
}

/* =========== TESTS =============== */

test('reduces an array', () =>
	expect(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0)).toEqual(15)
)