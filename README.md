
### 황경태
- email : forthezorba@gmail.com
- Github: https://github.com/forthezorba

## 프로젝트

### 주몽(JOOMONG)
주몽은 생산성 웹앱입니다. 북마크와 포스팅을 그룹별로 관리할 수 있습니다. 향후 마인드맵 등 추가 예정입니다.

- (http://52.78.135.163/)

## 이미지
<div>
<img src="https://joomongimage.s3.ap-northeast-2.amazonaws.com/linkCapture.jpg" width="220px" >
<img src="https://joomongimage.s3.ap-northeast-2.amazonaws.com/blogCapture.jpg" width="220px" >
</div>

## 사이트 이용 예시
- USER (user@naver.com / 123123)   

## 웹사이트 구성
- 헤더컴포넌트 : HOME/SITE/BLOG           Signin/Signup
- SITE page : 
   - 그룹/ 소그룹 형식으로 이름/url을 입력하면 북마크가 저장됩니다.
- BLOG page : 
   - 그룹/ 소그룹 형식으로 quill 라이브러리를 활용해 포스팅을 작성할 수 있습니다.

## 사용기술
- 로그인/회원가입 : react-router를 이용 /login /register 각 페이지로 routing 합니다.
- 권한 : jsonWebToken을 이용해 토큰을 발급, 쿠키를 통해 인증합니다.
- 글쓰기 : quill을 활용해 구현했습니다.
- DB : mongoDB를 통해 구현했습니다.
- 서버 : express를 통해 서버에서의 로직을 구현했습니다.
- CLOUD SERVICE : AWS ec2를 사용했습니다.
- CSS : node-sass, styled-component, antd 를 사용했습니다.
- REACT: auth를 hoc로 활용, 모든 페이지에서 권한을 검사하고 userdata를 받을 수 있습니다. 그룹별 기능 구현에 초점을 맞춰서 component의 관계를 활용했습니다.


