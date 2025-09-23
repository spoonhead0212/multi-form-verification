'use client'
import { createContext, ReactNode, useContext } from "react"
// import { useInView } from "motion/react"
import { useInView } from "react-intersection-observer";

interface V {
    view: boolean;
}

export const Viewer = createContext<undefined | V>(undefined)

function ViewerProvider({children}: { children: ReactNode }) {

    const { ref, inView} = useInView({
        threshold: 0.2,
        triggerOnce: true, 
    });
    
        
    return (
        <Viewer.Provider value={{ view: inView }}>
            <div ref={ref}>
              {children}
            </div>
        </Viewer.Provider>
    )
}

export function useViewerContext() {
    const viewerContext = useContext(Viewer)
    return viewerContext
}

export default ViewerProvider
