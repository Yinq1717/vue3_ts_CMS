export default function (obj: any) {
   if (typeof obj !== "object") return;
   for (let key in obj) {
      obj[key] = "";
   }
}
