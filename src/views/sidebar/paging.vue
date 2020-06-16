
<template>
  <div>
    <!--卡片-->
    <el-col :span="24">
      <el-card shadow="always">
        <!--模糊搜索框-->
        <el-input
  placeholder="请输入内容"
  v-model="yellow"
  clearable>
</el-input>
        <!--表格数据-->
        <el-table
          :data="arr.slice((currentPage - 1) * pageSize,currentPage*pageSize)"
          style="width: 100%"
        >
          <el-table-column label="名称" width="450" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
            </template>
          </el-table-column>
          <el-table-column label="商品编号" width="180" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
            </template>
          </el-table-column>
          <el-table-column label="原价" width="180" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.ORI_PRICE}}</span>
            </template>
          </el-table-column>
          <el-table-column label="现价" width="180" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" @click="edit(scope.row)" class="release">
                <i class="iconfont icon-modify"></i>修改
              </el-button>
              <el-popconfirm
                confirmButtonText="好的"
                cancelButtonText="不用了"
                icon="el-icon-info"
                iconColor="red"
                title="这是一段内容确定删除吗？"
              >
                <el-button
                  slot="reference"
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >
                  <i class="iconfont icon-shanchu"></i>删除
                </el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="694"
        ></el-pagination>

        <el-dialog title :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <el-form>
            <el-form-item label="名称">
              <el-input v-model="obj.NAME" class="eipt"></el-input>
            </el-form-item>
            <el-form-item label="原价">
              <el-input v-model="obj.ORI_PRICE" class="eipt"></el-input>
            </el-form-item>
            <el-form-item label="现价">
              <el-input v-model="obj.PRESENT_PRICE" class="eipt"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      currentPage: 1,
      pageSize: 10,
      dialogVisible: false,
      obj: {},
      yellow:''
      
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get("/api/tableData")
        .then(res => {
          this.arr = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleDelete(index, row) {
      this.arr.splice(index, 1);
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    edit(row) {
      this.obj = row;
      this.dialogVisible = true;
      console.log(row);
    }
  },
  mounted() {
    this.getdata();
  },
  watch: {
     yellow (val) {
      axios.get(`/api/tableData`).then(res =>{
        this.arr = res.data.data.filter(item =>{
          return JSON.stringify(item).includes(val)
        })
      }).catch(err =>{})
    },
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.release {
  background: rgb(64, 158, 255);
  color: white;
}
.eipt {
  width: 350px;
}
</style>

