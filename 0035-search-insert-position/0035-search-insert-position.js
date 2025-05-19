/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // 찾았으면 그 인덱스 반환
    } else if (nums[mid] < target) {
      left = mid + 1; // 오른쪽으로 이동
    } else {
      right = mid - 1; // 왼쪽으로 이동
    }
  }

  // 못 찾았으면 들어갈 위치는 left
  return left;
}