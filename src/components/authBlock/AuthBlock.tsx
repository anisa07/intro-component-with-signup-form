import {AuthBlockContainer} from "./authBlockStyles";
import {TryButton} from "./tryButton/TryButton";
import {AuthForm} from "./authForm/AuthForm";

export const AuthBlock  = () => {
    const handleTryClick = () => {}

    return <AuthBlockContainer>
        <TryButton onTry={handleTryClick} />
        <AuthForm />
    </AuthBlockContainer>
}
