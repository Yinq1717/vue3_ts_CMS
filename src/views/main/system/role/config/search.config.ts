export default {
  formItem: [
    {
      type: "input",
      placeholder: "请输入角色名称",
      label: "角色名称",
      prop: "name",
    },
    {
      type: "input",
      placeholder: "请输入权限介绍",
      label: "权限介绍",
      prop: "intro",
    },
    {
      type: "date-picker",
      label: "创建时间",
      prop: "createAt",
    },
  ],
};
