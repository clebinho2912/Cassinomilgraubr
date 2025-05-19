import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

export default function CasinoMilGrauBR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-yellow-700 text-white p-6">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold mb-2">Casino Mil Grau BR</h1>
        <p className="text-lg">O cassino clássico brasileiro com tudo que você precisa!</p>
      </header>

      <section className="max-w-md mx-auto bg-red-800 p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-4">Entrar / Cadastrar</h2>
        <Input className="mb-3" placeholder="Email" />
        <Input className="mb-3" type="password" placeholder="Senha" />
        <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black">Entrar</Button>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Slots", "Roleta", "Blackjack", "Poker", "Cassino Ao Vivo", "Bacará", "Crash", "Raspadinhas"].map((jogo) => (
          <Card key={jogo} className="bg-red-800 text-white hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center font-semibold text-lg">{jogo}</CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center mt-10 text-sm text-yellow-200">
        © 2025 Casino Mil Grau BR — Todos os direitos reservados.
      </footer>
    </div>
  );
}