<template>
    <div  v-if="collapsed">
        <div  v-for="child in structure.children" :key ="child">
            <router-link :style="{'padding-left': indent+'px'}" class="sidenav-entry" :class="{selected: path+'/'+child.name==$route.path}" :to="path+'/'+child.name">
                <svg v-if="path=='/docs' && ($route.path).startsWith(path+'/'+child.name)" viewBox="0 0 16 16" class="bi bi-book-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>
                <svg v-else-if="path=='/docs'" viewBox="0 0 16 16" class="bi bi-book" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>
                <svg v-else-if="child.children" :style="{transform: ($route.path).startsWith(path+'/'+child.name) ? '' : 'rotate(-90deg)'}" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
                <span>{{child.title}}</span>
            </router-link>
            <NavigationEntry v-if="collapsed && child.children" :structure="child" :indent="indent+30" :path="path+'/'+child.name" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavigationEntry',
    data: function(){return {
            collapsed: this.$route.path.startsWith(this.path)
        }
    },
    components: {
        
    },
    props: {
        structure: {},
        indent: {},
        path: {}
    },
    watch: {
        $route(to){
            this.collapsed = to.path.startsWith(this.path)
        }
    }
}
</script>
<style lang="scss" scoped>
.sidenav-entry,
.sidenav-entry:visited {
    text-decoration: none;
    color: #434343;
    display: block;
    padding: 5px 10px;
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
    svg {
        vertical-align: middle;
        margin-right: 10px;
        height: 20px;
        width:  20px;
        transition: 0.3s;
    }
    span {
        vertical-align: middle;
    }
}
</style>