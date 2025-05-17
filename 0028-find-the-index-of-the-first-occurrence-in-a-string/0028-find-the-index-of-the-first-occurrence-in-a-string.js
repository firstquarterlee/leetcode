/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  // needle이 비어있다면 항상 0 반환 (문제 조건상 생략 가능)
  if (needle === "") return 0;

  // haystack의 길이에서 needle의 길이만큼 빼고 순회
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // 해당 위치부터 needle 길이만큼 자른 부분이 needle과 같다면
    if (haystack.substring(i, i + needle.length) === needle) {
      return i; // 현재 인덱스 반환
    }
  }

  return -1; // 찾지 못한 경우
}