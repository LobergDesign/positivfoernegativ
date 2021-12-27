


import { inviewAnimationHeadline, inviewAnimationBodytext, inviewAnimationScaleUp, inviewAnimationBackdropUp } from "~/utils/transitions";

// HEADLINES
const ioHeadlines = (targets: any, gsap: NGlobal.IGsap) => {

    // set initial value
    targets.forEach((entry: any) => {
        inviewAnimationHeadline(entry, gsap).init();
    });

    const initIo = (target: any) => {
        const io = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const e = entry.target as HTMLElement
                    inviewAnimationHeadline(e, gsap).action();
                }
            })
        });
        io.observe(target);
    }
    targets.forEach(initIo);
}

// BODYTEXT
const ioBodytext = (targets: any, gsap: NGlobal.IGsap) => {

    // set initial value
    targets.forEach((entry: any) => {
        inviewAnimationBodytext(entry, gsap).init();
    });


    const initIo = (target: any) => {
        const io = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const e = entry.target as HTMLElement
                    inviewAnimationBodytext(e, gsap).action();
                }
            })
        });
        io.observe(target);
    }
    targets.forEach(initIo);
}

// SCALE UP
const ioScaleUp = (targets: any, gsap: NGlobal.IGsap) => {

    // set initial value
    targets.forEach((entry: any) => {
        inviewAnimationScaleUp(entry, gsap).init();
    });


    const initIo = (target: any) => {
        const io = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const e = entry.target as HTMLElement
                    inviewAnimationScaleUp(e, gsap).action();
                }
            })
        });
        io.observe(target);
    }
    targets.forEach(initIo);
}

// SCALE UP
const ioBackdropUp = (targets: any, backdrop: HTMLDivElement, gsap: NGlobal.IGsap) => {

    // set initial value
    targets.forEach((entry: any) => {
        inviewAnimationBackdropUp(entry, backdrop, gsap).init();
    });

    const initIo = (target: any) => {
        const io = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const e = entry.target as HTMLElement
                    inviewAnimationBackdropUp(e, backdrop, gsap).action();
                }
            })
        });
        io.observe(target);
    }
    targets.forEach(initIo);
}

export { ioHeadlines, ioBodytext, ioScaleUp, ioBackdropUp }