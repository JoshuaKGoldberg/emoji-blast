import { CodeBlurb } from "../code-blurb/code-blurb";
import { CodeTag } from "../code-tag/code-tag";
import * as usageStyles from "../usage-container/styles";
import * as snippets from "./code-snippets";
import * as styles from "./styles";

// https://github.com/JoshuaKGoldberg/emoji-blast/issues/291

export function DocContent() {
	return (
		<div css={usageStyles.usageContainer}>
			<h1 css={usageStyles.header}>Configuration</h1>
			<div>
				<p>
					<CodeTag style={styles.code}>emojiBlast</CodeTag> and&nbsp;
					<CodeTag style={styles.code}>emojiBlasts</CodeTag> are highly
					configurable. The following configurations may be passed to both via
					configuration objects.
				</p>
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"className"}</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>{"string"}</CodeTag> or&nbsp;
					<CodeTag>{"() => string"}</CodeTag>
				</p>
				<p>
					CSS class name to add to all emoji elements. Defaults to&nbsp;
					<CodeTag>{'"emoji-styles"'}</CodeTag>.
				</p>
				<CodeBlurb codeSnippet={snippets.classNameSnippet} />
				<p>
					Whenever a new&nbsp;
					<CodeTag>{"className"}</CodeTag> is passed to&nbsp;
					<CodeTag>emojiBlast</CodeTag>, a new&nbsp;
					<CodeTag>{"<style>"}</CodeTag> element is created to add general emoji
					styles for that class.
				</p>
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"container"}</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>{"Element"}</CodeTag> or&nbsp;
					<CodeTag>{"() => Element"}</CodeTag>
				</p>
				<p>
					Element container to append elements into. Defaults to a new&nbsp;
					<CodeTag>{"<div />"}</CodeTag> inserted as a first child of&nbsp;
					<CodeTag>document.body</CodeTag>.
				</p>
				<CodeBlurb codeSnippet={snippets.containerSnippet} />
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>emojiCount</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>number</CodeTag> or&nbsp;
					<CodeTag>{"() => number"}</CodeTag>
				</p>
				<p>
					How many emojis to create per blast. Defaults to random number between
					14 and 28.
				</p>
				<p>Creating 9001 emoji per blast:</p>
				<CodeBlurb codeSnippet={snippets.emojiCountSnippet1} />
				<p>Creating a random number between 100 and 200 per blast:</p>
				<CodeBlurb codeSnippet={snippets.emojiCountSnippet2} />
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"emojis"}</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>{"string[]"}</CodeTag> or&nbsp;
					<CodeTag>{"() => string[]"}</CodeTag>
				</p>
				<p>
					List of allowed emojis to randomly choose from for each explosion.
				</p>
				<p>Always choosing the 💖 emoji:</p>
				<CodeBlurb codeSnippet={snippets.emojisSnippet1} />
				<p>
					Allowing any of several wonderful heart emojis for each emoji within a
					blast:
				</p>
				<CodeBlurb codeSnippet={snippets.emojisSnippet2} />
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"physics"}</CodeTag>
				</h3>
				<p>
					Runtime change constants for emoji element movements. These default to
					a sane set of ranges for random numbers that give the appearance of
					fireworks-like blasts.
				</p>
				<p>
					These values must be passed in as&nbsp;
					<CodeTag>number</CodeTag>s, with defaults as (<CodeTag>value</CodeTag>
					) here:
				</p>
				<ul>
					<li>
						<CodeTag>{"framerate"}</CodeTag> (<CodeTag>{"60"}</CodeTag>
						): Expected frames per second to adjust position and velocity
						changes by.
					</li>
					<li>
						<CodeTag>{"gravity"}</CodeTag> (<CodeTag>{"0.35"}</CodeTag>
						): How much to increase y-velocity downward each tick.
					</li>
					<li>
						<CodeTag>{"rotationDeceleration"}</CodeTag> (
						<CodeTag>{"0.98"}</CodeTag>
						): How much to decrease rotation amount each tick.
					</li>
				</ul>
				<p>
					These values may be randomized, so you can provide them as a
					const&nbsp;
					<CodeTag>{"number"}</CodeTag> or&nbsp;
					<CodeTag>{"{ max: number, min: number }"}</CodeTag> for a random
					integer within, inclusive. Defaults are (
					<CodeTag>{"[min, max]"}</CodeTag>) here:
				</p>
				<ul>
					<li>
						<CodeTag>{"fontSize"}</CodeTag> (<CodeTag>{"[14, 28]"}</CodeTag>
						): Individual emojis&#039; font size range.
					</li>
					<li>
						<CodeTag>{"initialVelocities"}</CodeTag>
						<ul>
							<li>
								<CodeTag>{"rotation"}</CodeTag> (<CodeTag>{"[-7, 7]"}</CodeTag>
								): Range of initial rotation amount.
							</li>
							<li>
								<CodeTag>{"x"}</CodeTag> (<CodeTag>{"[-7, 7]"}</CodeTag>
								): Range of initial horizontal velocity.
							</li>
							<li>
								<CodeTag>{"y"}</CodeTag> (<CodeTag>{"[-14, -11.7]"}</CodeTag>
								): Range of initial vertical velocity.
							</li>
						</ul>
					</li>
					<li>
						<CodeTag>{"rotation"}</CodeTag> (<CodeTag>{"[-45, 45]"}</CodeTag>
						): Individual emojis&#039; initial rotation range.
					</li>
				</ul>
				<p>These values are optional:</p>
				<ul>
					<li>
						<CodeTag>{"preserveOutOfBounds"}</CodeTag>: Whether to skip removing
						emojis that move outside of the visible screen.
					</li>
					<li>
						<CodeTag>{"opacityDelay"}</CodeTag>: How much to slow down the (time
						elapsed / framerate) opacity reduction each tick
						(recommendation:&nbsp;
						<CodeTag>{"100"}</CodeTag> to fade out over a few seconds).
					</li>
				</ul>
				<p>Causing emojis to spin wildly out of control:</p>
				<CodeBlurb codeSnippet={snippets.physicsSnippet1} />
				<p>Inverting gravity:</p>
				<CodeBlurb codeSnippet={snippets.physicsSnippet2} />
				<p>
					Alternately, the&nbsp;
					<CodeTag>{"defaultPhysics"}</CodeTag> object is exported, so you can
					base your physics constants off it:
				</p>
				<CodeBlurb codeSnippet={snippets.physicsSnippet3} />
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"position"}</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>{"{ x: number, y: number }"}</CodeTag> or&nbsp;
					<CodeTag>{"() => { x: number, y: number }"}</CodeTag>
				</p>
				<p>
					How to determine where to place blasts of emojis around the page.
					These are absolutely positioned midpoints to center the blasts around.
					They&#039re used directly as&nbsp;
					<CodeTag>{"left"}</CodeTag> and&nbsp;
					<CodeTag>{"top"}</CodeTag> CSS properties. You can provide a static
					object or a function to create one.
				</p>
				<p>
					The default&nbsp;
					<CodeTag>{"position"}</CodeTag> chooses integers within the page:
				</p>
				<CodeBlurb codeSnippet={snippets.positionSnippet1} />
				<p>Always exploding from a fixed position:</p>
				<CodeBlurb codeSnippet={snippets.positionSnippet2} />
				<p>Exploding emoji around your favorite element on the page:</p>
				<CodeBlurb codeSnippet={snippets.positionSnippet3} />
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"process"}</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>{"(element: Element) => void"}</CodeTag>
				</p>
				<p>
					Processes each element just before it&#039;s appended to the
					container. Useful if you&#039;d like to apply custom attributes, class
					names, or styles to your elements.
				</p>
				<p>
					Adding an&nbsp;
					<CodeTag>{".emoji"}</CodeTag> class to each element:
				</p>
				<CodeBlurb codeSnippet={snippets.processSnippet} />
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"tagName"}</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>{"string"}</CodeTag> or&nbsp;
					<CodeTag>{"() => string"}</CodeTag>
				</p>
				<p>
					DOM element tag name to create elements as. Defaults to&nbsp;
					<CodeTag>{'"span"'}</CodeTag>.
				</p>
				<p>
					Creating&nbsp;
					<CodeTag>{"<div>"}</CodeTag>s instead:
				</p>
				<CodeBlurb codeSnippet={snippets.tagNameSnippet} />
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"uniqueness"}</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>{"number"}</CodeTag> or&nbsp;
					<CodeTag>{"() => number"}</CodeTag>
				</p>
				<p>
					How many different types of emojis are allowed within a blast. Each
					blast will evaluate this to a number, U, and choose the first U emojis
					from a shuffled variant of the&nbsp;
					<CodeTag>{"emojis"}</CodeTag> list. If&nbsp;
					<CodeTag>{"U > emojis.length"}</CodeTag>, it will be ignored.
				</p>
				<p>
					<CodeTag>{"uniqueness"}</CodeTag> defaults to&nbsp;
					<CodeTag>{"Infinity"}</CodeTag>.
				</p>
				<p>Allowing only one emoji type per blast:</p>
				<CodeBlurb codeSnippet={snippets.uniquenessSnippet1} />
				<p>Allowing one more emoji type per blast each blast:</p>
				<CodeBlurb codeSnippet={snippets.uniquenessSnippet2} />
			</div>
			<h2 css={styles.title}>
				<code>emojiBlasts</code>
			</h2>
			<div css={usageStyles.blurbContainer}>
				<p>
					<CodeTag>emojiBlasts</CodeTag> can take in all of the same settings
					as&nbsp;
					<CodeTag>emojiBlast</CodeTag>. It returns an object with a&nbsp;
					<CodeTag>{"cancel"}</CodeTag> function that can cancel any pending
					work:
				</p>
				<CodeBlurb codeSnippet={snippets.emojiBlastsSnippet} />
				<p>
					Additionally, the following configurations are exclusively for&nbsp;
					<CodeTag>emojiBlasts</CodeTag>:
				</p>
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"interval"}</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>{"number"}</CodeTag> or&nbsp;
					<CodeTag>{"() => number"}</CodeTag>
				</p>
				<p>
					How frequently to create explosions. Passed to&nbsp;
					<CodeTag>{"scheduler"}</CodeTag> as the delay (typically in
					milliseconds) before each explosion.
				</p>
				<p>
					Pass a&nbsp;
					<CodeTag>{"number"}</CodeTag> to always delay that much. Pass a
					function for it to be called immediately for the delay before the
					first explosion, then again as each explosion is started to schedule
					the next explosion.
				</p>
				<p>
					The default&nbsp;
					<CodeTag>{"interval"}</CodeTag> is a function that returns&nbsp;
					<CodeTag>{"0"}</CodeTag> the first time for an immediate explosion,
					then a random number in [700, 2100] subsequent times.
				</p>
				<p>
					As quickly as&nbsp;
					<CodeTag>{"setInterval"}</CodeTag> can fire (this will probably crash
					your browser!):
				</p>
				<CodeBlurb codeSnippet={snippets.intervalSnippet1} />
				<p>Once a second:</p>
				<CodeBlurb codeSnippet={snippets.intervalSnippet2} />
				<p>
					0ms delay the first explosion, then 1000ms delay each subsequent
					explosion:
				</p>
				<CodeBlurb codeSnippet={snippets.intervalSnippet3} />
			</div>
			<div css={usageStyles.blurbContainer}>
				<h3 css={styles.attributeTitle}>
					<CodeTag>{"scheduler"}</CodeTag>
				</h3>
				<p>
					Type:&nbsp;
					<CodeTag>{"(action: () => void, delay: number) => number"}</CodeTag>
				</p>
				<p>
					Schedules the next explosion to occur. This defaults to&nbsp;
					<CodeTag>{"setTimeout"}</CodeTag>, which is why&nbsp;
					<CodeTag>{"interval"}</CodeTag> is typically treated as milliseconds.
				</p>
				<CodeBlurb codeSnippet={snippets.schedulerSnippet} />
			</div>
		</div>
	);
}
