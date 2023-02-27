export const divide = (dividend: number, divisor:any) => { 
    if (divisor === 0 || isNaN(divisor)) { 
        throw new Error("Error while dividing")
    }
    return dividend / divisor;
}