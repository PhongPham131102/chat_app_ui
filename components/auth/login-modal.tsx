"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema, registerSchema } from "@/lib/validations/auth";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs text-muted-foreground">hoặc</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function ErrorText({ name }: { name: string }) {
  return (
    <ErrorMessage
      name={name}
      component="p"
      className="text-xs text-red-500 mt-1"
    />
  );
}

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log("Login values:", values);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="login-email"
            >
              Email
            </label>
            <Field
              as="input"
              id="login-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className={`rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 transition ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-input"
              }`}
            />
            <ErrorText name="email" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-foreground"
                htmlFor="login-password"
              >
                Mật khẩu
              </label>
              <button
                type="button"
                className="text-xs text-main hover:underline cursor-pointer"
              >
                Quên mật khẩu?
              </button>
            </div>
            <Field
              as="input"
              id="login-password"
              name="password"
              type="password"
              placeholder="••••••••"
              className={`rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 transition ${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-input"
              }`}
            />
            <ErrorText name="password" />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 bg-main text-white rounded-lg hover:bg-main/90 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? "Đang xử lý..." : "Đăng nhập"}
          </Button>

          <Divider />

          <button
            type="button"
            className="flex items-center justify-center gap-3 w-full border border-input rounded-lg py-2.5 text-sm font-medium hover:bg-muted transition cursor-pointer"
          >
            <GoogleIcon />
            Đăng nhập với Google
          </button>
        </Form>
      )}
    </Formik>
  );
}

function RegisterForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log("Register values:", values);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="reg-name"
            >
              Họ và tên
            </label>
            <Field
              as="input"
              id="reg-name"
              name="name"
              type="text"
              placeholder="Họ và tên của bạn"
              className={`rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 transition ${
                errors.name && touched.name ? "border-red-500" : "border-input"
              }`}
            />
            <ErrorText name="name" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="reg-email"
            >
              Email
            </label>
            <Field
              as="input"
              id="reg-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className={`rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 transition ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-input"
              }`}
            />
            <ErrorText name="email" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="reg-password"
            >
              Mật khẩu
            </label>
            <Field
              as="input"
              id="reg-password"
              name="password"
              type="password"
              placeholder="••••••••"
              className={`rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 transition ${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-input"
              }`}
            />
            <ErrorText name="password" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-foreground"
              htmlFor="reg-confirm"
            >
              Xác nhận mật khẩu
            </label>
            <Field
              as="input"
              id="reg-confirm"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              className={`rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 transition ${
                errors.confirmPassword && touched.confirmPassword
                  ? "border-red-500"
                  : "border-input"
              }`}
            />
            <ErrorText name="confirmPassword" />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 bg-main text-white rounded-lg hover:bg-main/90 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? "Đang xử lý..." : "Tạo tài khoản"}
          </Button>

          <Divider />

          <button
            type="button"
            className="flex items-center justify-center gap-3 w-full border border-input rounded-lg py-2.5 text-sm font-medium hover:bg-muted transition cursor-pointer"
          >
            <GoogleIcon />
            Đăng ký với Google
          </button>
        </Form>
      )}
    </Formik>
  );
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md w-full rounded-2xl p-0 overflow-hidden gap-0">
        {/* Gradient header */}
        <div className="bg-main px-6 pt-6 pb-5">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-semibold">
              {tab === "login" ? "Chào mừng trở lại" : "Tạo tài khoản mới"}
            </DialogTitle>
            <DialogDescription className="text-white/70 text-sm mt-1">
              {tab === "login"
                ? "Đăng nhập để tiếp tục sử dụng What App"
                : "Tham gia cộng đồng What App ngay hôm nay"}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Tabs + Forms */}
        <div className="px-6 py-5">
          <Tabs
            value={tab}
            onValueChange={(v) => setTab(v as "login" | "register")}
          >
            <TabsList className="w-full mb-5 min-h-11 bg-muted rounded-lg h-10">
              <TabsTrigger
                value="login"
                className="flex-1 text-sm data-[state=active]:bg-main data-[state=active]:text-white rounded-md transition-all cursor-pointer"
              >
                Đăng nhập
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="flex-1 text-sm data-[state=active]:bg-main data-[state=active]:text-white rounded-md transition-all cursor-pointer"
              >
                Đăng ký
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-0">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register" className="mt-0">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
