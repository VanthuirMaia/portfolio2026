titulo: Axio ERP Compras descricao: Sistema ERP completo para gestão de compras empresariais, desenvolvido para otimizar e automatizar processos de aquisição desde solicitações até aprovações finais. Inclui sistema de notificações em tempo real, controle de permissões hierárquico e geração automática de documentos PDF. stack:

Python 3.12
Django 5.2
Django REST Framework
Bootstrap 4
JavaScript ES6
jQuery
AdminLTE 3
SQLite
xhtml2pdf
WeasyPrint objetivo: Modernizar e automatizar processos de compras empresariais, reduzindo processos manuais e proporcionando controle total sobre o ciclo de aquisições. imagens:
/projetos/axio-erp/capa.jpg link_projeto: link_repositorio: https://github.com/VanthuirMaia/ERP_Compras data: 2024-08 destaque: true
Sobre o Projeto
O Axio - Gestão de Pedidos é uma solução robusta desenvolvida para empresas que buscam modernizar e otimizar seus processos de compra. O sistema oferece controle completo sobre o ciclo de compras, desde a solicitação inicial até a aprovação final, incluindo gestão de fornecedores e análise de custos.

Principais Benefícios
Automação Completa: Redução de processos manuais e eliminação de erros
Controle Total: Visibilidade completa sobre todas as etapas do processo
Eficiência Operacional: Aceleração de aprovações e tomadas de decisão
Gestão de Custos: Controle orçamentário por centro de custo
Segurança: Sistema de aprovações hierárquicas com controle de permissões
Funcionalidades Implementadas
Sistema de Solicitações de Compra
Cadastro com validação automática
Listagem com filtros avançados
Status em tempo real
Dashboard com cards dinâmicos (Abertas, Em Análise, Aprovadas, Canceladas e Convertidas)
Gestão de Pedidos
Conversão automática de solicitações aprovadas
Geração de documentos PDF profissionais
Controle de status e prazos de entrega
Integração com fornecedores
Sistema de Notificações Internas
Notificações criadas automaticamente quando novas solicitações são abertas
Exibição no topo da aplicação com contador de não lidas
Vínculo direto para a solicitação/pedido relacionado
Marcação automática como lida ao clicar
Controle de Permissões Avançado
Solicitante: Pode editar ou cancelar apenas suas próprias solicitações
Compras: Pode atuar sobre solicitações de terceiros e criar pedidos
Gerência: Pode aprovar solicitações e pedidos
Superusuário: Acesso total ao sistema, incluindo gestão de usuários
Arquitetura e Tecnologias
Backend
Framework: Django 5.2.4 com Python 3.12
API: Django REST Framework 3.16 para futuras integrações
Banco de Dados: SQLite (desenvolvimento) com migração planejada para PostgreSQL
Padrão: MVT (Model-View-Template) com apps modulares
Frontend
Framework CSS: Bootstrap 4 com tema AdminLTE 3
JavaScript: ES6 com jQuery para interatividade
Componentes: Select2 para campos de seleção aprimorados
Ícones: FontAwesome para interface visual
Geração de Documentos
xhtml2pdf: Conversão de HTML para PDF
WeasyPrint: Geração avançada de PDFs com suporte a CSS3
ReportLab: Criação programática de documentos oficiais
Aprendizados e Desafios
Desenvolvimento Full-Stack
Aprofundei conhecimentos em Django, desde a arquitetura MVT até recursos avançados como Signals, Context Processors e sistema de permissões customizado. A integração entre backend robusto e frontend responsivo foi fundamental para criar uma experiência de usuário fluida.

Geração de PDFs Complexos
Implementei múltiplas bibliotecas de geração de PDF (xhtml2pdf, WeasyPrint, ReportLab) para criar documentos oficiais com formatação profissional, incluindo suporte a fontes customizadas e layouts complexos.

Sistema de Notificações
Desenvolvi um sistema de notificações internas usando Context Processors do Django, permitindo que notificações sejam exibidas em tempo real em todas as páginas sem necessidade de polling ou WebSockets.

Controle de Permissões Hierárquico
Criei um sistema de permissões granular usando Django Groups, permitindo diferentes níveis de acesso (Solicitante, Compras, Gerência, Superusuário) com validações tanto no backend quanto no frontend.

Métricas do Projeto
Linhas de Código: 5.000+
Apps Customizados: 4 (core, solicitacoes, pedidos, cadastro)
Modelos de Dados: 8+
Templates: 25+
Dependências: 42 pacotes Python
Próximos Passos
Sistema de aprovações online com workflow configurável
Gestão completa de fornecedores com avaliação de performance
Dashboard analytics com métricas em tempo real e gráficos interativos
Notificações em tempo real via Django Channels (WebSocket)
Migração para PostgreSQL e deploy em produção
