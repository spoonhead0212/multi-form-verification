
export const ImageSlideIn = {
    initial: {y: '-100%'},
    whileInView: {y: 0},
    transition: {duration: .4, delay: 1},
    viewport: {
        once: true,
        // amount: .5,
    },
}

export const FadeIn = {
    initial: {opacity: 0},
    whileInView: {opacity: 1},
    transition: { duration: .4, delay: .5},
    viewport: {
        once: true,
        amount: .5
    },
}

export const SlideInLoop = {
    initial: {y: '-100%'},
    whileInView: {y: 0},
    transition: {duration: .4, delay: .5},
    viewport: {
        once: false, 
        // amount: 0.5
    }
}