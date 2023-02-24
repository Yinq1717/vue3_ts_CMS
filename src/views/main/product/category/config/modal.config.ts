import useMainStore from "@/store/main/main";

export default {
  pageName: "category",
  title: "商品类别",
  formItem: [
    {
      prop: "name",
      label: "类别名称",
      placeholder: "请输入商品类别",
      type: "input",
    },
  ],
};
