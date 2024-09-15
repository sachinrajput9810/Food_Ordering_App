import { sum } from "../sum"

test("this fun calculates the sum of 2 nos" , () => {
    const result = sum(21,3)

    // Assertion
    expect(result).toBe(24)
})