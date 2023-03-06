// 交换数组两个元素位置的方法
export default function changePosition(arr: any[], firstIndex: number, secondIndex: number) {
   arr.splice(firstIndex - 1, 1, ...arr.splice(secondIndex - 1, 1, arr[firstIndex - 1]));
}
