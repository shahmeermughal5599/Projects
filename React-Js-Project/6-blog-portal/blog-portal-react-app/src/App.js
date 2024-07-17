import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FrontendLayout from "./pages/layouts/FrontendLayout";
import PostDetail from "./pages/PostDetail";
import { AUTHENTICATED_ROUTE, UNAUTHENTICATED_ROUTES } from "./utils/constant";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import CategoryDetail from "./pages/CategoryDetail";
import SearchDetail from "./pages/SearchDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthServices } from "./utils/authService";
import AdminLayout from "./pages/admin/layout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminAddCategory from "./pages/admin/AdminAddCategory";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminAddUser from "./pages/admin/AdminAddUser";
import AdminComments from "./pages/admin/AdminComments";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: 0,
      staleTime: 5 * 1000, //cache expiry time
    },
  },
});

function App() {
  const isUserLoggedIn = AuthServices.isUserIsLoggedIn();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontendLayout />}>
            <Route path={UNAUTHENTICATED_ROUTES.HOME} element={<Home />} />
            <Route
              path={UNAUTHENTICATED_ROUTES.POST_DETAIL}
              element={<PostDetail />}
            />
            <Route
              path={UNAUTHENTICATED_ROUTES.CATEGORY_DETAIL}
              element={<CategoryDetail />}
            />
            <Route
              path={UNAUTHENTICATED_ROUTES.SEARCH_DETAIL}
              element={<SearchDetail />}
            />
            <Route
              path={UNAUTHENTICATED_ROUTES.REGISTER}
              element={<Register />}
            />

            <Route path={UNAUTHENTICATED_ROUTES.LOGIN} element={<Login />} />
          </Route>

          {isUserLoggedIn && (
            <Route element={<AdminLayout />}>
              <Route
                path={AUTHENTICATED_ROUTE.DASHBOARD}
                element={<Dashboard />}
              />
              <Route
                path={AUTHENTICATED_ROUTE.CATEGORIES}
                element={<AdminCategories />}
              />
              <Route
                path={AUTHENTICATED_ROUTE.ADD_CATEGORY}
                element={<AdminAddCategory />}
              />
              <Route
                path={AUTHENTICATED_ROUTE.EDIT_CATEGORY}
                element={<AdminAddCategory />}
              />
              <Route
                path={AUTHENTICATED_ROUTE.USERS}
                element={<AdminUsers />}
              />
              <Route
                path={AUTHENTICATED_ROUTE.ADD_USER}
                element={<AdminAddUser />}
              />
              <Route
                path={AUTHENTICATED_ROUTE.EDIT_USER}
                element={<AdminAddUser />}
              />

              <Route
                path={AUTHENTICATED_ROUTE.COMMENTS}
                element={<AdminComments />}
              />
            </Route>
          )}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
