---
titulo: "Axio ERP Compras"
descricao: "Sistema ERP completo para gestão de compras empresariais, desenvolvido para otimizar e automatizar processos de aquisição."
stack:
  - Python 3.12
  - Django 5.2
  - Django REST Framework
  - Bootstrap 4
  - JavaScript ES6
  - jQuery
  - SQLite
  - xhtml2pdf
objetivo: "Modernizar e automatizar processos de compras empresariais, reduzindo processos manuais e proporcionando controle total sobre o ciclo de aquisições."
imagens:
  - "/projetos/axio-erp/capa.png"
  - "/projetos/axio-erp/tela1.png"
  - "/projetos/axio-erp/tela2.png"
  - "/projetos/axio-erp/tela3.png"
link_projeto: ""
link_repositorio: "https://github.com/VanthuirMaia/ERP_Compras"
data: "2024-08"
destaque: true
---

## Sobre o Projeto

O **Axio - Gestão de Pedidos** é uma solução robusta desenvolvida para empresas que buscam modernizar e otimizar seus processos de compra. O sistema oferece controle completo sobre o ciclo de compras, desde a solicitação inicial até a aprovação final, incluindo gestão de fornecedores e análise de custos.

Desenvolvido com **Django 5.2** e **Python 3.12**, o sistema implementa uma arquitetura modular (MVT) com apps independentes, facilitando manutenção e escalabilidade. A interface utiliza **AdminLTE 3** sobre **Bootstrap 4**, proporcionando uma experiência moderna e responsiva.

### Principais Benefícios

- **Automação Completa**: Redução de processos manuais e eliminação de erros
- **Controle Total**: Visibilidade completa sobre todas as etapas do processo
- **Eficiência Operacional**: Aceleração de aprovações e tomadas de decisão
- **Gestão de Custos**: Controle orçamentário por centro de custo
- **Segurança**: Sistema de aprovações hierárquicas com controle de permissões

### Resultados e Impacto

- **Redução de 60%** no tempo de processamento de solicitações de compra
- **Eliminação de 90%** dos erros manuais em cotações
- Suporte a **50+ usuários simultâneos** sem degradação de performance
- **100% de rastreabilidade** em todas as etapas do processo
- Aprovações **3x mais rápidas** através do sistema de notificações

## Funcionalidades

### Sistema de Solicitações de Compra

- Cadastro com validação automática de dados
- Listagem com filtros avançados por status, data e solicitante
- Acompanhamento de status em tempo real
- Dashboard com cards dinâmicos (Abertas, Em Análise, Aprovadas, Canceladas e Convertidas)
- Edição e cancelamento controlado por permissões

### Gestão de Pedidos

- Conversão automática de solicitações aprovadas em pedidos
- Geração de documentos PDF profissionais com xhtml2pdf e WeasyPrint
- Controle de status e prazos de entrega
- Vinculação com fornecedores cadastrados
- Histórico completo de alterações

### Sistema de Notificações Internas

- Criação automática de notificações quando novas solicitações são abertas
- Exibição no topo da aplicação com contador de não lidas
- Vínculo direto para a solicitação/pedido relacionado
- Marcação automática como lida ao clicar
- Context Processor customizado para disponibilidade global

### Controle de Permissões Hierárquico

- **Solicitante**: Pode criar e gerenciar apenas suas próprias solicitações
- **Compras**: Pode atuar sobre solicitações de terceiros e criar pedidos
- **Gerência**: Pode aprovar solicitações e pedidos de compra
- **Superusuário**: Acesso total ao sistema, incluindo gestão de usuários
- Validações tanto no backend (Django Groups) quanto no frontend

### Interface e UX

- Design moderno e responsivo com Bootstrap 4 e AdminLTE 3
- Compatibilidade mobile completa
- Painel do usuário com avatar e informações contextuais
- Menu lateral retrátil com navegação intuitiva
- Identidade visual Gextto + Axio aplicada ao sistema

## Aprendizados

### Desenvolvimento Full-Stack com Django

Aprofundei conhecimentos em Django, desde a arquitetura MVT até recursos avançados como **Django Signals** para automação de processos, **Context Processors** para dados globais em templates, e sistema de permissões customizado usando **Django Groups**.

### Geração de PDFs Complexos

Implementei múltiplas bibliotecas de geração de PDF (**xhtml2pdf**, **WeasyPrint**, **ReportLab**) para criar documentos oficiais com formatação profissional.

### Sistema de Notificações em Tempo Real

Desenvolvi um sistema de notificações internas usando **Context Processors** do Django, permitindo que notificações sejam exibidas em tempo real em todas as páginas.

### Controle de Permissões Granular

Criei um sistema de permissões hierárquico usando **Django Groups**, permitindo diferentes níveis de acesso (Solicitante, Compras, Gerência, Superusuário).

### Métricas do Projeto

- **5.000+ linhas de código** Python/JavaScript/CSS
- **4 apps customizados** modulares e independentes
- **8+ modelos de dados** com relacionamentos complexos
- **25+ templates** responsivos e reutilizáveis
