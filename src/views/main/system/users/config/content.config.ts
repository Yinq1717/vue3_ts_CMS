export default {
  title: "用户",
  pageName: "users",
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
      label: "用户名",
      width: "120",
    },
    {
      prop: "realname",
      label: "真实姓名",
      width: "120",
    },
    {
      prop: "cellphone",
      label: "手机号码",
      width: "120",
    },
    {
      type: "custom",
      prop: "enable",
      label: "状态",
      width: "120",
      slotName: "enable",
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
