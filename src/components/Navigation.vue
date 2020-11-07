<template>
    <div >
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
            <NavigationEntry :structure="structure" path="/docs" :indent="21" />
        </div>

    </div>
</template>
<script>
import NavigationEntry from "./NavigationEntry";
import structure from "../assets/docs/structure.js";
export default {
    data: function(){
        return {
            structure
        }
    },
    components: {
        NavigationEntry
    }
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
    overflow: auto;
    
}
</style>