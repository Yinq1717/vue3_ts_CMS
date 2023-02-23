export default {
  pageName: "role",
  title: "角色",
  formItem: [
    {
      prop: "name",
      label: "角色名称",
      placeholder: "请输入角色名称",
      type: "input",
    },
    {
      prop: "intro",
      label: "角色描述",
      placeholder: "请输入角色描述",
      type: "input",
    },
    {
      prop: "menuList",
      type: "custom",
      label: "选择权限",
      initValue: [],
    },
  ],
};
