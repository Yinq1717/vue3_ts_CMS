import useLoginStore from "@/store/login/login";
const { permissionList } = useLoginStore();
export function usePermissions(pageName: string, action: string) {
  const result = permissionList.find((item) => {
    return item.includes(`${pageName}:${action}`);
  });
  return !!result;
}
