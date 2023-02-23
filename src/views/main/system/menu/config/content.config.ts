export default {
  title: "菜单",
  pageName: "menu",
  noPagination: true,
  tableProps: [
    {
      prop: "name",
      label: "菜单名称",
      width: "160",
    },
    {
      prop: "type",
      label: "级别",
      width: "100",
    },
    {
      prop: "url",
      label: "菜单URL",
      width: "120",
    },
    {
      prop: "icon",
      label: "菜单icon",
      width: "120",
    },
    {
      prop: "sort",
      label: "排序",
      width: "100",
    },
    {
      prop: "permission",
      label: "权限",
      width: "160",
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
