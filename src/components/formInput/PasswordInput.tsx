import {FormInput} from "./FormInput";

export interface PasswordInputProps {
    error: boolean,
    value: string,
    onChange: (v: string) => void,
    onError: (v: boolean) => void,
}

export const PasswordInput = (props: PasswordInputProps) => {
    const handleValidation = () => {
        props.onError(!props.value);
    }

    const handleChange = (newValue: string) => {
        props.onError(false);
        props.onChange(newValue);
    }

    return (
        <FormInput
            type="password"
            placeholder="Password"
            value={props.value}
            error={props.error}
            errorMessage="Password cannot be empty"
            onChange={handleChange}
            onBlur={handleValidation}
        />
    )
}
