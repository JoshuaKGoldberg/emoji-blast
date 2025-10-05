// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defaultEmojis, emojiBlast, emojiBlasts } from "emoji-blast";

export interface DemoData {
	blaster: () => void;
	blurb: string;
	title: string;
}

export interface DemoGroup {
	demos: DemoData[];
	name: string;
	slug: string;
}

const basic: DemoGroup = {
	demos: [
		{
			blaster: () => {
				emojiBlast({
					emojiCount: 1,
					physics: { fontSize: 150 },
				});
			},
			blurb: "A single blast of emojis.",
			title: "emojiBlast",
		},
		{
			blaster: () => {
				emojiBlast({
					physics: {
						fontSize: { max: 74, min: 64 },
					},
				});
			},
			blurb: "emojiBlast with extra large emojis.",
			title: "Large",
		},
		{
			blaster: () => {
				emojiBlast({
					emojis: ["🥶", "🧞‍♂️", "🦋", "🦕", "🐟", "🐬", "🐳", "🐋"],
				});
			},
			blurb: "emojiBlast with only one type of emoji per explosion.",
			title: "Always Blue",
		},
		{
			blaster: () => {
				emojiBlast({
					uniqueness: 1,
				});
			},
			blurb: "emojiBlast with only one type of emoji per explosion.",
			title: "Only One",
		},
		{
			blaster: () => {
				emojiBlast({
					emojiCount: () => Math.random() * 100 + 100,
				});
			},
			blurb:
				"emojiBlast with a random number of emojis per blast between 100-200.",
			title: "Lots of Emojis",
		},
		{
			blaster: () => {
				emojiBlast({
					position: {
						x: innerWidth / 2,
						y: innerHeight / 2,
					},
				});
			},
			blurb: "emojiBlast that only happens at a set position on the page",
			title: "Set Position",
		},
	],
	name: "Basic",
	slug: "basic",
};

const more: DemoGroup = {
	demos: [
		{
			blaster: () => {
				emojiBlast({
					physics: {
						gravity: -0.35,
						initialVelocities: {
							y: { max: 14, min: 11.7 },
						},
					},
				});
			},
			blurb: "emojiBlast with inverted gravity.",
			title: "Inverse Gravity",
		},
		{
			blaster: () => {
				const element = document.getElementById("title")!;

				emojiBlast({
					position() {
						return {
							x: element.offsetLeft + element.clientWidth / 2,
							y: element.offsetTop + element.clientHeight / 2,
						};
					},
				});
			},
			blurb:
				"emojiBlast that only happens on the element with an id of 'title' (which is the title of the site).",
			title: "Title Explosion",
		},
		{
			blaster: () => {
				emojiBlast({
					emojis: ["🌀"],
					physics: {
						fontSize: { max: 48, min: 20 },
						gravity: 0.1,
						initialVelocities: {
							rotation: { max: -14, min: -14 },
						},
						rotationDeceleration: 1.01,
					},
				});
			},
			blurb: "emojiBlast with very quickly spinning spiral emojis.",
			title: "Spinnin",
		},
		{
			blaster: () => {
				emojiBlast({
					emojiCount: 3,
					emojis: ["🚴‍♀️", "🚴", "🚴‍♂️"],
					physics: {
						fontSize: 68,
						gravity: 0,
						initialVelocities: {
							rotation: 0,
							x: { max: -35, min: -20 },
							y: 0,
						},
						rotation: 0,
						rotationDeceleration: 0,
					},
					position: {
						x: innerWidth,
						y: Math.floor(innerHeight / 2) + 100,
					},
				});
			},
			blurb:
				"emojiBlast with three biker emojis racing across the page. Only the x value for the initialVelocity property is set.",
			title: "Tour de France",
		},
		{
			blaster: () => {
				const { cancel } = emojiBlasts({
					interval: 40,
				});

				setTimeout(cancel, 3000);
			},
			blurb:
				"emojiBlasts occurring randomly across the page every 40 milliseconds for 3 seconds.",
			title: "Everything Everywhere All At Once",
		},
	],
	name: "More",
	slug: "more",
};

const shenanigans: DemoGroup = {
	demos: [
		{
			blaster: () => {
				const blastYPos = innerHeight - 10;

				// function for the rocket
				const rocket = () => {
					emojiBlast({
						emojiCount: 1,
						emojis: ["🚀"],
						physics: {
							fontSize: 45,
							gravity: 0,
							initialVelocities: {
								x: 12,
								y: -10,
							},
							rotation: 0,
							rotationDeceleration: 0,
						},
						position: {
							x: 150,
							y: blastYPos,
						},
					});
				};

				// function for the clouds
				const clouds = () => {
					emojiBlast({
						emojiCount: 10,
						emojis: ["☁️"],
						physics: {
							fontSize: { max: 50, min: 38 },
							gravity: 0.1,
							initialVelocities: {
								x: { max: 7, min: -7 },
								y: { max: -2, min: -5 },
							},
							rotation: 0,
							rotationDeceleration: 0,
						},
						position: {
							x: 150,
							y: blastYPos,
						},
					});
				};

				// function for the sparkles
				const sparkles = () => {
					emojiBlast({
						emojiCount: 10,
						emojis: ["✨"],
						physics: {
							fontSize: { max: 30, min: 10 },
							gravity: 0.2,
							initialVelocities: {
								x: { max: 20, min: -15 },
								y: { max: 20, min: -15 },
							},
						},
						position: {
							x: 200,
							y: blastYPos - 60,
						},
					});
				};

				rocket();
				clouds();

				// set sparkles to go off 400 milliseconds after the rocket & clouds
				setTimeout(sparkles, 400);
			},
			blurb:
				"A singular rocket shoots out from a set spot on the page at an angle, followed by a burst of clouds and sparkles. Each set of emojis uses it's own emojiBlast function. The sparkle function is set to occur 400 milliseconds after the rocket and clouds go off.",
			title: "Rocket",
		},
		{
			blaster: () => {
				// 2d array of [x, y] coordinates to form an outline of a heart
				const heartCoords = [
					[500, 600], // bottom point
					[500, 410], // center point
					// left line (y = x + 100)
					[350, 450],
					[375, 475],
					[400, 500],
					[425, 525],
					[450, 550],
					[475, 575],
					// right line (y = -x + 1100)
					[650, 450],
					[623, 477],
					[600, 500],
					[550, 550],
					[574, 526],
					[526, 574],
					// left curve
					[340, 410],
					[340, 430],
					[350, 385],
					[370, 365],
					[400, 350],
					[430, 355],
					[460, 370],
					[480, 385],
					// right curve
					[520, 385],
					[540, 370],
					[570, 355],
					[600, 350],
					[630, 365],
					[650, 385],
					[660, 410],
					[660, 430],
				];

				// created random x & y values to set an initial velocity for all of the explosions
				const randXVelocity =
					Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);
				const randYVelocity = Math.random() * -15 - 3;

				// created x & y starting coordinates to add to our heart coords to randomize where the heart occurs on the page
				const randStartXCoord =
					Math.random() * 350 * (Math.round(Math.random()) ? 1 : -1);
				const randStartYCoord =
					Math.random() * 350 * (Math.round(Math.random()) ? 1 : -1);

				// iterating through the heartCoords to set off a singular explosion for each coordinate
				for (const [xCoordinate, yCoordinate] of heartCoords) {
					emojiBlast({
						emojiCount: 1,
						emojis: ["❤️‍🔥"],
						physics: {
							fontSize: 35,
							gravity: 0.15,
							initialVelocities: {
								x: randXVelocity,
								y: randYVelocity,
							},
							rotation: 0,
							rotationDeceleration: 0,
						},
						position: {
							x: xCoordinate + randStartXCoord,
							y: yCoordinate + randStartYCoord,
						},
					});
				}
			},
			blurb:
				"An outline of a heart made up of emojis appears on the page. The heart is formed by iterating through a 2d array of x, y coordinates and creating an explosion containing a singular heart emoji using each coordinate.",
			title: "Heart on Fire",
		},
		{
			blaster: () => {
				// using a loop to set explosions to occur at steps of 25 between 0 & the page width across the x axis
				for (let i = 0; i < innerWidth; i += 25) {
					// define a random gravity for each of the raindrop explosions
					const randGravity = Math.random() * 0.3 + 0.1;

					const { cancel } = emojiBlasts({
						emojiCount: 1,
						emojis: ["💧"],
						physics: {
							fontSize: { max: 30, min: 18 },
							gravity: randGravity,
							initialVelocities: {
								rotation: 0,
								x: 0,
								y: 0,
							},
							rotation: 0,
							rotationDeceleration: 0,
						},
						position: {
							// using our step value as our starting x position
							x: i,
							y: 100,
						},
						// setting a random interval between 100 & 1000 for the explosion in each emojiBlasts to occur
						interval() {
							return Math.floor(Math.random() * 1000) + 100;
						},
					});

					// cancel the explosions after 5 seconds
					setTimeout(cancel, 5000);
				}
			},
			blurb:
				"emojiBlasts occurring from set points at the top of the page for 5 seconds emulating a rainstorm.",
			title: "Rainstorm",
		},
		{
			blaster: () => {
				// Finding midpoint of the page for our starting y value position
				const pageMidpoint = Math.floor(innerHeight / 2);

				// Function to create each heart column of the rainbow
				const rainbowCol = () => {
					const rainbows = ["❤️", "🧡", "💛", "💚", "💙", "💜"];
					let positionY = pageMidpoint;

					// Creates an explosion for each heart color in the column, increasing the y coordinate position for each blast
					for (const rainbow of rainbows) {
						emojiBlast({
							emojiCount: 1,
							emojis: [rainbow],
							physics: {
								fontSize: 35,
								gravity: 0.08,
								initialVelocities: {
									rotation: 0,
									x: 20,
									y: -20,
								},
								rotation: 0,
							},
							position: {
								x: 0,
								y: positionY,
							},
						});
						positionY += 30;
					}
				};

				// Function to create cloud columns
				const clouds = () => {
					let positionY = pageMidpoint;

					// Creates an explosion for each cloud in the column, increasing the y coordinate position for each blast
					for (let i = 0; i < 6; i++) {
						emojiBlast({
							emojiCount: 1,
							emojis: ["☁️"],
							physics: {
								fontSize: 65,
								gravity: 0.08,
								initialVelocities: {
									rotation: 0,
									x: 20,
									y: -20,
								},
								rotation: 0,
							},
							position: {
								x: 0,
								y: positionY,
							},
						});
						positionY += 30;
					}
				};

				// Create one column of clouds before the rainbow
				clouds();

				// Set off rainbow columns at intervals of 80 milliseconds for 3 seconds to create the rainbow
				const intervalId = setInterval(rainbowCol, 80);
				setTimeout(() => {
					clearInterval(intervalId);
				}, 3000);

				// Create one column of clouds after the rainbow
				setTimeout(clouds, 3000);
			},
			blurb:
				"A rainbow made up of hearts and clouds explodes as an arc across the page. The rainbow is made of columns, where each emoji within the column is a singular emojiBlast.",
			title: "Rainbow",
		},
		{
			blaster: () => {
				// const container = document.getElementById("demo-area")!;

				// function for the star
				const star = (yPos: number) => {
					emojiBlast({
						emojiCount: 1,
						emojis: ["⭐️"],
						physics: {
							fontSize: { max: 32, min: 20 },
							gravity: 0.05,
							initialVelocities: {
								x: 45,
								y: -10,
							},
						},
						position: {
							x: 0,
							y: yPos,
						},
					});
				};

				// function for the trailing sparkles
				const sparkles = (yPos: number, size: number) => {
					emojiBlast({
						emojiCount: 1,
						emojis: ["✨"],
						physics: {
							fontSize: size,
							gravity: 0.05,
							initialVelocities: {
								rotation: 0,
								x: 45,
								y: -10,
							},
						},
						position: {
							x: 0,
							y: yPos,
						},
					});
				};

				// function for a singular shooting star
				const shootingStar = () => {
					const randYPos = Math.random() * innerHeight + 100;
					let emojiSize = 18;

					star(randYPos);

					// set off sparkle explosions at intervals of 60 milliseconds for 400 milliseconds to create the sparkle trail
					const intervalId = setInterval(() => {
						sparkles(randYPos, emojiSize);

						// decreasing the size of the trailing sparkle emoji by 3 for each explosion
						emojiSize -= 3;
					}, 60);
					setTimeout(() => {
						clearInterval(intervalId);
					}, 400);
				};

				// set off a shooting star at intervals of 60 milliseconds for 2 seconds
				const intervalId = setInterval(shootingStar, 60);
				setTimeout(() => {
					clearInterval(intervalId);
				}, 2000);
			},
			blurb:
				"Stars shoot across the page with trails of sparkles. An emojiBlast is used for each individual emoji and set off in intervals.",
			title: "Shooting Stars",
		},
		{
			blaster: () => {
				// created x & y starting coordinates to randomize where the firework occurs on the page
				const randStartXCoord = Math.random() * innerWidth;
				const randStartYCoord = Math.random() * innerHeight;

				// function for the initial sparkles in the firework
				const sparkles = () => {
					// a 2d array of initial velocity [x, y] coordinates to pass into each sparkle explosion
					const velocityCoords = [
						[0, -15],
						[0, 15],
						[-15, 0],
						[15, 0],
						[10, 10],
						[-10, -10],
						[10, -10],
						[-10, 10],
					];

					// set off a sparkle explosion for each of the differing initial velocity coordinates
					for (const [xCoordinate, yCoordinate] of velocityCoords) {
						emojiBlast({
							className: "sparkles",
							emojiCount: 1,
							emojis: ["✨"],
							physics: {
								fontSize: 20,
								gravity: 0,
								initialVelocities: {
									rotation: 0,
									x: xCoordinate,
									y: yCoordinate,
								},
								rotation: 0,
								rotationDeceleration: 0,
							},
							position: {
								x: randStartXCoord,
								y: randStartYCoord,
							},
						});
					}
				};

				// function for blast parts of the firework
				const blast = () => {
					// choose a random emoji from imported defaultEmojis to set as the emoji for all blasts
					const randEmoji =
						defaultEmojis[Math.floor(Math.random() * defaultEmojis.length)];

					// a 2d array of [x, y] coordinates to add to the random starting coordinates to set the position for each blast
					const coordDiff = [
						[0, -150],
						[0, 150],
						[-150, 0],
						[150, 0],
						[106, 106],
						[-106, -106],
						[106, -106],
						[-106, 106],
					];

					// set off a blast at each coordinate calculated using the coordDiff array
					for (const [xCoordinateDiff, yCoordinateDiff] of coordDiff) {
						emojiBlast({
							emojis: [randEmoji],
							physics: {
								gravity: 0.2,
								initialVelocities: {
									rotation: 0,
									x: { max: 10, min: -10 },
									y: { max: 15, min: -15 },
								},
							},
							position: {
								x: randStartXCoord + xCoordinateDiff,
								y: randStartYCoord + yCoordinateDiff,
							},
							uniqueness: 1,
						});
					}
				};

				// remove the sparkles from the page after the blasts go off
				// https://stackoverflow.com/a/14066534
				const removeSparkles = () => {
					const elements = document.getElementsByClassName("sparkles");
					while (elements.length > 0) {
						elements[0].parentNode!.removeChild(elements[0]);
					}
				};

				sparkles();

				// remove the sparkles and set off the blasts 630 milliseconds after the sparkles go off
				setTimeout(removeSparkles, 630);
				setTimeout(blast, 630);
			},
			blurb:
				"A firework of emojiBlasts comprised of a singular random emoji is set off at a random position on the page.",
			title: "Firework",
		},
		{
			blaster: () => {
				// Finding the midpoints of the page to base the positions of the emojiBlasts around
				const midPageHeight = innerHeight / 2;
				const midPageWidth = innerWidth / 2;

				// Function for the ufo
				const ufo = (
					pos: readonly [number, number],
					vel: readonly [number, number],
					className: string,
				) => {
					emojiBlast({
						className,
						emojiCount: 1,
						emojis: ["🛸"],
						physics: {
							fontSize: 75,
							gravity: 0,
							initialVelocities: {
								rotation: 0,
								x: vel[0],
								y: vel[1],
							},
							rotation: 20,
						},
						position: {
							x: pos[0],
							y: pos[1],
						},
					});
				};

				// Function for the cow
				const cow = (velY: number, className: string) => {
					emojiBlast({
						className,
						emojiCount: 1,
						emojis: ["🐄"],
						physics: {
							fontSize: 35,
							gravity: 0,
							initialVelocities: {
								rotation: 0,
								x: 0,
								y: velY,
							},
							rotation: 0,
						},
						position: {
							x: midPageWidth - 25,
							y: midPageHeight + 100,
						},
					});
				};

				// Function for the vortex
				const vortex = () => {
					emojiBlast({
						className: "mid", // Setting the className to mid as the vortex only occurs in the "mid" stage
						emojiCount: 1,
						emojis: ["🌪️"],
						physics: {
							fontSize: 120,
							gravity: 0,
							initialVelocities: {
								rotation: 0,
								x: 0,
								y: 0,
							},
							rotation: 180,
						},
						position: {
							x: midPageWidth + 25,
							y: midPageHeight + 70,
						},
					});
				};

				// The stages of the example set as classnames to pass to the emojis
				const classNames = ["start", "mid", "end"];

				// Starting positions as [x, y] coordinates for the ufo at each stage
				const ufoPos = [
					[0, midPageHeight - 200], // Start stage
					[midPageWidth, midPageHeight], // Mid stage & end stage
				] as const;

				// Initial velocities as [x, y] for the ufo at each stage
				const ufoVel = [
					[midPageWidth / 34, 6], // Start stage
					[0, 0], // Mid stage
					[midPageWidth / 25, -6], // End stage
				] as const;

				// Initial y value velocities for the cow at each stage
				const cowYVel = [
					0, // Start stage
					-3, // Mid stage
				] as const;

				// Function to remove emojis with a specified className from the page
				// Https://stackoverflow.com/a/14066534
				const removeEmoji = (className: string) => {
					const elements = document.getElementsByClassName(className);
					while (elements.length > 0) {
						elements[0].parentNode!.removeChild(elements[0]);
					}
				};

				// Set off starting explosions for ufo and cow
				ufo(ufoPos[0], ufoVel[0], classNames[0]);
				cow(cowYVel[0], classNames[0]);

				// Set off mid explosions for ufo, cow & vortex after 2 seconds
				setTimeout(vortex, 2000);
				setTimeout(() => {
					cow(cowYVel[1], classNames[1]);
				}, 2000);
				setTimeout(() => {
					ufo(ufoPos[1], ufoVel[1], classNames[1]);
				}, 2000);

				// Remove starting explosion emojis after 2 seconds
				setTimeout(() => {
					removeEmoji(classNames[0]);
				}, 2000);

				// Remove mid explosion emojis after 4350 milliseconds
				setTimeout(() => {
					removeEmoji(classNames[1]);
				}, 4350);
				// Set off last explosion for ufo after 4350 milliseconds
				setTimeout(() => {
					ufo(ufoPos[1], ufoVel[2], classNames[2]);
				}, 4350);
			},
			blurb: `A UFO appears on the page and briefly stops to abduct up a lone cow.
The example consists of three stages defined by time, each with their
own set of emojiBlasts. The first stage consists of the UFO flying
onto the page, the second consists of the UFO stopping to abduct the cow,
and the third consists of the UFO flying off the page.`,
			title: "Nope",
		},
	],
	name: "Shenanigans",
	slug: "shenanigans",
};

export const demoGroups = { basic, more, shenanigans } as const;

export type DemosGroup = keyof typeof demoGroups;

export function getDemo(group: DemosGroup, title: string) {
	return demoGroups[group].demos.find((demo) => demo.title === title)!;
}
