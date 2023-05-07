/** @jsxImportSource @emotion/react */
import { useState } from "react"; 
import * as styles from "./styles";

export function Button({explosionFunct, disableButtonTime}) {
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        if (disableButtonTime) {
            setDisabled(true);
            setTimeout(() => (setDisabled(false)), disableButtonTime);
        }
        
        explosionFunct();
    }

    return (
        <div>
            <button onClick={handleClick} css={styles.button} disabled={disabled}>Try It</button>
        </div>
    )
} 