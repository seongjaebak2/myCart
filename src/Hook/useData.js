import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

export default function useData(url, customConfig, deps) {
  const [data, setData] = useState([]); //성공시 데이터
  const [error, setError] = useState(""); //에러시 에러메세지
  const [isLoading, setIsLoading] = useState(false); //로딩상태 true일때 로딩중

  //url 주소로 백엔드 서버에 요청해서 데이를 받음, 에러발생시 에러메세지 받음
  useEffect(
    () => {
      setIsLoading(true); //로딩중(시작)
      apiClient
        .get(url, customConfig)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    },
    deps ? deps : []
  ); //deps가 변경될때마다 재실행
  return { data, error, isLoading }; //함수사용시 결과는 데이터와 에러,로딩상태 리턴
}
