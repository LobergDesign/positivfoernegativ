


import { inviewAnimationHeadline } from "~/utils/transitions";

// global Intersection observer handler
export default function (targets: any, gsap: NGlobal.IGsap) {
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

