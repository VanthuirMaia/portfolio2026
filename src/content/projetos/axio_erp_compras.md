titulo: "Axio ERP Compras" descricao: "Sistema ERP completo para gestão de compras empresariais, desenvolvido para otimizar e automatizar processos de aquisição desde solicitações até aprovações finais. Inclui sistema de notificações em tempo real, controle de permissões hierárquico e geração automática de documentos PDF." stack:

- Python 3.12 (Django 5.2)
- Django REST Framework
- Bootstrap 4 (AdminLTE 3)
- JavaScript ES6
- jQuery
- SQLite
- xhtml2pdf / WeasyPrint objetivo: "Modernizar e automatizar processos de compras empresariais, reduzindo processos manuais e proporcionando controle total sobre o ciclo de aquisições, desde solicitações até aprovações finais." imagens:
- "/projetos/axio-erp/capa.jpg" link_projeto: "" link_repositorio: "[https://github.com/VanthuirMaia/ERP_Compras](https://github.com/VanthuirMaia/ERP_Compras)" data: "2024-08" destaque: true

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

Aprofundei conhecimentos em Django, desde a arquitetura MVT até recursos avançados como **Django Signals** para automação de processos, **Context Processors** para dados globais em templates, e sistema de permissões customizado usando **Django Groups**. A integração entre um backend robusto e frontend responsivo foi fundamental para criar uma experiência de usuário fluida.

### Geração de PDFs Complexos

Implementei múltiplas bibliotecas de geração de PDF (**xhtml2pdf**, **WeasyPrint**, **ReportLab**) para criar documentos oficiais com formatação profissional. Aprendi a lidar com conversão de HTML/CSS para PDF, incluindo suporte a fontes customizadas, layouts complexos e elementos gráficos.

### Sistema de Notificações em Tempo Real

Desenvolvi um sistema de notificações internas usando **Context Processors** do Django, permitindo que notificações sejam exibidas em tempo real em todas as páginas sem necessidade de polling ou WebSockets. Isso envolveu criar signals para detectar eventos (nova solicitação, mudança de status) e atualizar automaticamente o contador de notificações.

### Controle de Permissões Granular

Criei um sistema de permissões hierárquico usando **Django Groups**, permitindo diferentes níveis de acesso (Solicitante, Compras, Gerência, Superusuário). Implementei validações tanto no backend (decorators e mixins) quanto no frontend (template tags), garantindo segurança em múltiplas camadas.

### Modularização e Arquitetura Escalável

Estruturei o projeto em **apps Django independentes** (core, solicitacoes, pedidos, cadastro), cada um com responsabilidades bem definidas. Isso facilita manutenção, testes e permite escalabilidade futura do sistema, além de seguir as melhores práticas de desenvolvimento Django.

### Métricas do Projeto

- **5.000+ linhas de código** Python/JavaScript/CSS
- **4 apps customizados** modulares e independentes
- **8+ modelos de dados** com relacionamentos complexos
- **25+ templates** responsivos e reutilizáveis
- **42 dependências** Python gerenciadas via pip
