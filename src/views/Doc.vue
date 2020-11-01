<template>
    <div id="doc">
        <div style="width: 100%; padding-left: 15%; padding-right: 15%; padding-top: 50px; padding-bottom: 50px;">
            <h1 id="doc-title">{{$route.meta.title}}</h1>
            <vue-markdown ref="content" id="markdown-contents" @rendered="onRender" :source="$route.meta.content" />
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs';
import 'prismjs/components/prism-java.min';

export default {
    components: {
        VueMarkdown
    },
    methods: {
        onRender(){
            this.$nextTick(() => {
                Prism.highlightAll();
                this.$refs.content.$el.getElementsByTagName("a").forEach(e => {
                    if (e.hostname == window.location.hostname) {
                        e.addEventListener("click", event => {
                            console.log("Hello world")
                            this.$router.push(e.pathname)
                            event.preventDefault()
                            return false
                        });
                    }
                })
            });
        }
    }
}
</script>

<style lang="scss" scoped>
#doc-title {
    
}
</style>