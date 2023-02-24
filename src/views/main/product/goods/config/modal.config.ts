export default {
  pageName: "goods",
  title: "商品",
  formItem: [
    {
      prop: "name",
      label: "商品名称",
      placeholder: "请输入商品名称",
      type: "input",
    },
    {
      prop: "newPrice",
      label: "价格",
      placeholder: "请输入价格",
      type: "input",
    },
    {
      prop: "desc",
      label: "商品描述",
      placeholder: "请输入商品描述",
      type: "input",
      onlyAdd: true,
    },
    {
      prop: "status",
      label: "商品状态",
      placeholder: "请选择商品状态",
      type: "select",
      onlyAdd: true,
      options: [
        {
          name: "启用",
          id: 1,
        },
        {
          name: "禁用",
          id: 0,
        },
      ],
    },
    {
      prop: "imgUrl",
      label: "图片路径",
      placeholder: "请输入图片路径",
      type: "input",
      onlyAdd: true,
    },
    {
      prop: "inventoryCount",
      label: "库存数量",
      placeholder: "请输入库存数量",
      type: "input",
      onlyAdd: true,
    },
    {
      prop: "saleCount",
      label: "销售数量",
      placeholder: "请输入销售数量",
      type: "input",
      onlyAdd: true,
    },
    {
      prop: "favorCount",
      label: "收藏数量",
      placeholder: "请输入收藏数量",
      type: "input",
      onlyAdd: true,
    },
    {
      prop: "address",
      label: "商品地址",
      placeholder: "请输入商地址",
      onlyAdd: true,
      type: "input",
    },
  ],
};
