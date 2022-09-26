import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 액세스 토큰
// 쿠키에 저장
export const setAccessToken = (accessToken) => {
  return cookies.set("access_token", accessToken, {
    sameSite: "none",
    // path: "/",
  });
};

// 쿠키에서 불러오기
export const getAccessToken = () => {
  return cookies.get("access_token");
};

// 리프레쉬 토큰
export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set("refresh_token", refreshToken, {
    sameSite: "none",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookies.get("refresh_token");
};

export const removeCookieToken = () => {
  return cookies.remove("refresh_token", { sameSite: "none", path: "/" });
};
