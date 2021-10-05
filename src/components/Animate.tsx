/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useRef, useEffect } from "react";
import { jsx, css } from "@emotion/react";

type Props = {
    children: React.ReactNode
    noHide?: boolean
};  

const CSS = css`
    &.fading
    {
        transform: translate(0px, 150%);
        opacity: 0;
        transition: all .4s linear;

        &.anim-active
        {
            transform: translate(0px, 0px);
            opacity: 1;
        }
    }
`;

const Animate = ({ children, noHide = true }: Props) => {
    const animRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function animateOnScroll() {
            function offset(el: HTMLElement) {
                let rect = el.getBoundingClientRect();
                let scrolledTop = window.scrollY || document.documentElement.scrollTop;
                let scrolledLeft = window.scrollX || document.documentElement.scrollLeft;

                return { top: rect.top + scrolledTop, left: rect.left + scrolledLeft };
            }

            if (animRef.current) {
                const elHeight = animRef.current.offsetHeight;
                const elOffset = offset(animRef.current).top;
                const animStart = 4;
                let animOrigin = (window.innerHeight - (elHeight / animStart));

                if (window.innerHeight < elHeight) {
                    animOrigin = (window.innerHeight - (window.innerHeight / animStart));
                }

                if ((window.scrollY > elOffset - animOrigin) && window.scrollY < (elOffset + elHeight)) {
                    animRef.current.classList.add("anim-active");
                } else {
                    if (!animRef.current.classList.contains("anim-no-hide")) {
                        animRef.current.classList.remove("anim-active");
                    }
                }
            }
        }

        window.addEventListener("scroll", animateOnScroll);

        let timerId = setTimeout(() => {
            animateOnScroll();
        }, 300);

        return () => { 
            window.removeEventListener("scroll", animateOnScroll);
            clearInterval(timerId);
        };
    }, []);

    return <div css={CSS} ref={animRef} className={`anim-item fading ${noHide && "anim-no-hide"}`}>
        {children}
    </div>
};

export default Animate;