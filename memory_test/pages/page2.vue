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
        return this.$store.state.test2.tableData
      },
      items () {
        return this.$store.state.test2.items
      }
    },
    mounted () {
      this.$store.commit('test2/resetTableData')
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
        this.$store.commit('test2/setTableData', {
          tableData,
          items
        })
      },1000)
    }
  }
</script>