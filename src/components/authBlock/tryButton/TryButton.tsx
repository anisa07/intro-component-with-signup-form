import {BoldText, TryButtonStyled} from "./tryButtonStyle";

interface TryButtonProps {
    onTry: () => void
}

export const TryButton = (props: TryButtonProps) => {
    const handleTryClick = () => {
        props.onTry();
    }

    return (
        <TryButtonStyled onClick={handleTryClick}>
            <BoldText>Try it free 7 days </BoldText>
            <span>then $20/mo. thereafter</span>
        </TryButtonStyled>
    )
}
