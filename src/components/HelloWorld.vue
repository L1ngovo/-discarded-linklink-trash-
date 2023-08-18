<template>
    <div class="zero">
        <div ref="aa" v-show="cc" class="one" @mouseup.stop="ts" :class="[type? 'active' : 'actived']">
            1
        </div>

        <div ref="bb" v-show="cc" class="two" @mouseup.stop="ts0" :class="[type0? 'active' : 'actived']">
            1
        </div>
        <div ref="aa"> 
            <input type="checkbox" id="a" value="2" @mouseup="sele">
            <label for="a">aa</label>
        </div>
        <div ref="bb">
            <input type="checkbox" id="b" value="2" @mouseup="sele">
            <label for="b">aa</label>
        </div>
        
        <input type="checkbox" value="1">bb

        <!-- <div ref="dd" v-show="cc" class="two" @mouseup.stop="ts1" :class="[type1? 'active' : 'actived']">
            1
        </div> -->
        <!-- <button @click="show">click</button> -->
    </div>
    
</template>

<script setup>
import { ref } from 'vue'


    let type = ref(true)
    let type0 = ref(true)
    let type1 = ref(true)
    let aa = ref()
    let bb = ref()
    let dd = ref()
    let cc = ref(true)

    const sele = () => {
        if(aa.value.innerText == bb.value.innerText){
            console.log('11');
        }
        
    }

    const ts = () => {
        type.value = !type.value
        if(aa.value.innerText == bb.value.innerText){
            cc.value =! cc.value
        }
        console.log(aa.value.innerText);
    }
    const ts0 = () => {
        type0.value = !type0.value
        if(bb.value == aa.value){
            cc.value =! cc.value
        }
        // aa.value =! aa.value
    }
    // const ts1 = () => {
    //     type1.value = !type1.value
    //     if(dd.value == aa.value){
    //         cc.value =! cc.value
    //     }
    //     // aa.value =! aa.value
    // }
      
    const show = () => {
        cc.value =! cc.value
    }

</script>

<style lang="scss">
    .one{
        cursor: pointer;
        border: 5px black;
        margin: 10px;
    }
    .two{
      cursor: pointer;
    }
    .one:hover{
        background-color: green;
        border: 2px solid black;
    }
    .active{
        background-color:  yellow;
        
    }
    .actived{
        background-color: red;
        color: white;
        opacity: 0.3;
        backdrop-filter: blur(10px);
    }


</style>