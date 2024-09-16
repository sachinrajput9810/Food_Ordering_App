import { sum } from "../sum"

test("This is testing the sum function" , () => {
    const result = sum(10,12)
    expect(result).toBe(22)
})