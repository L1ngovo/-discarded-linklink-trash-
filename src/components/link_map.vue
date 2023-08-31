<template>
    <div class="map">
        <tr v-for="(cols,row) in arr" :key="row">
            <div class="items">
                <td v-for="(col,item) in cols" :key="item">
                    d
                </td>
            </div>
            <div class="items">
                <td v-for="(col,item) in cols" :key="item">
                    d
                </td>
            </div>
        </tr>
    </div>
</template>

<script setup>

let arr = [30]
// let col = [1]

</script>

<style lang="scss" scoped>
.map{
 
}
.items{
    & > * {
        width: 20px;
        height: 20px;
        background-color: yellowgreen;
        padding: 5px;
        border: 1[];
    }
    
}

</style>