import {FormInput} from "./FormInput";
import {emailRegex} from "../../helpers/formHelper";

export interface PasswordInputProps {
    error: boolean,
    value: string,
    onChange: (v: string) => void,
    onError: (v: boolean) => void,
}

export const EmailInput = (props: PasswordInputProps) => {
    const handleChange = (newValue: string) => {
        const emailMatched =
        newValue.toLowerCase().match(emailRegex);
        props.onError(!emailMatched);
        props.onChange(newValue);
    }

    return (
        <FormInput
            type="email"
            placeholder="Email Address"
            value={props.value}
            error={props.error}
            errorMessage="Looks like this is not an email"
            onChange={handleChange}
        />
    )
}
