<template>
    <div id="doc">
        <h1 id="doc-title">{{$route.meta.title}}</h1>
        <vue-markdown ref="content" id="markdown-contents" @rendered="onRender" :source="$route.meta.content" />
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
    data: function(){return {
    }},
    mounted(){
        console.log(this.$route.meta.content)
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