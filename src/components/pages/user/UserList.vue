<template>
  <div>
    <div>
      <div style="float:left"> <el-button type="success" plain>新增用户</el-button></div>
      <div style="float:right">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="编号" value="1"></el-option>
            <el-option label="姓名" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div>
      <el-table
        :data="list"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>

        <el-table-column
          prop="birthDate"
          label="生日"
          width="180">
        </el-table-column>

        <el-table-column
          prop="amount"
          label="金额">
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <div>

              <el-button type="text" size="small" @click="goToEdit(scope.row.id)"><i class="el-icon-edit"></i></el-button>
              <el-button type="text" size="small" @click="goToDetail(scope.row.id)"><i class="el-icon-view"></i></el-button>
              <!--<router-link :to="{path:'/user/detail',query:{id:12312313}}"><i class="el-icon-view"></i></router-link>-->

              <el-button type="text" size="small" @click="dialogVisible = true;operateId = scope.row.id"><i class="el-icon-delete"></i></el-button>
            </div>

          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>您确定要删除这条数据吗</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="deleteUser">确 定</el-button>
  </span>
    </el-dialog>

    <div style="text-align: right;">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="changeCurrentPage"
        :total="100">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import {getUserList} from '@/api/users'

  export default {
    data() {
      return {
        input:'',
        select:'',
        operateId:null,
        dialogVisible: false,
        list: null,
        listLoading: true,
        listQuery: {"page": 1, "pageSize": 10}
      }
    },
    created() {
      this.fetchData(1)
    },
    methods: {
      fetchData(page) {
        this.listLoading = true;
        this.listQuery.page = page;
        getUserList(this.listQuery).then(data => {
          this.list = data
          this.listLoading = false
        })
      },
      handleClick(row) {
        console.log(row);
      },
      changeCurrentPage(val){
        this.fetchData(val)
      },
      deleteUser(){
        console.log(this.operateId);
        this.dialogVisible = false
      },
      goToDetail(id){
        this.$router.push({ path: '/user/detail', query: { id: id} });
      },
      goToEdit(id){
        this.$router.push({ path: '/user/edit', query: { id: id} });
      }
    }
  }
</script>
