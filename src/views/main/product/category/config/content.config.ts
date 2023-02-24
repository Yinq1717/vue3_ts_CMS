export default {
  title: "类别",
  pageName: "category",
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
      label: "类别名称",
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
