
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

function decimal_to_binary (number) {

    if (typeof number !== 'number') return "the parameter must be a number"

    if(number == 0) return '0'

    const division_rest = []

    while (number != 0) {
        division_rest.push(number % 2)
        number = Math.floor(number/2)
    }

    division_rest.reverse()
    return division_rest.join('')

}

// console.log(binary_to_decimal(11111010110))
// console.log(decimal_to_binary(0))

