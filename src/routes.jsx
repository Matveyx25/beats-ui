import React from "react";
import {
  Navigate,
  Route,
  Routes as RouterDomRoutes,
} from "react-router-dom";
import { useProfile } from "hooks/useProfile";
import { MainLayout } from './components/layouts/main-layout/main';
import { LoginPage } from "pages/auth/LoginPage";
import { RegisterPage } from 'pages/auth/RegisterPage';

export function Routes() {
	const {data: profile} = useProfile()


  function hasJWT() {
    let flag = false;
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }

  return (
    <>
      <RouterDomRoutes>
        {hasJWT() ?
						{
							client: (
								<Route element={<MainLayout />}>
									
								</Route>
							),
							author: (
								<Route element={<MainLayout />}>

								</Route>
							),
						}[profile?.role] : (
					<>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/sign-up/:referral?" element={<RegisterPage />} />
						<Route path="*" element={<Navigate to="/login" />} />
					</>
				)
       }
      </RouterDomRoutes>
    </>
  );
}
