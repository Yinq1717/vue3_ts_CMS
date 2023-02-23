import useMainStore from "@/store/main/main";
const mainStore = useMainStore();

export default {
  pageName: "deprtment",
  title: "菜单",
  formItem: [
    {
      prop: "name",
      label: "菜单名称",
      placeholder: "请输入部门名称",
      type: "input",
    },
    {
      prop: "leader",
      label: "领导名称",
      placeholder: "请输入领导名称",
      type: "input",
    },
    {
      prop: "parentId",
      label: "上级部门",
      placeholder: "请选择上级部门",
      type: "select",
      options: mainStore.departmentList,
    },
  ],
};
