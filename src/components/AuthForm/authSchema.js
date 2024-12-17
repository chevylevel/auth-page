import { z } from "zod";

export const emailPasswordSchema = z.object({
    email: z.string().email("Wrong type of e-mail"),
    password: z.string()
        .refine((val) => {
            return val.length >= 8
        }, {
            message: "Password must be at least 8 characters long",
            params: { code: "length" },
        })

        .refine((val) => /[A-Z]/.test(val), {
            message: "Password must contain at least one uppercase letter",
            params: { code: "uppercase_letter" },
        })

        .refine((val) => /(\d|[\W_])/.test(val), {
            message: "Password must Contain at least one digit or symbol",
            params: { code: "digit_or_symbol" },
        })
}).refine((data) => {
    if (!data.email) {
        return true;
    }

    return !data.password.includes(data.email)
}, {
    message: "Password cannot contain your email address",
    params: { code: "password_contains_email" },
    path: ['password'],
})

export const authsSchema = z.object({
    phone: z.string().min(6, "Enter phone number"),
    referralCode: z.string().max(6),
    policy: z.string().refine((policy) => policy === 'allowExtraEmails', {
        message: "You must accept the terms and conditions",
    }),
}).and(emailPasswordSchema);

