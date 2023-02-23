export default {
  title: "角色",
  pageName: "role",
  tableProps: [
    {
      type: "selection",
      width: "70",
    },
    {
      type: "index",
      label: "序号",
      width: "70",
    },

    {
      prop: "name",
      label: "角色名称",
      width: "120",
    },
    {
      prop: "intro",
      label: "角色权限",
      width: "120",
    },
    {
      type: "time",
      prop: "createAt",
      label: "创建时间",
    },
    {
      type: "time",
      prop: "updateAt",
      label: "更新时间",
    },
    {
      label: "操作",
      width: "120",
      type: "handle",
    },
  ],
};
