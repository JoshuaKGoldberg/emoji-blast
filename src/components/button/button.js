/** @jsxImportSource @emotion/react */

import * as styles from "./styles";

export function Button({handleClick}) {
    return (
        <div>
            <button onClick={handleClick} css={styles.button}>Try It</button>
        </div>
    )
} 