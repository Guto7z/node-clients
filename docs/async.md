# Async

Rodar de forma assíncrona quer dizer que o código não precisa esperar uma tarefa demorada para continuar executando os resto delas.

Exemplo: Vamos supor que você tem 3 métodos.
- método 1
- método 2
- método 3

Quando executamos esses métodos todos de uma vez, supondo que o método 2 tem uma alta carga de dados, ou seja demora mais para ser executado, o código vai rodar por completo o método 1 e 3 enquando termina de executar o método 2 sem bloquear o resto do fluxo, ou seja ele não trava o programa.

Exemplo com código:

## Síncrono

```javascript

const result = sleep(5 segundos);

console.log("Isso é executado depois de 5 segundos.")
```

## Assíncrono

```javascript

setTimeout(() => {
    console.log("ok");
}, 5000);

console.log("isso roda na hora!");

/**
 * isso roda na hora! (executou primeiro)
 * 
 * ok (executou depois de 5 segundos sem bloquear o fluxo.)
 *
 * /