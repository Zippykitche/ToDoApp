"use client";

import { useState } from "react";
import { registerUser } from "../utils/authApi";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setError("");

    const res = await registerUser(name, email, password);

    if (res.error || res.message === "User already exists") {
      setError(res.message || "Registration failed");
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 
bg-linear-to-r from-purple-900/70 via-blue-900/60 to-black">

  <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md 
  rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 
  shadow-2xl py-10 px-6 sm:px-10">

    <CardContent>
      <h2 className="text-center text-white text-xl sm:text-2xl font-semibold mb-6">
        Create Account
      </h2>

      <form className="space-y-4" onSubmit={handleRegister}>
        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent border-b border-white/30 
          rounded-none text-white placeholder-white/60"
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border-b border-white/30 
          rounded-none text-white placeholder-white/60"
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border-b border-white/30 
          rounded-none text-white placeholder-white/60"
        />

        {error && (
          <p className="text-red-400 text-center text-sm">{error}</p>
        )}

        <Button className="cursor-pointer w-full bg-linear-to-r from-purple-700 
        to-blue-700 text-white rounded-xl py-2">
          SIGN UP
        </Button>
      </form>

      <p className="text-center text-white/80 text-xs sm:text-sm mt-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-400 hover:underline">
          Login
        </Link>
      </p>
    </CardContent>
  </Card>
</div>

  );
}
