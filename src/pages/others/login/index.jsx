

import LogIn from "@/components/pages-menu/login";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Login || RecruitEase - Job Borad ',
  description:
    'RecruitEase - Job Borad ',
  
}



const LoginPage = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      
      <LogIn />
    </>
  );
};

export default LoginPage
