
// config
const gsapConfig = {
    ease: "power4.out",
}


// initial header animation 
const inviewHeaderAnimmation = (target: Element | Vue | (Element | Vue)[] | undefined, gsap: NGlobal.IGsap) => {
    const tl = gsap.timeline();

    return tl.fromTo(target, { yPercent: -100 }, {
        duration: 1,
        yPercent: 0,
        delay: 0.2,
        ease: gsapConfig.ease,
    });
}

// headline animation
const inviewAnimationHeadline = (target: HTMLElement, gsap: NGlobal.IGsap) => {
    const init = () => {
        gsap.set(target, {
            yPercent: 100,
        })
    }
    const action = () => {
        gsap.to(target, {
            yPercent: 0,
            duration: 0.55,
            ease: gsapConfig.ease,
        })
    }
    return { init, action }
}

// text area animation
const inviewAnimationBodytext = (target: HTMLElement, gsap: NGlobal.IGsap) => {
    const init = () => {
        gsap.set(target, {
            y: 100,
            autoAlpha: 0,
        })
    }
    const action = () => {
        gsap.to(target, {
            y: 0,
            duration: 0.6,
            delay: .08,
            autoAlpha: 1,
            ease: gsapConfig.ease,
        })
    }
    return { init, action }
}

// SCALE UP ANIMATION
const inviewAnimationScaleUp = (target: HTMLElement, gsap: NGlobal.IGsap) => {
    const init = () => {
        gsap.set(target, {
            y: 50,
            scale: .8,
            autoAlpha: 0,
        })
    }
    const action = () => {
        gsap.to(target, {
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: .1,
            autoAlpha: 1,
            ease: gsapConfig.ease,
        })
    }
    return { init, action }
}
// BACKDROP UP ANIMATION
const inviewAnimationBackdropUp = (target: HTMLElement, backdrop: HTMLDivElement, gsap: NGlobal.IGsap) => {
    const init = () => {
        gsap.set(target, {
            y: 500,
            scale: 3,
        });
    }
    const action = () => {
        gsap.to(target, {
            y: 0,
            scale: 1,
            duration: 1,
            ease: gsapConfig.ease,
        })
        gsap.to(backdrop, {
            yPercent: -100,
            duration: .9,
            delay: .2,
            ease: gsapConfig.ease,
        })
    }
    return { init, action }
}
export { inviewAnimationHeadline, inviewHeaderAnimmation, inviewAnimationBodytext, inviewAnimationScaleUp, inviewAnimationBackdropUp }
