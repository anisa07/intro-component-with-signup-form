import {StyledAuthForm, StyledTACLink, StyledTACText} from "./authStyles"
import {AuthButton} from "../authButton/AuthButton";
import {Dispatch, SetStateAction, SyntheticEvent, useState} from "react";
import {FormInput} from "../../formInput/FormInput";
import {emailRegex} from "../../../helpers/formHelper";

interface ValidationResult {
    error: boolean,
    errorMessage: string,
}

type FormValidationFunction = (fieldName: string, value: string) => ValidationResult;

interface FormDataElement {
    value: string,
    error: boolean,
    errorMessage: string,
    validation: Array<FormValidationFunction>
}

export const AuthForm =() => {
    const toProperCase = (str: string) => {
        return str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();
    }
    const ensureNotEmpty = (fieldName: string, value: string) => {
        if (value.length === 0) {
            return {
                error: true,
                errorMessage: `${toProperCase(fieldName)} is required.`,
            }
        }

        return {
            error: false,
            errorMessage: '',
        }
    };
    const ensureEmailFormat = (fieldName: string, value: string) => {
        const isEmailFormat = value.toLowerCase().match(emailRegex);
        if (!isEmailFormat) {
            return {
                error: true,
                errorMessage: `${toProperCase(fieldName)} does not look like an email.`,
            }
        }

        return {
            error: false,
            errorMessage: '',
        }
    };

    const [firstName, setFirstName] = useState<FormDataElement>({
        value: '',
        error: false,
        errorMessage: '',
        validation: [ensureNotEmpty],
    });
    const [lastName, setLastName] = useState<FormDataElement>({
        value: '',
        error: false,
        errorMessage: '',
        validation: [ensureNotEmpty],
    });
    const [email, setEmail] = useState<FormDataElement>({
        value: '',
        error: false,
        errorMessage: '',
        validation: [ensureNotEmpty, ensureEmailFormat],
    });
    const [password, setPassword] = useState<FormDataElement>({
        value: '',
        error: false,
        errorMessage: '',
        validation: [ensureNotEmpty],
    });

    const handleOnChange = (item: FormDataElement, setter: Dispatch<SetStateAction<FormDataElement>>) => (value: string) => {
        setter({
            ...item,
            value,
        });
    }

    const validateField = (fieldName: string, field: FormDataElement) => {
        const validations = field.validation;
        let validationResult = {
            error: false,
            errorMessage: '',
        };
        for (const validation of validations) {
            validationResult = validation(fieldName, field.value);

            if (validationResult.error) {
                break;
            }
        }
        return validationResult;
    }

    const handleValidation = (fieldName: string, setter: Dispatch<SetStateAction<FormDataElement>>) => () => {
        setter((field: FormDataElement) => {
            const validationResult = validateField(fieldName, field);
            return {
                ...field,
                error: validationResult.error,
                errorMessage: validationResult.errorMessage,
            };
        })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        handleValidation('firstName', setFirstName)();
        handleValidation('lastName', setLastName)();
        handleValidation('email', setEmail)();
        handleValidation('password', setPassword)();
    }

    return (
        <StyledAuthForm onSubmit={handleSubmit}>
            <FormInput
                type="text"
                placeholder={"First Name"}
                value={firstName.value}
                error={firstName.error}
                errorMessage={firstName.errorMessage}
                onChange={handleOnChange(firstName, setFirstName)}
                onBlur={handleValidation('firstName', setFirstName)}
            />
            <FormInput
                type="text"
                placeholder={"Last Name"}
                value={lastName.value}
                error={lastName.error}
                errorMessage={lastName.errorMessage}
                onChange={handleOnChange(lastName, setLastName)}
                onBlur={handleValidation('lastName', setLastName)}
            />
            <FormInput
                type="email"
                placeholder={"Email"}
                value={email.value}
                error={email.error}
                errorMessage={email.errorMessage}
                onChange={handleOnChange(email, setEmail)}
                onBlur={handleValidation('email', setEmail)}
            />
            <FormInput
                type="password"
                placeholder={"Password"}
                value={password.value}
                error={password.error}
                errorMessage={password.errorMessage}
                onChange={handleOnChange(password, setPassword)}
                onBlur={handleValidation('password', setPassword)}
            />
            <AuthButton />
            <StyledTACText>
                By clicking the button, you are agreeing to our
                <StyledTACLink> Terms and Services</StyledTACLink>
            </StyledTACText>
        </StyledAuthForm>
    )
}
