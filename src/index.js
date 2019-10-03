const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const ten = (str) => {
        const brakeArr = (str, arr) => {
            if (str.length === 10) {
                arr.push(str);
                return arr;
            }
            arr.push(str.slice(0, 10));
            return brakeArr(str.slice(10), arr);
        }
        return brakeArr(str, []);
    }

    const noZero = str => {
        if (str[0] !== '0') {
            return str;
        }
        return noZero(str.slice(1));
    }
    
    const pairs = str => {
        const letter = (str, resStr) => {
            if (str.length === 2) {
                return str === '10' ? resStr + '.' : resStr + '-';
            }
            let res = str.slice(0, 2) === '10' ? resStr + '.' : resStr + '-';

            return letter(str.slice(2), res);
        }
        return letter(str, '');
    }

    return expr.split('**********').map(str => ten(str).map(str2 => noZero(str2)).map(str3 => pairs(str3)).map(str4 => MORSE_TABLE[str4]).join('')).join(' ');

}

}

module.exports = {
    decode
}
