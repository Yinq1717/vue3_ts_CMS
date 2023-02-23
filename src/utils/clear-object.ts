export default function (obj: any) {
  if (typeof obj !== "object") return;
  runClear(obj);
  function runClear(obj: any) {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object") {
        runClear(obj[key]);
      } else {
        obj[key] = "";
      }
    });
  }
}
