/** @jsxImportSource @emotion/react */

import { CodeBlurb } from "../code-blurb/code-blurb";

import * as usageStyles from "../usage-container/styles";
import * as styles from "./styles";

// TODO: create a component for code tag so that the styles are automatically applied

export function DocContent() {
    const classNameSnippet = `emojisplosion({
        className: "my-emoji-styles",
    });`;
    const containerSnippet = `emojisplosion({
        container: document.getElementById("fun"),
    });`;
    const emojiCountSnippet1 = `emojisplosion({
        emojiCount: 9001,
    });`;
    const emojiCountSnippet2 = `emojisplosion({
        emojiCount: () => Math.random() * 100 + 100,
    });`;
    const emojisSnippet1 = `emojisplosion({
        emojis: ["💖"],
    })`;
    const emojisSnippet2 = `emojisplosion({
        emojis: ["💖", "💕", "💗", "💓", "💝"],
    });`;
    const physicsSnippet1 = `emojisplosion({
        physics: {
            initialVelocities: {
                rotation: {
                    max: 14,
                    min: -14,
                },
            },
            rotationDeceleration: 1.01,
        },
    });`;
    const physicsSnippet2 = `emojisplosion({
        physics: {
            gravity: -0.35,
            initialVelocities: {
                y: {
                    max: 14,
                    min: 11.7,
                },
            },
        },
    });`;
    const physicsSnippet3 = `import { emojisplosions, defaultPhysics } from "emojisplosion";

    emojisplosion({
        physics: {
            gravity: -defaultPhysics.gravity,
            initialVelocities: {
                y: {
                    max: -defaultPhysics.initialVelocities.max,
                    min: -defaultPhysics.initialVelocities.min,
                },
            },
        },
    });`;
    const positionSnippet1 = `emojisplosion({
        position: () => ({
            x: Math.random() * innerWidth,
            y: Math.random() * innerHeight,
        }),
    });`;
    const positionSnippet2 = `emojisplosion({
        position: {
            x: 35,
            y: 35,
        },
    });`;
    const positionSnippet3 = `const element = document.querySelector("#my-face");

    emojisplosion({
        position() {
            // https://stackoverflow.com/questions/1480133
            const offset = cumulativeOffset(element);
    
            return {
                x: offset.left + element.clientWidth / 2,
                y: offset.top + element.clientHeight / 2,
            };
        },
    });`;
    const processSnippet = `emojisplosion({
        process(element) {
            element.className = "emoji";
        },
    });`;
    const tagNameSnippet = `emojisplosion({
        tagName: "div",
    });`;
    const uniquenessSnippet1 = `emojisplosion({
        uniqueness: 1,
    });`;
    const uniquenessSnippet2 = `let count = 0;

    emojisplosion({
        uniqueness() {
            count += 1;
            return count;
        },
    });`;
    const emojisplosionsSnippet = `// Commence explosions!...
    const { cancel } = emojisplosions();
    
    // ...but stop after ten seconds.
    setTimeout(cancel, 10000);`;
    const intervalSnippet1 = `emojisplosions({
        interval: 0,
    });`;
    const intervalSnippet2 = `emojisplosions({
        interval: 1000,
    });`;
    const intervalSnippet3 = `let scheduled = false;

    emojisplosions({
        interval() {
            if (!scheduled) {
                scheduled = true;
                return 0;
            }
    
            return 1000;
        },
    });`;
    const schedulerSnippet = `emojisplosions({
        scheduler(action, delay) {
            console.log(\`Will emoji in \${delay} ms!\`);
            action();
        },
    });`;


    return (
        <div>
            <h1 css={usageStyles.header}>Configuration</h1>
            <div css={usageStyles.blurbConatiner}>
                <p>
                    <code css={usageStyles.code}>{"emojisplosion"}</code> and 
                    <code css={usageStyles.code}>{"emojisplosions"}</code> are highly configurable. The following may be passed to both via configuration objects.
                </p>
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"className"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"string"}</code> or&nbsp;
                    <code css={usageStyles.code}>{"() => string"}</code>
                </p>
                <p>CSS class name to add to all emoji elements. Defaults to&nbsp;
                    <code css={usageStyles.code}>{'"emoji-styles"'}</code>.
                </p>
                <CodeBlurb codeSnippet={classNameSnippet} />
                <p>Whenever a new&nbsp;
                    <code css={usageStyles.code}>{"className"}</code> is passed to&nbsp;
                    <code css={usageStyles.code}>{"emojisplosion"}</code>, a new&nbsp; 
                    <code css={usageStyles.code}>{"<style>"}</code> element is created to add general emoji styles for that class.</p>
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"container"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"Element"}</code> or&nbsp;
                    <code css={usageStyles.code}>{"() => Element"}</code>
                </p>
                <p>Element container to append elements into. Defaults to a new&nbsp; 
                    <code css={usageStyles.code}>{"<div />"}</code> inserted as a first child of&nbsp; 
                    <code css={usageStyles.code}>{"document.body"}</code>.
                </p>
                <CodeBlurb codeSnippet={containerSnippet} />
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"emojicount"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"number"}</code> or&nbsp;
                    <code css={usageStyles.code}>{"() => number"}</code>
                </p>
                <p>How many emojis to create per blast. Defaults to random number between 14 and 28.</p>
                <p>Creating 9001 emoji per blast:</p>
                <CodeBlurb codeSnippet={emojiCountSnippet1} />
                <p>Creating a random number between 100 and 200 per blast:</p>
                <CodeBlurb codeSnippet={emojiCountSnippet2} />
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"emojis"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"string[]"}</code> or&nbsp;
                    <code css={usageStyles.code}>{"() => string[]"}</code>
                </p>
                <p>List of allowed emojis to randomly choose from for each explosion.</p>
                <p>Always choosing the 💖 emoji:</p>
                <CodeBlurb codeSnippet={emojisSnippet1} />
                <p>Allowing any of several wonderful heart emojis for each emoji within a blast:</p>
                <CodeBlurb codeSnippet={emojisSnippet2} />
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"physics"}</code></h3>
                <p>Runtime change constants for emoji element movements. These default to a sane set of ranges for random numbers that give the appearance of fireworks-like blasts.</p>
                <p>These values must be passed in as&nbsp; 
                    <code css={usageStyles.code}>number</code>s, with defaults as (
                    <code css={usageStyles.code}>value</code>) here:
                </p>
                <ul>
                    <li>
                        <code css={usageStyles.code}>{"framerate"}</code> (
                        <code css={usageStyles.code}>{"60"}</code>
                        ): Expected frames per second to adjust position and velocity changes by.
                    </li>
                    <li>
                        <code css={usageStyles.code}>{"gravity"}</code> (
                        <code css={usageStyles.code}>{"0.35"}</code>
                        ): How much to increase y-velocity downward each tick.
                    </li>
                    <li>
                        <code css={usageStyles.code}>{"rotationDeceleration"}</code> (
                        <code css={usageStyles.code}>{"0.98"}</code>
                        ): How much to decrease rotation amount each tick.
                    </li>
                </ul>
                <p>These values may be randomized, so you can provide them as a const&nbsp;  
                    <code css={usageStyles.code}>{"number"}</code> or&nbsp; 
                    <code css={usageStyles.code}>{"{ max: number, min: number }"}</code> for a random integer within, inclusive. Defaults are (
                    <code css={usageStyles.code}>{"[min, max]"}</code>) here:
                </p>
                <ul>
                    <li>
                        <code css={usageStyles.code}>{"fontSize"}</code> (
                        <code css={usageStyles.code}>{"[14, 28]"}</code>
                        ): Individual emojis&#039; font size range.
                    </li>
                    <li>
                        <code css={usageStyles.code}>{"initialVelocities"}</code> 
                        <ul>
                            <li>
                                <code css={usageStyles.code}>{"rotation"}</code> (
                                <code css={usageStyles.code}>{"[-7, 7]"}</code>
                                ): Range of initial rotation amount.
                            </li>
                            <li>
                                <code css={usageStyles.code}>{"x"}</code> (
                                <code css={usageStyles.code}>{"[-7, 7]"}</code>
                                ): Range of initial horizontal velocity.
                            </li>
                            <li>
                                <code css={usageStyles.code}>{"y"}</code> (
                                <code css={usageStyles.code}>{"[-14, -11.7]"}</code>
                                ): Range of initial vertical velocity.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <code css={usageStyles.code}>{"rotation"}</code> (
                        <code css={usageStyles.code}>{"[-45, 45]"}</code>
                        ): Individual emojis&#039; initial rotation range.
                    </li>
                </ul>
                <p>These values are optional:</p>
                <ul>
                    <li>
                        <code css={usageStyles.code}>{"preserveOutOfBounds"}</code>: Whether to skip removing emojis that move outside of the visible screen.
                    </li>
                    <li>
                        <code css={usageStyles.code}>{"opacityDelay"}</code>: How much to slow down the (time elapsed / framerate) opacity reduction each tick (recommendation:&nbsp; 
                        <code css={usageStyles.code}>{"100"}</code> to fade out over a few seconds).
                    </li>
                </ul>
                <p>Causing emojis to spin wildly out of control:</p>
                <CodeBlurb codeSnippet={physicsSnippet1} />
                <p>Inverting gravity:</p>
                <CodeBlurb codeSnippet={physicsSnippet2} />
                <p>Alternately, the&nbsp;  
                    <code css={usageStyles.code}>{"defaultPhysics"}</code> object is exported, so you can base your physics constants off it:
                </p>
                <CodeBlurb codeSnippet={physicsSnippet3} />
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"position"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"{ x: number, y: number }"}</code> or&nbsp;
                    <code css={usageStyles.code}>{"() => { x: number, y: number }"}</code>
                </p>
                <p>How to determine where to place blasts of emojis around the page. These are absolutely positioned midpoints to center the blasts around. They&#039re used directly as&nbsp;
                    <code css={usageStyles.code}>{"left"}</code> and&nbsp;
                    <code css={usageStyles.code}>{"top"}</code> CSS properties. You can provide a static object or a function to create one.
                </p>
                <p>The default&nbsp;
                    <code css={styles.attributeTitle}>{"position"}</code> chooses integers within the page:
                </p>
                <CodeBlurb codeSnippet={positionSnippet1} />
                <p>Always exploding from a fixed position:</p>
                <CodeBlurb codeSnippet={positionSnippet2} />
                <p>Exploding emoji around your favorite element on the page:</p>
                <CodeBlurb codeSnippet={positionSnippet3} />
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"process"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"(element: Element) => void"}</code>
                </p>
                <p>Processes each element just before it&#039;s appended to the container. Useful if you&#039;d like to apply custom attributes, class names, or styles to your elements.</p>
                <p>Adding an&nbsp; 
                    <code css={usageStyles.code}>{".emoji"}</code> class to each element:
                </p>
                <CodeBlurb codeSnippet={processSnippet} />
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"tagName"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"string"}</code> or&nbsp;
                    <code css={usageStyles.code}>{"() => string"}</code>
                </p>
                <p>DOM element tag name to create elements as. Defaults to&nbsp; 
                    <code css={usageStyles.code}>{'"span"'}</code>.
                </p>
                <p>Creating&nbsp;
                    <code css={usageStyles.code}>{"<div>"}</code>s instead:
                </p>
                <CodeBlurb codeSnippet={tagNameSnippet} />
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"uniqueness"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"number"}</code> or&nbsp;
                    <code css={usageStyles.code}>{"() => number"}</code>
                </p>
                <p>How many different types of emojis are allowed within a blast. Each blast will evaluate this to a number, U, and choose the first U emojis from a shuffled variant of the&nbsp;
                    <code css={usageStyles.code}>{"emojis"}</code> list. If&nbsp;
                    <code css={usageStyles.code}>{"U > emojis.length"}</code>, it will be ignored.
                </p>
                <p>
                    <code css={usageStyles.code}>{"uniqueness"}</code> defaults to&nbsp;
                    <code css={usageStyles.code}>{"Infinity"}</code>.
                </p>
                <p>Allowing only one emoji type per blast:</p>
                <CodeBlurb codeSnippet={uniquenessSnippet1} />
                <p>Allowing one more emoji type per blast each blast:</p>
                <CodeBlurb codeSnippet={uniquenessSnippet2} />
            </div>
            <h2 css={usageStyles.title}><code>{"emojisplosions"}</code></h2>
            <div css={usageStyles.blurbConatiner}>
                <p>
                    <code css={usageStyles.code}>{"emojisplosions"}</code> can take in all of the same settings as&nbsp;
                    <code css={usageStyles.code}>{"emojisplosion"}</code>. It returns an object with a&nbsp;
                    <code css={usageStyles.code}>{"cancel"}</code> function that can cancel any pending work:
                </p>
                <p>Additionally, the following configurations are exclusively for&nbsp;
                    <code css={usageStyles.code}>{"emojisplosions"}</code>:
                </p>
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"interval"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"number"}</code> or&nbsp;
                    <code css={usageStyles.code}>{"() => number"}</code>
                </p>
                <p>How frequently to create explosions. Passed to&nbsp; 
                    <code css={usageStyles.code}>{"scheduler"}</code> as the delay (typically in milliseconds) before each explosion.
                </p>
                <p>Pass a&nbsp; 
                    <code css={usageStyles.code}>{"number"}</code> to always delay that much. Pass a function for it to be called immediately for the delay before the first explosion, then again as each explosion is started to schedule the next explosion.
                </p>
                <p>The default&nbsp; 
                    <code css={usageStyles.code}>{"interval"}</code> is a function that returns&nbsp;
                    <code css={usageStyles.code}>{"0"}</code> the first time for an immediate explosion, then a random number in [700, 2100] subsequent times.
                </p>
                <p>As quickly as&nbsp;
                    <code css={usageStyles.code}>{"setInterval"}</code> can fire (this will probably crash your browser!):
                </p>
                <CodeBlurb codeSnippet={intervalSnippet1} />
                <p>Once a second:</p>
                <CodeBlurb codeSnippet={intervalSnippet2} />
                <p>0ms delay the first explosion, then 1000ms delay each subsequent explosion:</p>
                <CodeBlurb codeSnippet={intervalSnippet3} />
            </div>
            <div css={usageStyles.blurbConatiner}>
                <h3><code css={styles.attributeTitle}>{"scheduler"}</code></h3>
                <p>Type:&nbsp;
                    <code css={usageStyles.code}>{"(action: () => void, delay: number) => number"}</code>
                </p>
                <p>Schedules the next explosion to occur. This defaults to&nbsp;
                    <code css={usageStyles.code}>{"setTimeout"}</code>, which is why&nbsp;
                    <code css={usageStyles.code}>{"interval"}</code> is typically treated as milliseconds.
                </p>
                <CodeBlurb codeSnippet={schedulerSnippet} />
            </div>
        </div>
    );
};