
    {
	// IK point class
	class Point {
		constructor() {
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.a = 0.0;
		}
		link(p, s, rx, ry) {
			const x = p.x + rx;
			const y = p.y + ry;
			this.a = Math.atan2(this.y - y, this.x - x);
			this.x = x + s * Math.cos(p.a);
			this.y = y + s * Math.sin(p.a);
			return this;
		}
	}
	// set canvas
	const canvas = {
		init() {
			this.elem = document.querySelector("canvas");
			this.resize();
			window.addEventListener("resize", () => canvas.resize(), false);
			return this.elem.getContext("2d");
		},
		resize() {
			this.width = this.elem.width = this.elem.offsetWidth;
			this.height = this.elem.height = this.elem.offsetHeight;
		}
	};
	// set pointer
	const pointer = {
		init(canvas) {
			this.x = canvas.width * 0.5;
			this.y = canvas.height * 0.5;
			this.a = 0;
			this.isDown = false;
			['mousemove','touchmove'].forEach((event, touch) => {
  			document.addEventListener(event, (e) => {
					if (touch) {
						e.preventDefault();
						this.x = e.targetTouches[0].clientX;
						this.y = e.targetTouches[0].clientY;
					} else {
						this.x = e.clientX;
						this.y = e.clientY;
					}
				}, false);
			});
			window.addEventListener("mousedown", e => this.isDown = true, false);
			window.addEventListener("mouseup", e => this.isDown = false, false);
		}
	};
	// init pen
	const ctx = canvas.init();
	pointer.init(canvas);
	pointer.p = new Point();
	const points = [];
	for (let i = 0; i < 1000; ++i) {
		points.push(new Point());
	}
	// infinite loop
	const run = () => {
		requestAnimationFrame(run);
		if (pointer.isDown) {
			ctx.globalCompositeOperation = "source-over";
			ctx.fillStyle = "#eeeeee";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		} else {
			ctx.globalCompositeOperation = "lighter";
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
		let p0 = pointer.p.link(pointer, 0, Math.random(), Math.random());
		let lineWidth = 150;
		p0 = pointer.p;
		for (let p1 of points) {
			p0 = p1.link(p0, 10, 0, 0);
			ctx.save();
			ctx.translate(p1.x, p1.y);
			ctx.rotate(p1.a);
			if (pointer.isDown) {
				ctx.strokeStyle = "#334";
				ctx.strokeRect(0, -lineWidth * 0.25, 10, Math.max(2, 0.5 * (lineWidth *= 0.994)));
			} else {
				ctx.fillStyle = "hsl(" + Math.round(lineWidth * 5) + ", 80%, 50%)";
				ctx.fillRect(0, -lineWidth * 0.5, 10, Math.max(2, lineWidth *= 0.994));
			}
			ctx.restore();
		}
	};
	run();
}