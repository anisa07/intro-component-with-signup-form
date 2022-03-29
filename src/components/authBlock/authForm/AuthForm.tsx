import {StyledAuthForm, StyledTACLink, StyledTACText} from "./authStyles"
import {AuthButton} from "../authButton/AuthButton";
import {SyntheticEvent, useEffect, useState} from "react";
import {FormInput} from "../../formInput/FormInput";
import {emailRegex} from "../../../helpers/formHelper";

interface ValidationResult {
    error: boolean,
    errorMessage: string,
}

type FormValidationFunction = (fieldName: keyof FormData) => (value: string) => ValidationResult;

interface FormDataElement {
    value: string,
    error: boolean,
    errorMessage: string,
    validation: Array<FormValidationFunction>
}

interface FormData {
    firstName: FormDataElement,
    lastName: FormDataElement,
    email: FormDataElement,
    password: FormDataElement,
}

export const AuthForm =() => {
    const toProperCase = (str: string) => {
        return str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();
      }
    const ensureNotEmpty = (fieldName: keyof FormData) => (value: string) => {
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
    const ensureEmailFormat = (fieldName: keyof FormData) => (value: string) => {
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

    const [formData, setFormData] = useState<FormData>({
        firstName: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty],
        },
        lastName: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty],
        },
        email: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty, ensureEmailFormat],
        },
        password: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty],
        },
    })

    const handleOnChange = (fieldName: keyof FormData) => (value: string) => {
        setFormData({
            ...formData,
            [fieldName]: {
                ...formData[fieldName],
                value,
            }
        })
    }
    const validateField = (fieldName: keyof FormData) => {
        const currentFormData = formData[fieldName];
        const validations = formData[fieldName].validation;
        let validationResult = {
            error: false,
            errorMessage: '',
        };
        for (const validation of validations) {
            validationResult = validation(fieldName)(currentFormData.value);

            if (validationResult.error) {
                break;
            }
        }
        return validationResult;
    }

    const handleValidation = (fieldName: keyof FormData) => () => {
        const validationResult = validateField(fieldName);
        setFormData({
            ...formData,
            [fieldName]: {
                ...formData[fieldName],
                error: validationResult.error,
                errorMessage: validationResult.errorMessage,
            }
        });
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const newState = Object.entries(formData).reduce((accu, [fieldName, value]) => {
            const validationResult = validateField(fieldName as keyof FormData);

            return {
                ...accu,
                [fieldName]: {
                    ...value,
                    error: validationResult.error,
                    errorMessage: validationResult.errorMessage,
                }
            }
        }, formData);
        setFormData(newState);
    }

    return (
        <StyledAuthForm onSubmit={handleSubmit}>
            <FormInput
                type="text"
                placeholder={"First Name"}
                value={formData.firstName.value}
                error={formData.firstName.error}
                errorMessage={formData.firstName.errorMessage}
                onChange={handleOnChange('firstName')}
                onBlur={handleValidation('firstName')}
            />
            <FormInput
                type="text"
                placeholder={"Last Name"}
                value={formData.lastName.value}
                error={formData.lastName.error}
                errorMessage={formData.lastName.errorMessage}
                onChange={handleOnChange('lastName')}
                onBlur={handleValidation('lastName')}
            />
            <FormInput
                type="email"
                placeholder={"Email"}
                value={formData.email.value}
                error={formData.email.error}
                errorMessage={formData.email.errorMessage}
                onChange={handleOnChange('email')}
                onBlur={handleValidation('email')}
            />
            <FormInput
                type="password"
                placeholder={"Password"}
                value={formData.password.value}
                error={formData.password.error}
                errorMessage={formData.password.errorMessage}
                onChange={handleOnChange('password')}
                onBlur={handleValidation('password')}
            />
            <AuthButton />
            <StyledTACText>
                By clicking the button, you are agreeing to our
                <StyledTACLink> Terms and Services</StyledTACLink>
            </StyledTACText>
        </StyledAuthForm>
    )
}
