import { emojisplosion } from "emojisplosion";

export const name = "Rainbow";

export const blurb = "A rainbow made up of heart emojis and clouds explodes as an arc across the page. The rainbow is made using an emojisplosion for each individual emoji.";

export const codeSnippet = `emojisplosion({
	physics: {
		gravity: -0.35,
		initialVelocities: {
			y: {
				max: 14,
				min: 11.7,
			},
		},
	},
});`

export const handleClick = () => {

    // function to create each heart column of the rainbow
    const rainbowCol = () => {
        let rainbowArr = ["❤️", "🧡", "💛", "💚", "💙", "💜"];
        let positionY = 500;
        
        // creates an explosion for each heart color in the column, increasing the y cordinate position for each blast
        for (let i = 0; i < rainbowArr.length; i++) {
            emojisplosion({
                emojis: [rainbowArr[i]],
                emojiCount: 1,
                position: {
                    x: 0,
                    y: positionY,
                },
                physics: {
                    fontSize: 35,
                    gravity: 0.08,
                    initialVelocities: {
                        rotation: 0,
                        x: 20,
                        y: -20
                    },
                    rotation: 0,
                }
            });
            positionY += 30;
        }
    }

    // function to create cloud columns
    let clouds = () => {
        let positionY = 500;

        // creates an explosion for each cloud in the column, increasing the y cordinate position for each blast
        for (let i = 0; i < 6; i++) {
            emojisplosion({
                emojis: ["☁️"],
                emojiCount: 1,
                position: {
                    x: 0,
                    y: positionY,
                },
                physics: {
                    fontSize: 65,
                    gravity: 0.08,
                    initialVelocities: {
                        rotation: 0,
                        x: 20,
                        y: -20
                    },
                    rotation: 0,
                }
            });
            positionY += 30
        }
    }


    clouds()
    let intervalId = setInterval(rainbowCol, 80);
    setTimeout(() => clearInterval(intervalId), 3000);
    setTimeout(clouds, 3000);
}