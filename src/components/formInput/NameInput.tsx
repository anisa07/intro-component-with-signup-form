import {FormInput} from "./FormInput";

interface NameInputProps {
    name: string,
    value: string,
    error: boolean,
    onChange: (v: string) => void,
    onError: (v: boolean) => void,
}

export const NameInput = (props: NameInputProps) => {

    const handleValidation = () => {
        props.onError(!props.value);
    }

    const handleChange = (newValue: string) => {
        props.onError(false);
        props.onChange(newValue);
    }

    return (
        <FormInput
            type="text"
            placeholder={props.name}
            value={props.value}
            error={props.error}
            errorMessage={`${props.name} cannot be empty`}
            onChange={handleChange}
            onBlur={handleValidation}
        />
    )
}
