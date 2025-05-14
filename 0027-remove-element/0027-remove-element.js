/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let k = 0; // 남길 숫자의 개수를 세는 변수

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // val이 아닌 숫자를 앞으로 옮겨 적기
      k++; // 남긴 숫자 개수 증가
    }
  }

  return k; // val 아닌 숫자의 개수
}