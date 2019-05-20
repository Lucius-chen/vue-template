<template>
  <div class="user-list-container">
    <el-table
      :data="userlist"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"/>
      <el-table-column
        prop="username"
        label="username"/>
      <el-table-column
        prop="email"
        label="email"/>
    </el-table>
    <el-pagination
      :total= "totalnum"
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
import { getUserList } from '@/api/users'
export default {
  name: 'Index',
  data() {
    return {
      userlist: [],
      totalnum: 0,
      pagenum: {
        page: 1
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getUserList(this.pagenum).then(res => {
        this.userlist = res.results
        this.totalnum = res.count
      })
    },
    handleCurrentChange(val) {
      this.pagenum.page = val
      this.fetchData(val)
    }
  }
}
</script>

<style scoped>

</style>
