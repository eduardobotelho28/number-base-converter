
function binary_to_decimal (number) {

    if (typeof number !== 'number') return "the parameter must be a number"

    if(!/^[01]+$/.test(number.toString())) return "the number must be binary (only 0 or 1)"

    const numerals_arr    = number.toString().split('')
    numerals_arr.reverse()

    const numerals_to_sum = []
    numerals_arr.forEach( (numeral,index) => { numerals_to_sum.push( (Number(numeral)) * (2**index) )})

    return numerals_to_sum.reduce((acc, currrent) => {
        return acc+currrent
    }, 0)

}

console.log(binary_to_decimal(11111010110))

