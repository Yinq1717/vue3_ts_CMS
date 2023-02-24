import useMainStore from "@/store/main/main";
import { storeToRefs } from "pinia";
const mainStore = useMainStore();
const { roleList, departmentList } = storeToRefs(mainStore);
export default {
  title: "用户",
  pageName: "users",
  formItem: [
    {
      prop: "name",
      label: "用户名",
      placeholder: "请输入用户名",
      type: "input",
    },
    {
      prop: "realname",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
      type: "input",
    },
    {
      prop: "password",
      label: "密码",
      placeholder: "请输入密码",
      type: "input",
      onlyAdd: true,
    },
    {
      prop: "cellphone",
      label: "电话号码",
      placeholder: "请输入电话号码",
      type: "custom",
    },
    {
      prop: "roleId",
      label: "选择角色 ",
      placeholder: "请选择角色",
      type: "select",
      options: roleList.value,
    },
    {
      prop: "departmentId",
      label: "选择部门",
      placeholder: "请选择部门",
      type: "select",
      options: departmentList.value,
    },
  ],
};
