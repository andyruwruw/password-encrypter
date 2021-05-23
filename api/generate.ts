import {
    VercelRequest,
    VercelResponse,
} from '@vercel/node';
import jsonwebtoken from 'jsonwebtoken';

const {
    SECRET,
} = process.env;

export default async function (req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
    try {
        // Sign
        const signed = jsonwebtoken.sign(
            {
                key: req.body.key,
                origin: req.body.origin,
            },
            SECRET + req.body.skeletonKey,
        );

        // Cut
        const start = req.body.number % 12;
        let substring = signed.substr(start, 16).split('');

        const specialCharacters = ['!', '@', '#', '?'];

        // Add Special Characters
        const specials = /[!@#\?]/;
        let valid = specials.test(substring.join(''));

        if (!valid) {
            substring.splice(start % 8, 1, specialCharacters[start % specialCharacters.length]);
        }

        // Add Digits
        const digits = /\d/;
        valid = digits.test(substring.join(''));

        if (!valid) {
            if (specialCharacters.includes(substring[start % 7])) {
                substring.splice((start % 7) + 1, 1, `${start % 10}`);
            } else {
                substring.splice(start % 7, 1, `${start % 10}`);
            }
        }

        // Add letters
        const anyLetter = /[a-zA-Z]/;
        valid = anyLetter.test(substring.join(''));

        if (valid) {
            let index = 0;

            while (!specials.test(substring[index])
                && !specials.test(substring[(index + 1) % substring.length])) {
                index += 1;

                if (index === substring.length) {
                    break;
                }
            }

            substring[index] = 'a';
            substring[(index + 1) & substring.length] = 'A';
        }

        // Add Uppercase
        const uppercase = /[A-Z]/;
        valid = uppercase.test(substring.join(''));

        if (valid) {
            
        }

        // Add Lowercase
        const lowercase = /[a-z]/;
        valid = lowercase.test(substring.join(''));

        if (valid ) {

        }

        let password = substring.join('');

        return res.send(password);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
};
