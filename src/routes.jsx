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
import { Feed } from "./pages/client/Feed/Feed";
import { Author } from "./pages/client/Author/Author";
import { Beat } from "./pages/client/Beat/Beat";
import { Profile } from "./pages/author/Profile/Profile";

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
						<>
							{{
								'author': (
									<Route element={<MainLayout />}>
										<Route path="/" element={<Feed />} />
										<Route path="/profile" element={<Profile />} />
										<Route path="/author/:authorId" element={<Author />} />
										<Route path="/beat/:beatId" element={<Beat />} />
									</Route>
								),
								'client': (
									<Route element={<MainLayout />}>
										<Route path="/" element={<Feed />} />
										<Route path="/author/:authorId" element={<Author />} />
										<Route path="/beat/:beatId" element={<Beat />} />
									</Route>
								),
							}[profile?.role?.name]}
						</>
						 : (
					<>
						<Route path="/" element={<LoginPage />} />
						<Route path="/sign-up" element={<RegisterPage />} />
						<Route path="*" element={<Navigate to="/" />} />
					</>
				)
       }
      </RouterDomRoutes>
    </>
  );
}
