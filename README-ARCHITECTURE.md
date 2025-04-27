# Clean Architecture e DDD no Terminal Interativo

Esta refatoração aplica os princípios de **Clean Architecture**, **Domain-Driven Design (DDD)** e **Object Calisthenics** para criar uma arquitetura que separa claramente o domínio da UI.

## Estrutura do Projeto

```
src/
├── domain/             # Camada de domínio (regras de negócio)
│   └── terminal/       
│       ├── Command.ts            # Objeto de valor para comandos
│       ├── TerminalLine.ts       # Entidade para linhas do terminal
│       ├── CommandRepository.ts  # Interface do repositório e handler
│       └── commands/             # Comandos específicos
│           ├── HelpCommand.ts
│           ├── WhoAmICommand.ts
│           ├── SkillsCommand.ts
│           └── ClearCommand.ts
│
├── application/        # Camada de aplicação (casos de uso)
│   └── terminal/
│       ├── TerminalService.ts        # Serviço para executar comandos
│       └── TerminalServiceFactory.ts # Factory para criar e configurar o serviço
│
├── infrastructure/     # Camada de infraestrutura 
│   └── repositories/
│       └── InMemoryCommandRepository.ts  # Implementação do repositório
│
└── pages/              # Camada de UI (React)
    └── terminal/
        └── RetroTerminalView.tsx  # Componente React que usa o domínio
```

## Princípios Aplicados

### 1. Clean Architecture (SOLID)

- **Dependency Inversion (DIP)**: As interfaces (CommandRepository, CommandHandler) são definidas no domínio, e as implementações dependem delas.
- **Single Responsibility (SRP)**: Cada classe tem uma única responsabilidade claramente definida.
- **Open/Closed (OCP)**: Podemos adicionar novos comandos sem modificar o código existente.
- **Interface Segregation (ISP)**: Interfaces pequenas e focadas.
- **Liskov Substitution (LSP)**: Diferentes implementações de repositórios podem ser usadas sem afetar o comportamento.

### 2. Domain-Driven Design (DDD)

- **Entidades**: `TerminalLine` com identidade própria
- **Objetos de Valor**: `Command` como objeto imutável
- **Repositórios**: `CommandRepository` para acesso a comandos
- **Serviços de Domínio**: Os comandos específicos são serviços de domínio

### 3. Object Calisthenics

- **Regra 1**: Um nível de indentação por método (métodos pequenos e focados)
- **Regra 2**: Evitamos o uso de `else` com retornos antecipados
- **Regra 3**: Primitivas e strings encapsuladas (Command)
- **Regra 4**: Coleções de primeira classe
- **Regra 7**: Entidades pequenas com responsabilidades claras
- **Regra 8**: Não mais que dois atributos por classe
- **Regra 9**: Getters/setters usados com moderação, favorecendo comportamentos

## Benefícios

1. **Testabilidade**: Podemos testar cada camada independentemente
2. **Manutenibilidade**: O código é mais fácil de entender e modificar
3. **Flexibilidade**: Podemos trocar implementações sem afetar o domínio
4. **Escalabilidade**: A arquitetura suporta crescimento sem se tornar complexa
5. **Independência de Framework**: O domínio não depende do React 
