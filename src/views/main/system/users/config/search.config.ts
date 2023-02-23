export default {
  formItem: [
    {
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
      prop: "name",
    },
    {
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
      prop: "realname",
    },
    {
      type: "input",
      label: "手机号码 ",
      placeholder: "请输入手机号码",
      prop: "cellphone",
    },
    {
      type: "select",
      label: "状态",
      placeholder: "请选择状态",
      prop: "enable",
      options: [
        {
          label: "启用",
          value: 1,
        },
        {
          label: "禁用",
          value: 0,
        },
      ],
    },
    {
      type: "date-picker",
      label: "创建时间",
      prop: "createAt",
    },
  ],
};
