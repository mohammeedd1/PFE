
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { useEffect } from "react";
import ScrollToTop from "./components/common/ScrollTop";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";

import HomePage from "./pages/home";

import JobListPage from "./pages/job-list";

import JobSingleDynamic from "./pages/job-single";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import EmployerListPage from "./pages/employers-list";

import EmployersSingle from "./pages/employers-single";

import CandidateListPage from "./pages/candidates-list";

import CandidateSingleDynamic from "./pages/candidates-single/all-applicants";

import BlogListpage from "./pages/blog/blog-list";

import BlogDetailsDynamic from "./pages/blog/blog-details";
import AboutPage from "./pages/others/about";
import PricingPage from "./pages/others/pricing";
import FaqPage from "./pages/others/faq";
import TermsPage from "./pages/others/terms";
import InvoicePage from "./pages/others/invoice";
import ContactPage from "./pages/others/contact";
import NotFoundPage from "./pages/others/404";
import DashboardEmploeeDBPage from "./pages/employers-dashboard/dashboard";
import CompanyProfileEmploeeDBPage from "./pages/employers-dashboard/company-profile";
import PostJobsEmploeeDBPage from "./pages/employers-dashboard/post-jobs";
import ManageJobsEmploeeDBPage from "./pages/employers-dashboard/manage-jobs";
import AllApplicantsEmploeesPage from "./pages/employers-dashboard/all-applicants";
import ShortListedResumeEmploeeDBPage from "./pages/employers-dashboard/shortlisted-resumes";
import PackageEmploeeDBPage from "./pages/employers-dashboard/packages";
import MessageEmploeeDBPage from "./pages/employers-dashboard/messages";
import ResumeAlertsEmploeeDBPage from "./pages/employers-dashboard/resume-alerts";
import ChangePasswordEmploeeDBPage from "./pages/employers-dashboard/change-password";
import DashboardPage from "./pages/candidates-dashboard/dashboard";
import AppliedJobsPage from "./pages/candidates-dashboard/applied-jobs";
import ChangePasswordPage from "./pages/candidates-dashboard/change-password";
import CVMannagerPage from "./pages/candidates-dashboard/cv-manager";
import JobAlertPage from "./pages/candidates-dashboard/job-alerts";
import MessageesPage from "./pages/candidates-dashboard/messages";
import MyProfilePage from "./pages/candidates-dashboard/my-profile";
import MyResumePage from "./pages/candidates-dashboard/my-resume";
import PackagePage from "./pages/candidates-dashboard/packages";
import ShortListedJobsPage from "./pages/candidates-dashboard/short-listed-jobs";
import LoginPage from "./pages/others/login";
import RegisterPage from "./pages/others/register";
import ShopListPage from "./pages/shop/shop-list";
import ShopSingleDyanmic from "./pages/shop/shop-single";
import CartPage from "./pages/shop/cart";
import CheckoutPage from "./pages/shop/checkout";
import OrderCompletedPage from "./pages/shop/order-completed";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);


  return (
    <>
    <Provider store={store}>
          <div className="page-wrapper">
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Home/>} />
                  
                  <Route path="home" element={<HomePage />} />

                  
                  <Route path="job-list" element={<JobListPage/>} />
                  
                 
                  <Route path="job-single" element={<JobSingleDynamic/>} />
                  

                  
                  <Route path="employers-list" element={<EmployerListPage />} />

                  <Route path="employers-single" element={<EmployersSingle />} />

                  
                  <Route path="candidates-list" element={<CandidateListPage />} />

                  <Route path="candidates-single" element={<CandidateSingleDynamic />} />
                  

                  
                  <Route path="blog-list" element={<BlogListpage />} />
                  <Route path="blog-details" element={<BlogDetailsDynamic />} />

                  <Route path="about" element={<AboutPage />} />
                  <Route path="pricing" element={<PricingPage />} />
                  <Route path="faq" element={<FaqPage />} />
                  <Route path="terms" element={<TermsPage />} />
                  <Route path="invoice" element={<InvoicePage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                  <Route path="404" element={<NotFoundPage />} />
                  <Route path="*" element={<NotFoundPage />} />

                  <Route path="employers-dashboard" >
                    <Route path="dashboard" element={<DashboardEmploeeDBPage/>} />
                    <Route path="company-profile" element={<CompanyProfileEmploeeDBPage/>} />
                    <Route path="post-jobs" element={<PostJobsEmploeeDBPage/>} />
                    <Route path="manage-jobs" element={<ManageJobsEmploeeDBPage/>} />
                    <Route path="all-applicants" element={<AllApplicantsEmploeesPage/>} />
                    <Route path="shortlisted-resumes" element={<ShortListedResumeEmploeeDBPage/>} />
                    <Route path="packages" element={<PackageEmploeeDBPage/>} />
                    <Route path="messages" element={<MessageEmploeeDBPage/>} />
                    <Route path="resume-alerts" element={<ResumeAlertsEmploeeDBPage/>} />
                    <Route path="change-password" element={<ChangePasswordEmploeeDBPage/>} />
            
                    
                  </Route>
                 
                  <Route path="candidates-dashboard" >
                    <Route path="dashboard" element={<DashboardPage/>} />
                    <Route path="applied-jobs" element={<AppliedJobsPage/>} />
                    <Route path="change-password" element={<ChangePasswordPage/>} />
                    <Route path="cv-manager" element={<CVMannagerPage/>} />
                    <Route path="job-alerts" element={<JobAlertPage/>} />
                    <Route path="messages" element={<MessageesPage/>} />
                    <Route path="my-profile" element={<MyProfilePage/>} />
                    <Route path="my-resume" element={<MyResumePage/>} />
                    <Route path="packages" element={<PackagePage/>} />
                    <Route path="short-listed-jobs" element={<ShortListedJobsPage/>} />

                  </Route>

                  <Route path="shop" >

                    <Route path="shop-list" element={<ShopListPage/>} />
                    <Route path="shop-single/:id" element={<ShopSingleDyanmic/>} />
                    <Route path="cart" element={<CartPage/>} />
                    <Route path="checkout" element={<CheckoutPage/>} />
                    <Route path="order-completed" element={<OrderCompletedPage/>} />
                  </Route>

                </Route>
              </Routes>
              <ScrollTopBehaviour/>
            </BrowserRouter>

           

            {/* Toastify */}
            <ToastContainer
              position="bottom-right"
              autoClose={500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            {/* <!-- Scroll To Top --> */}
            <ScrollToTop />
          </div>
        </Provider>
     
    </>
  )
}

export default App
