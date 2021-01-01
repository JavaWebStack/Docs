<template>
    <div id="footer" :class="{docs: $route.meta.docs}">
        <div id="footer-contets">

            <svg id="footer-logo" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<g class="rotate-me">
<circle cx="52.5" cy="166.5" r="20.5" stroke="white" stroke-width="14"/>
<circle cx="198.5" cy="166.5" r="20.5" stroke="white" stroke-width="14"/>
<circle cx="125.5" cy="40.5" r="20.5" stroke="white" stroke-width="14"/>
<circle cx="52.5" cy="82.5" r="20.5" stroke="white" stroke-width="14"/>
<circle cx="125.5" cy="208.5" r="20.5" stroke="white" stroke-width="14"/>
<circle cx="198.5" cy="82.5" r="20.5" stroke="white" stroke-width="14"/>
</g>
<circle cx="139.5" cy="100.5" r="10.5" fill="#60A8FD"/>
<circle cx="110.5" cy="100.5" r="10.5" fill="#60A8FD"/>
<circle cx="139.5" cy="148.5" r="10.5" fill="#60A8FD"/>
<circle cx="110.5" cy="148.5" r="10.5" fill="#60A8FD"/>
<circle cx="153.5" cy="125" r="10.5" fill="#60A8FD"/>
<circle cx="96.5" cy="125" r="10.5" fill="#60A8FD"/>
</svg>

            <div class="links">
                <router-link to="/imprint">Imprint</router-link>
                <a href="https://github.com/JavaWebStack">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><title>github</title><g id="Layer_2" data-name="Layer 2"><g id="github"><rect class="cls-1" width="24" height="24"/><path class="cls-2" d="M16.24,22a1,1,0,0,1-1-1V18.4a2.15,2.15,0,0,0-.54-1.66,1,1,0,0,1,.61-1.67C17.75,14.78,20,14,20,9.77a4,4,0,0,0-.67-2.22,2.75,2.75,0,0,1-.41-2.06,3.71,3.71,0,0,0,0-1.41,7.65,7.65,0,0,0-2.09,1.09,1,1,0,0,1-.84.15,10.15,10.15,0,0,0-5.52,0,1,1,0,0,1-.84-.15A7.4,7.4,0,0,0,7.52,4.08a3.52,3.52,0,0,0,0,1.41,2.84,2.84,0,0,1-.43,2.08A4.07,4.07,0,0,0,6.42,9.8c0,3.89,1.88,4.93,4.7,5.29a1,1,0,0,1,.82.66,1,1,0,0,1-.21,1,2.06,2.06,0,0,0-.55,1.56V21a1,1,0,0,1-2,0v-.57a6,6,0,0,1-5.27-2.09,3.9,3.9,0,0,0-1.16-.88,1,1,0,1,1,.5-1.94,4.93,4.93,0,0,1,2,1.36c1,1,2,1.88,3.9,1.52h0a3.89,3.89,0,0,1,.23-1.58c-2.06-.52-5-2-5-7a6,6,0,0,1,1-3.33.85.85,0,0,0,.13-.62,5.69,5.69,0,0,1,.33-3.21,1,1,0,0,1,.63-.57c.34-.1,1.56-.3,3.87,1.2a12.16,12.16,0,0,1,5.69,0c2.31-1.5,3.53-1.31,3.86-1.2a1,1,0,0,1,.63.57,5.71,5.71,0,0,1,.33,3.22.75.75,0,0,0,.11.57,6,6,0,0,1,1,3.34c0,5.07-2.92,6.54-5,7a4.28,4.28,0,0,1,.22,1.67V21A1,1,0,0,1,16.24,22Z"/></g></g></svg>
                </a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#footer {
    background: #1A2737;
    #footer-contets {
        padding: 10px 20px;
        max-width: 1200px;
        margin: auto;
        #footer-logo {
            width:  70px;
            height: 70px;
        }
        .links {
            float: right;
            a {
                margin-top: 20px;
                display: inline-block;
                vertical-align: middle;
                color: #FFF;
                text-decoration: none;
                font-weight: 500;
                margin-left: 10px;
                font-size: 17px;
                svg {
                    width: 30px;
                    height: 30px;
                    margin-top: 5px;
                }
            }
        }
    }
    &.docs {
        margin-left: 300px;
        #footer-contets {
            max-width: 95%;

            #footer-logo {
                width:  40px;
                height: 40px;
            }

            .links {
                float: right;
                a {
                    margin-top: 8px;
                    display: inline-block;
                    svg {
                        width: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }
}
.cls-1{fill:#fff;opacity:0;}.cls-2{fill:#FFF;}

.rotate-me {
    animation: rotate-me 30s infinite linear;
}

#footer-logo:hover .rotate-me {
    animation: rotate-me 1.5s infinite linear;
}

@keyframes rotate-me {
    from {
        transform: rotate(0deg);
        transform-origin: center;
    }

    to {
        transform: rotate(360deg);
        transform-origin: center;

    }
}


@media screen and (max-width: 720px){
    #footer {
        &.docs {
            margin-left: 0px;
        }
    }
}
</style>