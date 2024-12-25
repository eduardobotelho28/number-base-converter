
const result_container = document.querySelector('.result #result-text')
const convert_button   = document.querySelector('#convert-button')
const input_number     = document.querySelector('#number-to-convert')

convert_button.addEventListener('click', (evt) => {

    result_container.innerHTML = ''

    if(input_number.value == '') {
        result_container.innerHTML = 'please, enter a number first.'
        return
    }

    const selected_option = document.querySelector("input[type='radio']:checked")

    let result = ''

    switch (selected_option.id) {
        case 'binary-to-decimal':

            result = binary_to_decimal(parseInt(input_number.value))
            result_container.innerHTML = result

        break;

        case 'binary-to-octal':

            result = binary_to_octal(parseInt(input_number.value))
            result_container.innerHTML = result
        
        break;

        case 'binary-to-hexa':

            result = binary_to_hexa(parseInt(input_number.value))
            result_container.innerHTML = result
        
        break;

        case 'decimal-to-binary':

            result = decimal_to_binary(parseInt(input_number.value))
            result_container.innerHTML = result
        
        break;


        case 'decimal-to-octal':

            result = decimal_to_octal(parseInt(input_number.value))
            result_container.innerHTML = result
        
        break;


        case 'decimal-to-hexa':

            result = decimal_to_hexa(parseInt(input_number.value))
            result_container.innerHTML = result
        
        break;

        case 'octal-to-binary':

            result = octal_to_binary(parseInt(input_number.value))
            result_container.innerHTML = result
        
        break;

        case 'octal-to-decimal':

            result = octal_to_decimal(parseInt(input_number.value))
            result_container.innerHTML = result
        
        break;

        case 'octal-to-hexa':

            result = octal_to_hexa(parseInt(input_number.value))
            result_container.innerHTML = result
        
        break;

        case 'hexa-to-binary':

            result = hexa_to_binary(input_number.value)
            result_container.innerHTML = result
        
        break;

        case 'hexa-to-decimal':

            result = hexa_to_decimal(input_number.value)
            result_container.innerHTML = result
        
        break;

        case 'hexa-to-octal':

            result = hexa_to_octal(input_number.value)
            result_container.innerHTML = result
        
        break;

        default:
            break;
    }

})

// --------------------------------------- functions ------------------------------------------------ //

// ----------------------------- binary to.. ------------------------------------------------------- // 

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

function binary_to_octal (number) {
    return decimal_to_octal(binary_to_decimal(number))
}

function binary_to_hexa (number) {
    return decimal_to_hexa(binary_to_decimal(number))
}

// --------------------------------------------------------------------------------- //

// --------------------------- decimal to.. --------------------------------------- // 

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

// --------------------------------------------------------------------------------- //

// --------------------------- octal to.. ----------------------------------------- // 

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

function octal_to_binary (number) {
    return decimal_to_binary(octal_to_decimal(number))
}

function octal_to_hexa (number) {
    return decimal_to_hexa(octal_to_decimal(number))
}

// --------------------------------------------------------------------------------- //

// --------------------------- hexa to.. ------------------------------------------ // 

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

function hexa_to_binary (number) {
    return decimal_to_binary(hexa_to_decimal(number))
}

function hexa_to_octal (number) {
    return decimal_to_octal(hexa_to_decimal(number))
}

// --------------------------------------------------------------------------------- //

