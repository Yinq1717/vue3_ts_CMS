import { defineStore } from "pinia";
import {
  reqGetUserList,
  reqDeleteUser,
  reqUpdateUser,
  reqAddUSer,
  reqGetPageList,
  reqDeletePage,
  reqUpdatePage,
  reqAddPage,
} from "@/service/modules/main/system/user";

import type { IUserState } from "@/types/index";
import { ElMessage } from "element-plus";

const useSystemStore = defineStore("system", {
  state: (): IUserState => ({
    userList: [],
    userCount: 0,
    pageList: [],
    pageCount: 0,
  }),
  actions: {
    //  通用的增删查改方法
    //  查询数据
    async getPageListAction(pageName: string, queryInfo?: any) {
      const {
        data: { list, totalCount },
      } = await reqGetPageList(pageName, queryInfo);
      this.pageList = list;
      this.pageCount = totalCount;
    },

    //  删除一条数据
    async deletePageAction(pageName: string, id: number) {
      const { code } = await reqDeletePage(pageName, id);
      if (code === 0) {
        this.getPageListAction(pageName);
        ElMessage.success("删除成功!");
      }
    },

    //  修改一条数据
    async updatePageAction(pageName: string, id: any, formData: any) {
      const { code } = await reqUpdatePage(pageName, id, formData);
      if (code === 0) {
        this.getPageListAction(pageName);
        ElMessage.success("修改成功!");
      }
    },

    //  添加一条数据
    async addPageAction(pageName: string, userInfo: any) {
      // if (pageName === "users") {
      //   userInfo.cellphone = userInfo.cellphone;
      // }

      const { code } = await reqAddPage(pageName, userInfo);
      if (code === 0) {
        this.getPageListAction(pageName);
        ElMessage.success("修改成功!");
      }
    },
  },
});

export default useSystemStore;
