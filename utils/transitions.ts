
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
        delay: 0.3,
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
const inviewAnimationBodyText = (target: HTMLElement, gsap: NGlobal.IGsap) => {
    const init = () => {
        gsap.set(target, {
            x: 200,
        })
    }
    const action = () => {
        gsap.to(target, {
            x: 0,
            duration: 0.4,
            delay: .2,
            ease: gsapConfig.ease,
        })
    }
    return { init, action }
}
export { inviewAnimationHeadline, inviewHeaderAnimmation, inviewAnimationBodyText }
