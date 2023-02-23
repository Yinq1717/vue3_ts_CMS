export default {
  title: "部门",

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
      label: "部门名称",
      width: "120",
    },
    {
      prop: "leader",
      label: "部门领导",
      width: "120",
    },
    {
      prop: "parentId",
      label: "上级部门",
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
  pageName: "department",
};
