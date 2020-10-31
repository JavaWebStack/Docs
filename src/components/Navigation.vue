<template>
    <div>
        <div id="nav">
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
}
</style>