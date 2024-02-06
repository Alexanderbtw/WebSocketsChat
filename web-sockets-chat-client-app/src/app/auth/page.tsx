"use client";
import { AuthForm } from "../components/AuthForm/authForm";
import style from "./page.module.css";


export default function Auth() {
  return (
    <main className={`${style.body}`}>
      <AuthForm />
    </main>
  );
}
