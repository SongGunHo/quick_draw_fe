import React, { useState, useCallback, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommonContext from '../../global/contexts/CommonContext';
import LoginForm from '../components/LoginForm';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    actions : {setIsLogin, setLoggedMember},
  }= useContext(CommonContext);
  const [searchPaarams] = useSearchParams();
  const [navigator]= useState({});



  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const errors = {};
      let hasErrors = false;
      // 필수 항목 검증 S
      const requiredFields = {
        email: '이메일을 입력하세요.',
        password: '비밀번호를 입력하세요.',
      };

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field]?.trim()) {
          errors[field] = message;
          hasErrors = true;
        }
      }
      // 필수 항목 검증 E
      setErrors(errors);
      if (hasErrors) {
        return; // 검증 실패시 다음 로직 처리 X
      }

      // 로그인 처리..
      // 아랭 데이터는 서버에서 전송된 인증된 회원 정보 가정 한것 
      const member  ={
        email :'user01@test.org',
        name :'사용자01',
      };
      setIsLogin(true);
      setLoggedMember(member);
      // 양식 초기화 
      setForm({});
      // 로그인 완료시 이동 
      const redirectUrl = searchPaarams.get("redirectUrl") ?? '/';
      //navigator(redirectUrl, {replace: true})

    },
    [form,setIsLogin, setLoggedMember. searchPaarams, navigator],
  ); 

  return (
    <LoginForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

export default React.memo(LoginContainer);
