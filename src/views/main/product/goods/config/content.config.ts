export default {
   title: "商品",
   pageName: "goods",
   tableProps: [
      // {
      //    type: "index",
      //    label: "序号",
      //    width: "70",
      // },
      {
         prop: "name",
         label: "商品名称",
         width: "120",
         type: "custom",
      },
      //  {
      //    prop: "oldPrice",
      //    label: "旧价格",
      //    width: "70",
      //  },
      {
         prop: "newPrice",
         label: "价格",
         width: "100",
         type: "custom",
      },

      {
         prop: "desc",
         label: "商品描述",
         width: "120",
         type: "custom",
      },
      {
         prop: "status",
         label: "状态",
         width: "100",
         type: "custom",
      },
      {
         prop: "imgUrl",
         label: "图片",
         type: "custom",
      },
      {
         prop: "inventoryCount",
         label: "库存",
         width: "70",
      },
      {
         prop: "saleCount",
         label: "销量",
         width: "70",
      },

      {
         prop: "favorCount",
         label: "收藏",
         width: "70",
      },

      {
         prop: "address",
         label: "地址",
         width: "70",
      },
      {
         type: "time",
         prop: "createAt",
         label: "创建时间",
      },

      {
         label: "操作",

         type: "handle",
      },
   ],
};
