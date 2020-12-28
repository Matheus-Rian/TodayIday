# Change Detection

## O que é?

- Mecanismo responsável por notar mudanças no estado da nota aplicação e refletir esse novo estado para o usuário
- Processo executados nas views, começando pelo AppComponent
- Unidirecional

**O que causa mudanças no estado da nossa aplicação?**

- Eventos: click, focus, submit, etc
- HTTP requests
- Timers: setTimeout, setInterval