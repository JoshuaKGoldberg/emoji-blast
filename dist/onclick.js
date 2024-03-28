(() => {
	"use strict";
	const t = (t) =>
			"number" == typeof t
				? t
				: Math.floor(Math.random() * (t.max - t.min + 1)) + t.min,
		e = (t) => ("function" == typeof t ? t() : t),
		i = (t) => {
			const e = t.slice();
			for (let t = e.length - 1; t > 0; t -= 1) {
				const i = Math.floor(Math.random() * (t + 1)),
					n = e[t];
				(e[t] = e[i]), (e[i] = n);
			}
			return e;
		};
	class n {
		#t = 1;
		#e;
		#i;
		#n;
		element;
		constructor(e) {
			var i;
			(this.element = document.createElement("button")),
				(this.element.className = e.className),
				(this.element.textContent = (i = e.emojis)[
					Math.floor(Math.random() * i.length)
				]),
				this.element.setAttribute("role", "img"),
				(this.element.style.fontSize = `${t(e.physics.fontSize)}px`),
				(this.element.style.transition = "16ms opacity, 16ms transform"),
				(this.#e = e.physics),
				(this.#i = {
					rotation: t(e.physics.rotation),
					x: e.position.x,
					y: e.position.y,
				}),
				(this.#n = {
					rotation: t(e.physics.initialVelocities.rotation),
					x: t(e.physics.initialVelocities.x),
					y: t(e.physics.initialVelocities.y),
				}),
				this.updateElement(),
				e.process?.(this.element),
				e.container.appendChild(this.element);
		}
		updateElement() {
			(this.element.style.opacity = `${this.#t}`),
				(this.element.style.transform = `translate(${this.#i.x}px, ${this.#i.y}px) rotate(${Math.round(this.#i.rotation)}deg)`);
		}
		act(t) {
			if (
				this.#e.opacityDecay &&
				((this.#t -= t / (this.#e.opacityDecay * this.#e.framerate)),
				this.#t <= 0)
			)
				return !0;
			(this.#n.rotation *= this.#e.rotationDeceleration),
				(this.#n.y += this.#e.gravity),
				(this.#i.rotation += this.#n.rotation),
				(this.#i.x += (this.#n.x * t) / this.#e.framerate),
				(this.#i.y += (this.#n.y * t) / this.#e.framerate);
			const e = window.outerHeight || document.documentElement.clientHeight,
				i = window.outerWidth || document.documentElement.clientWidth;
			if (!this.#e.preserveOutOfBounds) {
				if (this.#i.y - this.element.clientHeight > e + 350) return !0;
				if (this.#i.y + this.element.clientHeight < -350) return !0;
				if (this.#i.x - this.element.clientWidth > i + 350) return !0;
				if (this.#i.x + this.element.clientWidth < -350) return !0;
			}
			return this.updateElement(), !1;
		}
		dispose() {
			null !== this.element.parentElement &&
				this.element.parentElement.removeChild(this.element);
		}
		update(t) {
			void 0 !== t.opacity && (this.#t = t.opacity),
				void 0 !== t.velocity &&
					(void 0 !== t.velocity.rotation &&
						(this.#n.rotation = t.velocity.rotation),
					void 0 !== t.velocity.x && (this.#n.x = t.velocity.x),
					void 0 !== t.velocity.y && (this.#n.y = t.velocity.y));
		}
		get opacity() {
			return this.#t;
		}
		get position() {
			return this.#i;
		}
		get velocity() {
			return this.#n;
		}
	}
	const o = [
			"😁",
			"😂",
			"🤣",
			"😃",
			"😆",
			"😍",
			"🤩",
			"😎",
			"🤗",
			"🥳",
			"🤖",
			"😻",
			"😹",
			"🐱",
			"🐶",
			"🙈",
			"🙉",
			"🙊",
			"🏄",
			"💪",
			"👌",
			"👋",
			"🙌",
			"🫶",
			"💝",
			"💖",
			"💗",
			"🧡",
			"🩷",
			"💛",
			"💚",
			"💙",
			"💜",
			"🩵",
			"❤️‍🔥",
			"🔥",
			"🚀",
			"⛄",
			"🦩",
			"🍍",
			"💐",
			"🦾",
			"✨",
			"🎉",
			"💯",
		],
		s = "data-emojisplosion-events-initialized",
		c = new WeakMap(),
		a = new Set(),
		r = "emoji-styles",
		l = (() => {
			let t;
			return () => (
				t?.parentNode === document.body ||
					((t = document.createElement("div")), document.body.prepend(t)),
				t
			);
		})(),
		h = () => Math.floor(14 * Math.random()) + 14,
		m = {
			onClick({ actor: t }) {
				t.update({ opacity: 1, velocity: { y: t.velocity.y / 2 - 15 } });
			},
		},
		p = {
			fontSize: { max: 28, min: 14 },
			framerate: 60,
			gravity: 0.35,
			initialVelocities: {
				rotation: { max: 7, min: -7 },
				x: { max: 7, min: -7 },
				y: { max: -7, min: -21 },
			},
			preserveOutOfBounds: !1,
			rotation: { max: 45, min: -45 },
			rotationDeceleration: 0.98,
		},
		y = () => ({
			x: Math.random() * innerWidth,
			y: Math.random() * innerHeight,
		}),
		d = (t, d) => {
			((t = {}) => {
				const {
						className: d = r,
						container: u = l,
						emojiCount: v = h,
						emojis: f = o,
						events: x = m,
						position: g = y,
						process: E,
						uniqueness: M = 1 / 0,
					} = t,
					b = e(u);
				((t) => {
					if (a.has(t)) return;
					a.add(t);
					const e = document.createElement("style");
					e.setAttribute("type", "text/css"),
						e.appendChild(
							document.createTextNode(
								`\n\t\t.${t} {\n\t\t\tbackground: none;\n\t\t\tborder: none;\n\t\t\tcursor: default;\n\t\t\theight: 2em;\n\t\t\tmargin-left: -1em;\n\t\t\tmargin-top: -1em;\n\t\t\tposition: fixed;\n\t\t\tuser-select: none;\n\t\t\twidth: 2em;\n\t\t\tz-index: 2147483647;\n\t\t}\n\t`,
							),
						),
						document.head.appendChild(e);
				})(d);
				const w = {
						...p,
						...t.physics,
						initialVelocities: {
							...p.initialVelocities,
							...(void 0 !== t.physics ? t.physics.initialVelocities : {}),
						},
					},
					C = {
						className: d,
						container: b,
						emojis: i(e(f)).slice(0, e(M)),
						physics: w,
						position: e(g),
						process: E,
					},
					V = e(v),
					j = [];
				for (let t = 0; t < V; t += 1) j.push(new n(C));
				!(function (t) {
					let e = performance.now();
					const i = (n) => {
						const o = n - e;
						for (let e = 0; e < t.length; e += 1) {
							const i = t[e];
							i.act(o) && (i.dispose(), t.splice(e, 1), (e -= 1));
						}
						0 !== t.length && ((e = n), requestAnimationFrame(i));
					};
					requestAnimationFrame(i);
				})(j),
					(function (t, e, i) {
						for (const e of t) c.set(e.element, e);
						e.hasAttribute(s) ||
							(e.setAttribute(s, "true"),
							e.addEventListener("click", (t) => {
								const e = t.target && c.get(t.target);
								e && i.onClick({ actor: e, event: t });
							}));
					})(j, b, x);
			})({ position: { x: t, y: d } });
		};
	document.addEventListener("click", (t) => {
		d(t.clientX, t.clientY);
	}),
		document.addEventListener("drag", (t) => {
			d(t.clientX, t.clientY);
		}),
		document.addEventListener("touchmove", (t) => {
			for (let e = 0; e < t.touches.length; e += 1) {
				const i = t.touches.item(e);
				null !== i && d(i.clientX, i.clientY);
			}
		});
})();
