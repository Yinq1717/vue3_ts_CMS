import { defineStore } from "pinia";
import {
  reqGetUserList,
  reqDeleteUser,
  reqUpdateUser,
  reqAddUSer,
} from "@/service/modules/main/system/user";

import { reqGetRoleList } from "@/service/modules/main/system/role";
import { reqGetDepartmentList } from "@/service/modules/main/system/department";

import type { IUserState } from "@/types/index";

const useSystemStore = defineStore("system", {
  state: (): IUserState => ({
    userList: [],
    userCount: 0,
    roleList: [],
    departmentList: [],
  }),
  actions: {
    // 获取用户列表
    async getUserList(data?: any) {
      const {
        data: { list, totalCount },
      } = await reqGetUserList(data);
      this.userList = list;
      this.userCount = totalCount;
    },

    //   删除一个用户
    async deleteUser(id: number) {
      const { code } = await reqDeleteUser(id);
      if (code === -1002) {
        ElMessage.error("系统数据不能删除!");
      } else {
        ElMessage.success("删除成功!");
        this.getUserList();
      }
    },

    //  修改用户
    async updateUser(id: any, userInfo: any) {
      const { code } = await reqUpdateUser(id, userInfo);
      if (code === 0) {
        return true;
      }
    },

    //  获取角色列表
    async getRoleList() {
      const { data } = await reqGetRoleList({ offset: 0, size: 100 });
      this.roleList = data.list;
    },

    //  获取部门列表
    async getDepartmentList() {
      const { data } = await reqGetDepartmentList({ offset: 0, size: 100 });
      this.departmentList = data.list;
    },

    //  添加用户
    async addUser(userInfo: any) {
      const { code } = await reqAddUSer(userInfo);
      if (code === 0) {
        return true;
      }
    },
  },
});

export default useSystemStore;
