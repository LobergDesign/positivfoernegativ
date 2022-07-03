// config
const gsapConfig = {
	ease: "power4.out",
};

// initial header animation
const inviewHeaderAnimmation = (target: Element | Vue | (Element | Vue)[] | undefined, gsap: NGlobal.IGsap) => {
	const tl = gsap.timeline();

	return tl.fromTo(
		target,
		{ yPercent: -100 },
		{
			duration: 1,
			yPercent: 0,
			delay: 0.2,
			ease: gsapConfig.ease,
		}
	);
};

// headline animation
const inviewAnimationHeadline = (target: HTMLElement, gsap: NGlobal.IGsap) => {
	const init = () => {
		gsap.set(target, {
			yPercent: 100,
		});
	};
	const action = () => {
		gsap.to(target, {
			yPercent: 0,
			duration: 1,
			ease: gsapConfig.ease,
		});
	};
	return { init, action };
};

// text area animation
const inviewAnimationBodytext = (target: HTMLElement, gsap: NGlobal.IGsap) => {
	const init = () => {
		gsap.set(target, {
			y: 50,
			opacity: 0,
			autoAlpha: 0,
		});
	};
	const action = () => {
		gsap.to(target, {
			opacity: 1,
			y: 0,
			duration: 1.1,
			delay: 0.14,
			autoAlpha: 1,
			ease: gsapConfig.ease,
		});
	};
	return { init, action };
};

// SCALE UP ANIMATION
const inviewAnimationScaleUp = (target: HTMLElement, gsap: NGlobal.IGsap) => {
	const init = () => {
		gsap.set(target, {
			y: 50,
			scale: 0.8,
			autoAlpha: 0,
		});
	};
	const action = () => {
		gsap.to(target, {
			y: 0,
			scale: 1,
			duration: 0.7,
			delay: 0.1,
			autoAlpha: 1,
			ease: gsapConfig.ease,
		});
	};
	return { init, action };
};
// BACKDROP UP ANIMATION
const inviewAnimationImage = (target: HTMLElement, gsap: NGlobal.IGsap) => {
	const init = () => {
		gsap.set(target, {
			opacity: 0,
			scale: 0.9,
		});
	};
	const action = () => {
		gsap.to(target, {
			opacity: 1,
			scale: 1,
			duration: 1.2,
			ease: gsapConfig.ease,
		});
	};
	return { init, action };
};
// SMALL HEADLINE WITH LINE
const inviewAnimationHeadlineLine = (target: HTMLElement, line: HTMLElement, gsap: NGlobal.IGsap) => {
	const init = () => {
		gsap.set(target, {
			autoAlpha: 0,
			x: -50,
		});
		gsap.set(line, {
			scaleX: 0,
			transformOrigin: "0 100%",
		});
	};
	const action = () => {
		gsap.to(target, {
			autoAlpha: 1,
			x: 0,
			duration: 1.2,
			delay: 0.2,
			ease: gsapConfig.ease,
		});
		gsap.to(line, {
			scaleX: 1,
			duration: 0.9,
			ease: gsapConfig.ease,
		});
	};
	return { init, action };
};

export {
	inviewAnimationHeadline,
	inviewHeaderAnimmation,
	inviewAnimationBodytext,
	inviewAnimationScaleUp,
	inviewAnimationImage,
	inviewAnimationHeadlineLine,
};
