export function savedToken(token) {
  localStorage.setItem("auth_token", token);
}
export function getToken() {
  return localStorage.getItem("auth_token");
}
