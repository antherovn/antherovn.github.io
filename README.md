# Anthero Vieira Neto — Portfolio

Portfolio pessoal bilíngue com trajetória, projetos selecionados e áreas de atuação em engenharia de software, arquitetura, DevOps e inteligência artificial aplicada.

## Desenvolvimento local

Requisitos: [Bun](https://bun.sh/) 1.2 ou superior.

```sh
bun install
bun run dev
```

A aplicação ficará disponível em `http://localhost:3000` ou na porta informada pelo terminal.

## Comandos

```sh
bun run dev       # ambiente local
bun run build     # versão de produção
bun run lint      # verificação de código
bun run format    # formatação
```

## Publicação

### Lovable

Use **Publish** no editor para disponibilizar o site. Novas alterações visuais entram no ar ao selecionar **Update** na janela de publicação.

### GitHub

1. Crie a organização `anthero` e o repositório `anthero`.
2. No Lovable, abra o menu **+**, escolha **GitHub → Connect project** e autorize sua conta.
3. Selecione a organização `anthero` e conecte este projeto ao repositório.
4. O código passará a ter sincronização bidirecional automática.

Para hospedar fora do Lovable, use uma plataforma compatível com aplicações TanStack Start, como Cloudflare ou Vercel. O GitHub Pages serve apenas arquivos estáticos e não executa o servidor da aplicação; o repositório continua sendo a fonte oficial do código mesmo quando a hospedagem está em outro serviço.

## Conteúdo

Os textos em português e inglês ficam centralizados em `src/routes/index.tsx`. Imagens públicas dos projetos usam o fluxo de assets do Lovable.

## Tecnologias

- TanStack Start
- React 19
- TypeScript
- Tailwind CSS 4