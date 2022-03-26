import {StyledAuthForm, StyledTACLink, StyledTACText} from "./authStyles"
import {AuthButton} from "../authButton/AuthButton";
import {SyntheticEvent, useState} from "react";
import {FormInput} from "../../formInput/FormInput";
import {emailRegex} from "../../../helpers/formHelper";

export const AuthForm =() => {
    const handleFormInputValidation = ((fi: any) => {
        let error = fi.value.length === 0;
        let errorMessage = error ? `${fi.placeholder} cannot be blank` : "";
        if (!error && fi.type === 'email') {
            error = !fi.value.toLowerCase().match(emailRegex);
            errorMessage = error ? `${fi.placeholder} is not a valid email` : "";
        }
        return {
            ...fi,
            error,
            errorMessage,
        }
    })
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const updatedFormInputs = formInputs.map(fi => {
            return handleFormInputValidation(fi);
        })
        setFormInputs(updatedFormInputs)
    }

    const [formInputs, setFormInputs] = useState([
        {
            type:"text",
            placeholder:"First Name",
            error: false,
            errorMessage: "",
            value: '',
        },
        {
            type:"text",
            placeholder:"Last Name",
            error: false,
            errorMessage: "",
            value: '',
        },
        {
            type:"email",
            placeholder:"Email Address",
            value: '',
            error: false,
            errorMessage: "",
        },
        {
            type:"password",
            placeholder:"Password",
            value: '',
            error: false,
            errorMessage: "",
        },
        {
            type:"password",
            placeholder:"Confirm Password",
            value: '',
            error: false,
            errorMessage: "",
        },
    ]);

    return (
        <StyledAuthForm onSubmit={handleSubmit}>
            {formInputs.map(formInput => (
                <FormInput {...formInput}

                    onChange={(value) => {
                        const updatedFormInputs = formInputs.map(fi => {
                            if (fi.placeholder === formInput.placeholder) {
                                return {
                                    ...fi,
                                    value,
                                }
                            }
                            return fi;
                        })
                        setFormInputs(updatedFormInputs)
                    }}

                    onBlur={() => {
                        const updatedFormInputs = formInputs.map(fi => {
                            if (fi.placeholder === formInput.placeholder) {
                                return handleFormInputValidation(fi);
                            }
                            return fi;
                        })
                        setFormInputs(updatedFormInputs)
                    }}
                />
            ))}
            <AuthButton />
            <StyledTACText>
                By clicking the button, you are agreeing to our
                <StyledTACLink> Terms and Services</StyledTACLink>
            </StyledTACText>
        </StyledAuthForm>
    )
}
