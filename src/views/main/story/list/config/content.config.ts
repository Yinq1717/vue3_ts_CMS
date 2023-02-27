export default {
   title: "故事",
   pageName: "story",
   tableProps: [
      {
         type: "index",
         label: "序号",
         width: "70",
      },
      {
         prop: "title",
         label: "故事标题",
         width: "160",
      },
      {
         prop: "content",
         label: "我的故事",
         width: "800",
      },
      {
         type: "time",
         prop: "createAt",
         label: "创建时间",
      },
   ],
};
