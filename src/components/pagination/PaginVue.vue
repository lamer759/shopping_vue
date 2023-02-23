<template>
  <div class="pagination">
    <button :disabled='pageNo==1' @click="$emit('getpageNo',pageNo-1)">上一页</button>
    <button v-if="startEndnum.start>1"  @click="$emit('getpageNo',1)" :class="{active:pageNo==1}">1</button>
    <button v-if="startEndnum.start>2">···</button>
    <!-- 中间部分 -->
    <button v-for="(page,index) in startEndnum.end" :key="index" 
    v-show="page>=startEndnum.start" @click="$emit('getpageNo',page)" 
    :class="{active:pageNo==page}">{{page}}</button>

    <button v-if="startEndnum.end<totalpage-1">···</button>
    <button v-if="startEndnum.end<totalpage"  @click="$emit('getpageNo',totalpage)" :class="{active:pageNo==totalpage}">{{totalpage}}</button>
    <button :disabled='pageNo==totalpage' @click="$emit('getpageNo',pageNo+1)">下一页</button>

    <button style="margin-left: 30px" >共{{total}}条</button>
  </div>
</template>

<script>
export default {
  name: "PaginVue",
  props:['pageNo','pageSize','total','continues'],
  computed:{
    totalpage(){
        return Math.ceil(this.total/this.pageSize)
    },
    startEndnum(){
       const{continues,pageNo,totalpage}=this;//解构后这些变量可以直接用，不用this.了
       let start = 0, end =0;
       //不正常现象，总页数不够连续的5页
       if(this.continues > totalpage){
        start=1; end = totalpage;
       }else{
        //正常现象
        start=pageNo-parseInt(continues/2)
        end=pageNo+parseInt(continues/2)
        //起始页的不正常现象
        if(start<1){
            start=1;
            end=continues;
        }
        //结束页的不正常现象
        if(end>totalpage){
            end=totalpage;
            start=totalpage - continues +1
        }
       }
       return {start,end}
    },
  }
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>