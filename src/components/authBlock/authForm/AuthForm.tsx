import {StyledAuthForm, StyledTACLink, StyledTACText} from "./authStyles"
import {AuthButton} from "../authButton/AuthButton";
import {NameInput} from "../../formInput/NameInput";
import {SyntheticEvent, useEffect, useState} from "react";
import {PasswordInput} from "../../formInput/PasswordInput";
import {EmailInput} from "../../formInput/EmailInput";

export const AuthForm =() => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    useEffect(() => {

    }, []);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (!firstName) {
            setFirstNameError(true);
        }
        if (!lastName) {
            setLastNameError(true);
        }
        if(!email) {
            setEmailError(true);
        }
        if(!password) {
            setPasswordError(true);
        }
    }

    return (
        <StyledAuthForm onSubmit={handleSubmit}>
            <NameInput
                name="First Name"
                error={firstNameError}
                value={firstName}
                onChange={setFirstName}
                onError={setFirstNameError}
            />
            <NameInput
                name="Last Name"
                error={lastNameError}
                value={lastName}
                onChange={setLastName}
                onError={setLastNameError}
            />
            <EmailInput
                error={emailError}
                value={email}
                onError={setEmailError}
                onChange={setEmail}
            />
            <PasswordInput
                error={passwordError}
                value={password}
                onChange={setPassword}
                onError={setPasswordError}
            />
            <AuthButton />
            <StyledTACText>
                By clicking the button, you are agreeing to our
                <StyledTACLink> Terms and Services</StyledTACLink>
            </StyledTACText>
        </StyledAuthForm>
    )
}
