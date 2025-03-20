
# 🐦 Nest API Template

> Template para iniciar projetos com NestJS, focado em eficiência e escalabilidade.

## 🔍 Sobre o Projeto

Este projeto é um ponto de partida ideal para desenvolvedores que desejam criar APIs modernas e escaláveis com NestJS. Ele inclui boas práticas de arquitetura, integração com TypeORM para gerenciar banco de dados, e suporte para autenticação segura usando JWT. Com este template, desenvolvedores podem reduzir o tempo de configuração inicial e se concentrar diretamente nas funcionalidades de suas aplicações, seguindo padrões de mercado e mantendo uma estrutura organizada.

O NestJS é um framework que traz uma abordagem estruturada e opinativa para o desenvolvimento de aplicações backend. Este template ajuda a aplicar esses padrões e acelera o desenvolvimento, fornecendo exemplos de módulos, serviços e controladores que podem ser facilmente adaptados para atender às necessidades de projetos específicos.

## 🖥️ Tecnologias Utilizadas

-   **Node.js**: Plataforma JavaScript para construir aplicações server-side de alta performance, que permite lidar com múltiplas requisições simultâneas.
    
-   **NestJS**: Framework para construir APIs de forma eficiente, baseado em uma arquitetura modular e inspirada no Angular, facilitando o desenvolvimento de sistemas complexos.
    
-   **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, proporcionando maior segurança e robustez ao desenvolvimento, evitando erros comuns.
    
-   **TypeORM**: ORM que simplifica o mapeamento de entidades para o banco de dados, permitindo a manipulação de dados de forma mais intuitiva e segura, com suporte a diferentes bancos de dados.
    
-   **Swagger**: Ferramenta para documentação automática da API, oferecendo uma interface interativa para testar e visualizar os endpoints disponíveis, facilitando a comunicação entre desenvolvedores e stakeholders.
    

Estas tecnologias foram escolhidas por serem amplamente adotadas pela comunidade e oferecerem uma excelente base para o desenvolvimento de APIs robustas e escaláveis. O uso dessas ferramentas também facilita a manutenção e evolução do projeto ao longo do tempo.

## ⚙️ Funcionalidades

-   **Criação de usuários**: Permite registrar novos usuários na aplicação, fornecendo dados essenciais como nome, email e senha.
    
-   **Autenticação JWT**: Utiliza tokens JWT para autenticar usuários de forma segura, garantindo acesso apenas a partes restritas da aplicação após login bem-sucedido.
    
-   **CRUD de usuários**: Permite a criação, leitura, atualização e exclusão de usuários, fornecendo uma interface completa para gerenciar os dados dos usuários cadastrados.
    
-   **Documentação da API**: A API vem documentada com Swagger, permitindo que desenvolvedores possam facilmente visualizar e testar as funcionalidades disponíveis.
    

Estas funcionalidades foram projetadas para serem facilmente extensíveis. Desenvolvedores podem adicionar novas funcionalidades e módulos conforme as necessidades do projeto evoluírem, mantendo uma arquitetura modular e organizada.

## 📁 Estrutura de Pastas

```
/                # Diretório raiz do projeto
|-- src/         # Código-fonte
|    |-- modules/               # Módulos principais da aplicação
|    |    |-- auth/             # Módulo de autenticação
|    |    |    |-- controllers/ # Controladores para autenticação
|    |    |    |-- services/    # Serviços de autenticação
|    |    |    |-- use-cases/   # Casos de uso de autenticação
|    |    |    |    |-- example/  # Pasta do exemplo de caso de uso de autenticação
|    |    |    |    |    |-- example.use-case.ts  # Caso de uso de autenticação
|    |    |    |    |    |-- example.use-case.spec.ts  # Teste do caso de uso de autenticação
|    |    |-- users/            # Módulo de usuários
|    |    |    |-- controllers/ # Controladores de usuários
|    |    |    |-- services/    # Serviços relacionados a usuários
|    |    |    |-- use-cases/   # Casos de uso de usuários
|    |    |    |    |-- example/  # Pasta do exemplo de caso de uso de usuários
|    |    |    |    |    |-- example.use-case.ts  # Caso de uso de usuários
|    |    |    |    |    |-- example.use-case.spec.ts  # Teste do caso de uso de usuários
|    |-- main.ts                # Arquivo principal de entrada da aplicação
|    |-- repos/                 # Repositórios gerais para acesso a dados
|    |-- utils/                 # Utilitários e funções auxiliares
|-- test/                       # Testes automatizados da aplicação
|-- .env.example                # Exemplo de arquivo de variáveis de ambiente
|-- .gitignore                  # Arquivo para ignorar arquivos no Git
|-- package.json                # Gerenciamento de dependências do Node.js
|-- tsconfig.json               # Configuração TypeScript
|-- nest-cli.json               # Configuração CLI Nest
```

Esta estrutura de pastas foi pensada para proporcionar uma organização clara e modular, facilitando a adição de novos módulos e a manutenção do código.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você deseja contribuir para este projeto, sinta-se à vontade para abrir _issues_ com sugestões, correções ou melhorias, ou enviar _pull requests_ com suas contribuições. Toda ajuda é apreciada para tornar este projeto ainda melhor e mais útil para outros desenvolvedores.

----------

Feito com 🧡 por [Arthur Santos](mailto:arthurvilmar.santos@gmail.com). 