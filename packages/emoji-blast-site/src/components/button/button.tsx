/** @jsxImportSource @emotion/react */

import { useState } from "react"; 

import * as styles from "./styles";

type ButtonProps = {
    explosionFunct: () => void,
    disableButtonTime?: number
};

export function Button({explosionFunct, disableButtonTime}: ButtonProps) {
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleClick = () => {
        if (disableButtonTime) {
            setDisabled(true);
            setTimeout(() => (setDisabled(false)), disableButtonTime);
        }
        
        explosionFunct();
    };

    return (
        <div>
            <button onClick={handleClick} css={styles.button} disabled={disabled}>Try It</button>
        </div>
    );
}; 