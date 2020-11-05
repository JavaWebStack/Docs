<template>
    <div>
        <div id="nav" :class="{docs: $route.meta.docs}">
            <router-link id="logo" to="/">
                <img src="../assets/img/icon.svg">
                <span>
                    JavaWebStack
                </span>
            </router-link>
            <div class="links">
                <router-link to="/docs">DOCS</router-link>
                <a href="https://github.com/JavaWebStack">GITHUB</a>
            </div>
        </div>
        <div id="docs-sidenav" v-if="$route.meta.docs">
            <router-link class="sidenav-entry" to="/docs">
                Hello there
            </router-link>
            <router-link class="sidenav-entry selected" to="/docs">
                Hello there 2
            </router-link>
        </div>

    </div>
</template>
<script>
export default {
    
}  
</script>

<style lang="scss" scoped>
#nav {
    max-width: 1200px;
    padding: 0px 20px;
    transition: 0.3s;
    margin: auto;
    margin-top: 30px;
    #logo,
    #logo:visited {
        user-select: none;
        text-decoration: none;
        img {
            vertical-align: middle;
            width: 64px;
        }
        span {
            vertical-align: middle;
            margin-left: 24px;
            text-decoration: none;
            color: #60A8FD;
            font-weight: 700;
            font-size: 23px;
        }
    }

    .links {
        float: right;
        a, a:link {
            color: #60A8FD;
            margin-right: 10px;
            text-decoration: none;
            font-size: 21px;
            line-height: 65px;
            font-weight: 600;
        }
    }

    &.docs {
        position: fixed;
        margin-top: 0px;
        max-width: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        padding: 10px 15px;
        background: #EEEEEEAA;
        backdrop-filter: blur(8px);

        #logo,
        #logo:visited {
            img {
                width: 51px;
            }
        }

        .links {
            a, a:link {
                line-height: 51px;
                font-size: 20px;
            }
        }
    }
}

#docs-sidenav {
    background: #EEEEEEAA;
    backdrop-filter: blur(8px);
    position: fixed;
    width: 300px;
    height: 100%;
    top: 71.1px;

    .sidenav-entry,
    .sidenav-entry:visited {
        text-decoration: none;
        color: #434343;
        display: block;
        padding: 7px 10px;
        font-weight: 600;
        transition: 0.3s;
        font-size: 18px;
        &.selected {
            color: #60A8FD;
            background: #60A8FD22;
        }
        &:hover {
            color: #60A8FD;
            background: #60A8FD11;
        }
    }
}
</style>