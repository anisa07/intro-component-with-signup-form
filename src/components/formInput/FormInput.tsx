import {FormInputContainer, StyledInput, StyledWarningIcon, StyledWarning} from "./formInputStyles";
import WarningIcon from "../../images/icon-error.svg"
import {ChangeEvent} from "react";

export interface FormInputProps {
    placeholder: string,
    type: string,
    error: boolean,
    errorMessage: string,
    value: string,
    onChange: (v: string) => void,
    onBlur?: () => void
}

export interface StyledInputProps {
    placeholder: string,
    type: string,
    error: boolean,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlur?: () => void
}

export const FormInput = (props: FormInputProps) => {
    const handleBlur = () => {
        if (props.onBlur) {
            props.onBlur();
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target?.value || '');
    }

    return <FormInputContainer>
        <StyledInput
            error={props.error}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onBlur={handleBlur}
            onChange={handleChange}
        />
        {props.error && <StyledWarningIcon src={WarningIcon} alt="warning-icon"/>}
        <StyledWarning>
            {props.error && <>{props.errorMessage}</>}
        </StyledWarning>
    </FormInputContainer>
}
