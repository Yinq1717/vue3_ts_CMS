export default {
  formItem: [
    {
      type: "input",
      label: "商品名称",
      prop: "name",
      placeholder: "请输入商品名称",
    },
    {
      type: "input",
      label: "商品地址",
      prop: "address",
      placeholder: "请输入商品地址",
    },
    {
      type: "select",
      label: "商品状态",
      prop: "status",
      placeholder: "请选择商品状态",
      options: [
        {
          label: "上架",
          value: 1,
        },
        {
          label: "下架",
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
