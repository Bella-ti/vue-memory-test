# Vue+Vue Router+Vuex在IE Edge浏览器中运行存在内存溢出的现象

> 基于Vue Router的单页应用，示例代码如下：
``` code
// .vue文件
<template>
<div>
  <table>
    <tr v-for="row in tableData" :key="row.key">
      <td v-for="item in items" :key="item.prop"> 
        <div v-for="i in 100">
          <input type="text" :value="row[item.prop]" />
        </div>
      </td>
    </tr>
  </table>
</div>
</template>
<script>
  export default {
    computed: {
      tableData () {
        return this.$store.state.test1.tableData
      },
      items () {
        return this.$store.state.test1.items
      }
    },
    mounted () {
      this.$store.commit('test1/resetTableData')
      setTimeout(() => {
        let tableData = [
          {key: 'x1', a:'a', b:2, c:3, d:4, e: 5},
          {key: 'x2', a:'a', b:2, c:3, d:4, e: 5},
          {key: 'x3', a:'a', b:2, c:3, d:4, e: 5},
          {key: 'x4', a:'a', b:2, c:3, d:4, e: 5},
          {key: 'x5', a:'a', b:2, c:3, d:4, e: 5},
          {key: 'x6', a:'a', b:2, c:3, d:4, e: 5},
          {key: 'x7', a:'a', b:2, c:3, d:4, e: 5},
          {key: 'x8', a:'a', b:2, c:3, d:4, e: 5},
          {key: 'x9', a:'a', b:2, c:3, d:4, e: 5},
          {key: 'x10', a:'a', b:2, c:3, d:4, e: 5}
        ]
        let items = [
          {title: 'a', prop: 'a'},
          {title: 'b', prop: 'b'},
          {title: 'c', prop: 'c'},
          {title: 'd', prop: 'd'},
          {title: 'e', prop: 'e'}
        ]
        this.$store.commit('test1/setTableData', {
          tableData,
          items
        })
      },1000)
    }
  }
</script>
```
``` code
// store文件
export default {
  modules: {
    test1: {
      namespaced: true,
      state: {
        tableData: [],
        items: []
      },
      mutations: {
        resetTableData (state) {
          state.tableData = []
          state.items = []
        },
        setTableData (state, { tableData, items }) {
          state.tableData = tableData
          state.items = items
        }
      }
    }
  }
}
```
> 该问题在ie edge浏览器下可以重现，chrome下是正常的
> 怀疑是每次视图切换的时候vuex中存放的state与原视图绑定的监听原视图DOM变化的实现无法回收导致的，每次视图回切时DOM重新构建，遗留的DOM与state状态的引用内存占用不断累积，导致内存溢出
