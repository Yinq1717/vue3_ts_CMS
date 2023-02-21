import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
// 格式化utc事件
export function formatUTC(timeString: string, format = "YYYY/MM/DD  HH:mm:ss") {
  return dayjs.utc(timeString).utcOffset(8).format(format);
}
