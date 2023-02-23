import { reqGetPageList } from "@/service/modules/main/system/page";
import { defineStore } from "pinia";

const useMainStore = defineStore("main", {
  state: (): {
    roleList: any[];
    departmentList: any[];
    menuList: any[];
  } => ({
    roleList: [],
    departmentList: [],
    menuList: [],
  }),
  actions: {
    // 获取角色与部门列表
    async getRoleAndDepartmentActions() {
      //   发请求获取数据
      const roleResult = await reqGetPageList("role");
      const departmentResult = await reqGetPageList("department");
      const menuListResult = await reqGetPageList("menu");

      //   保存数据
      this.roleList = roleResult.data.list;
      this.departmentList = departmentResult.data.list;
      this.menuList = menuListResult.data.list;
    },
  },
});

export default useMainStore;
