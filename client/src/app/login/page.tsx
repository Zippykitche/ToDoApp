"use client";

import { useState } from "react";
import { loginUser } from "../utils/authApi";
import { saveToken } from "../utils/auth";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");

    const res = await loginUser(email, password);

    if (!res.token) {
      setError(res.message || "Invalid credentials");
      return;
    }

    saveToken(res.token);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
bg-linear-to-br from-purple-900/70 via-blue-900/60 to-black">

  <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md 
  rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 
  shadow-2xl py-10 px-6 sm:px-10">

    <CardContent>
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 
        flex items-center justify-center mb-4">
          <User className="text-white/80" size={48} />
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          className="bg-transparent border-b border-white/30 
          rounded-none text-white placeholder-white/60"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          className="bg-transparent border-b border-white/30 
          rounded-none text-white placeholder-white/60"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-center text-sm">{error}</p>
        )}

        <Button className="cursor-pointer w-full bg-linear-to-r from-purple-700 
        to-blue-700 text-white rounded-xl py-2">
          LOGIN
        </Button>

        <div className="flex justify-between text-white/70 text-xs sm:text-sm mt-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-white" />
            <span>Remember me</span>
          </label>
        </div>
      </form>

      <p className="text-center text-white/80 text-xs sm:text-sm mt-4">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-400 hover:underline">
          Sign Up
        </Link>
      </p>
    </CardContent>
  </Card>
</div>

  );
}
