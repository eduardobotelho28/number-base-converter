

// --------------------------------------- functions ------------------------------------------------ //

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

function decimal_to_octal (number) {

    if (typeof number !== 'number') return "the parameter must be a number"

    if(number == 0) return '0'

    const division_rest = []

    while (number != 0) {
        division_rest.push(number % 8)
        number = Math.floor(number/8)
    }

    division_rest.reverse()
    return division_rest.join('')

}

function decimal_to_hexa (number) {

    if (typeof number !== 'number') return "the parameter must be a number"

    if(number == 0) return '0'

    const division_rest = []

    while (number != 0) {
        division_rest.push(number % 16)
        number = Math.floor(number / 16)
    }

    division_rest.reverse()
    const division_hexa = division_rest.map (number => {
        
        return number.toString().replace(/\b(10|11|12|13|14|15)\b/g, (match) => {
            return String.fromCharCode(parseInt(match) + 55);
          });
    })
    return division_hexa.join('')

}

function octal_to_decimal (number) {

    if (typeof number !== 'number') return "the parameter must be a number"

    if(!/^[0-7]+$/.test(number.toString())) return "the number must be octal"

    const numerals_arr    = number.toString().split('')
    numerals_arr.reverse()

    const numerals_to_sum = []
    numerals_arr.forEach( (numeral,index) => { numerals_to_sum.push( (Number(numeral)) * (8**index) )})

    return numerals_to_sum.reduce((acc, currrent) => {
        return acc+currrent
    }, 0)

}

function hexa_to_decimal (number) {

    number = number.toString()

    if(!/^[0-9a-fA-F]+$/.test(number.toString())) return "the number must be hexadecimal"

    const numerals_arr    = number.split('')
    numerals_arr.reverse()

    const numerals_to_sum = []
    numerals_arr.forEach( (numeral,index) => { 
        numeral = numeral.replace(/[A-F]/gi, (match) => parseInt(match, 16)); //parse de hexa para decimal.
        numerals_to_sum.push( (Number(numeral)) * (16**index) )
    })

    return numerals_to_sum.reduce((acc, currrent) => {
        return acc+currrent
    }, 0)

}


console.log(decimal_to_hexa(685))
console.log(hexa_to_decimal("2ad"))
