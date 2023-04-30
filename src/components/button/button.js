import React from "react";

import * as styles from "./styles";

export function Button({handleClick}) {
    return (
        <div>
            <button onClick={handleClick} style={styles.button}>Try It</button>
        </div>
    )
} 