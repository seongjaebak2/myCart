//토큰만 제거하면 자동 로그아웃되고 홈으로 이동
export default function Logout() {
  localStorage.removeItem("token");
  window.location = "/";
  return null;
}
