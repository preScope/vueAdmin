<template>
  <div class="home" id="#app" >
       <ul>
         <li v-for= " (item,index ) in msg "  v-bind:class="{active:item.isActive}"   v-bind:key="index" v-on:click="test(item)" >{{item.name}}</li>
       </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
    name:'login',
    data(){
        return {msg:[
          {name:"jessic",isActive:true},
          {name:"lucy",  isActive:false},
          {name:"timi",  isActive:false}
        ]}
    },
    //created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图
    created(){
      console.log("创建了")
    },
    //mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作
    mounted(){
      console.log("我也不知道")
    },
    methods:{
      test:function(data){
        console.log(data.name);
        this.msg.forEach((item,index) => {
            console.log(index)
            item.isActive = false;
        } )

        data.isActive = true

      }
    },
    //父组件通过 属性props向下传递数据给子组件
    props:{},
    //watch的作用可以监控一个值的变换，并调用因为变化需要执行的方法。可以通过watch动态改变关联的状态。
    watch:{}
}
</script>
<style lang="scss" scoped>
.active{
  background: red;
}

</style>
