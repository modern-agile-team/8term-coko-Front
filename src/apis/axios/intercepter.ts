import api from './instance';
api.interceptors.request.use(config => {
  //요청 성공 직전 호출
  //헤더에 인가 토큰 부착
  //로컬스토리지에 저장한다고 가정한다면
  const accessToken: string | null = localStorage.getItem('Token');
  if (accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
api.interceptors.response.use(
  //http status가 200번대인 경우 호출
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
    //http status가 에러 코드인경우 실행
  }
);
