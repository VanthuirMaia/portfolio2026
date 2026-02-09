---
titulo: "Axio Gestto - SaaS Multi-Tenant de Agendamentos"
descricao: "Plataforma SaaS profissional de gestão de agendamentos para salões, barbearias e pequenos negócios, com calendário inteligente, PWA, integração com WhatsApp e sistema completo de pagamentos e assinaturas."
stack:
  - Python 3.10+
  - Django 5.2
  - Django REST Framework
  - Celery + Redis
  - PostgreSQL
  - Nginx + Gunicorn
  - Docker + Docker Compose
  - FullCalendar.js
  - WhiteNoise
objetivo: "Criar uma plataforma SaaS escalável e profissional que automatiza a gestão de agendamentos para pequenos negócios brasileiros, integrando sistemas de pagamento (Stripe/Asaas), automação de workflow (n8n) e comunicação com clientes via WhatsApp, com arquitetura multi-tenant robusta."
imagens:
  - "/projetos/axio-gestto/capa.png"
  - "/projetos/axio-gestto/calendario.png"
  - "/projetos/axio-gestto/dashboard.png"
  - "/projetos/axio-gestto/agendamentos.png"
link_projeto: "https://www.gestto.app.br"
link_repositorio: "https://github.com/VanthuirMaia/Axio_Gestto"
data: "2025-12"
destaque: true
---

## Sobre o Projeto

**Axio Gestto** é uma plataforma SaaS multi-tenant profissional desenvolvida para resolver um problema real de pequenos negócios brasileiros: a complexidade e falta de automação na gestão de agendamentos. Integra calendário inteligente com FullCalendar, integrações automatizadas com WhatsApp e n8n, sistema completo de pagamentos e modelo de assinatura escalável.

### O Problema Resolvido

Salões, barbearias e pequenos negócios enfrentam desafios críticos:

- Gestão manual de agendamentos causa conflitos, overbooking e perda de clientes
- Impossibilidade de automação de notificações aos clientes
- Falta de controle financeiro e comissões para profissionais
- Sistemas existentes são caros, complexos e sem integração com WhatsApp
- Necessidade de funcionamento em múltiplos dispositivos

### A Solução Implementada

Axio Gestto oferece uma plataforma completa que:

- Gerencia agendamentos com calendário visual e prevenção automática de conflitos
- Gera agendamentos recorrentes via Celery (60 dias adiante)
- Integra-se com WhatsApp (Evolution API) e n8n para automações
- Fornece PWA para funcionamento offline e em mobile
- Controla clientes, serviços, profissionais e comissões
- Implementa modelo multi-tenant com assinaturas e limites por plano
- Integra Stripe e Asaas para pagamentos e cobrança

## Impacto de Negócio

### Para Salões, Barbearias e Pequenos Negócios

- **Redução de conflitos**: Prevenção automática de overbooking
- **Automação de notificações**: WhatsApp em tempo real aos clientes
- **Controle financeiro**: Gestão de comissões e receita
- **Acessibilidade**: PWA funciona em qualquer dispositivo
- **Escalabilidade**: Modelo SaaS permite crescimento sem infraestrutura

### Para Profissionais

- **Transparência**: Visualização clara de agenda e comissões
- **Autonomia**: Possibilidade de consultar agenda de qualquer lugar
- **Precisão**: Histórico completo e confiável de atendimentos

### Para Clientes Finais

- **Conveniência**: Booking online 24/7 via Web/Mobile
- **Notificações**: Lembretes automáticos via WhatsApp
- **Confirmação**: Sistema automático de confirmação de agendamentos

## Arquitetura Técnica

### Stack Profissional

| Componente | Tecnologia | Finalidade |
|---|---|---|
| Backend | Django 5.2 + DRF | API REST e lógica de negócio |
| Task Queue | Celery + Redis | Agendamentos recorrentes e notificações |
| Banco de Dados | PostgreSQL (prod) / SQLite (dev) | Persistência de dados |
| Servidor Web | Nginx + Gunicorn | Servir aplicação em produção |
| Containerização | Docker + Docker Compose | Ambientes consistentes |
| Frontend | HTML/CSS/JS + FullCalendar | Interface responsiva |
| PWA | Service Worker + Manifest | Funcionamento offline |

### Estrutura de Aplicação

**core/**: Autenticação customizada, onboarding, middlewares de assinatura/limites, health checks

**Domínios Principais**:
- `empresas/`: Gestão de tenants (multi-tenant)
- `clientes/`: Registro e gestão de clientes
- `agendamentos/`: Calendário, prevenção de conflitos, recorrências
- `financeiro/`: Controle de receita e comissões

**Recursos Avançados**:
- `assinaturas/`: Planos, assinatura via Stripe/Asaas, webhooks
- `configuracoes/`: Preferências de empresa, integrações, webhooks
- `landing/`, `dashboard/`: UI e PWA

## Funcionalidades Implementadas

### Gestão de Agendamentos

✅ Calendário FullCalendar com cores por profissional  
✅ Prevenção automática de conflitos de agendamento  
✅ Agendamentos recorrentes gerados via Celery (60 dias)  
✅ Timezone configurável (America/Recife padrão)  
✅ Logs de todas as operações com rastreamento completo  

### Gestão de Negócio

✅ Cadastro de clientes, serviços e profissionais  
✅ Sistema de comissões por profissional  
✅ Controle de limite de uso por plano  
✅ Status de assinatura em middlewares  

### Integrações

✅ Webhooks com WhatsApp (Evolution API)  
✅ Integração com n8n para automações  
✅ APIs públicas para booking online  
✅ Webhooks Stripe/Asaas para pagamentos  

### PWA (Progressive Web App)

✅ Manifest e Service Worker implementados  
✅ Página offline funcional  
✅ Static files via WhiteNoise  
✅ Funcionamento completo em mobile  

### Pagamentos

✅ Integração Stripe completa  
✅ Integração Asaas para pagamentos brasileiros  
✅ Conformidade CDC (Código de Defesa do Consumidor)  
✅ Trials sem cartão com notificações de expiração  
✅ Automação de renovação de assinatura  

## Roadmap Implementado

| Feature | Status |
|---|---|
| Calendário com prevenção de conflitos | ✅ Prod |
| Agendamentos recorrentes | ✅ Prod |
| Multi-tenant com assinaturas | ✅ Prod |
| Integração WhatsApp | ✅ Prod |
| PWA e funcionamento offline | ✅ Prod |
| Stripe/Asaas | ✅ Prod |
| n8n webhooks | ✅ Prod |
| Drag & drop no calendário | 🔄 Em desenvolvimento |
| Bloqueio de folgas/ausências | 🔄 Em desenvolvimento |
| Dashboard financeiro avançado | 🔄 Planejado |
| API pública completa | 🔄 Planejado |

## Aprendizados Técnicos

Este projeto envolveu mastery em:

1. **Arquitetura Multi-Tenant**: Isolamento de dados por empresa, middlewares de verificação, escalabilidade
2. **Task Queue Distribuído**: Celery + Redis para recorrências e notificações em tempo real
3. **Integrações de APIs**: Stripe, Asaas, Evolution (WhatsApp), n8n
4. **PWA e Offline-First**: Service Workers, cache strategies, funcionamento sem internet
5. **Calendário JavaScript**: FullCalendar com eventos dinâmicos e validações
6. **Segurança em SaaS**: Autenticação customizada, HTTPS forçado, cookies seguros, ADMIN_URL customizável
7. **DevOps e Deploy**: Docker Compose multi-container, migrations automáticas, health checks
8. **Testes e CI/CD**: pytest, GitHub Actions, ambientes dev/prod

## Métricas Técnicas

### Arquitetura

| Métrica | Valor |
|---|---|
| Linguagens | Python 40.3%, HTML 30.4%, JS 14.9%, CSS 12.6% |
| Banco de Dados | PostgreSQL com migrations Django |
| Cache | Redis para Celery e sessions |
| Containers | 5 (web, db, redis, celery, nginx) |
| Deploy | Docker Swarm + Traefik (opcional) |

### Performance

- Agendamentos recorrentes: Gerados em background via Celery
- Calendário: Renderização otimizada com FullCalendar
- PWA: Carregamento offline em < 1s
- API: Rate limiting e throttling por tenant

### Segurança

- Multi-tenant: Filtro por `empresa` em todas as queries
- HTTPS forçado em produção
- HSTS habilitado
- Cookies seguros com SameSite
- Verificação de autenticação em middlewares

Destaques do Projeto
✨ Arquitetura Multi-Tenant Robusta: Isolamento completo de dados por empresa

✨ Integrações Profissionais: Stripe, Asaas, WhatsApp, n8n

✨ PWA com Offline: Funciona 100% offline quando necessário

✨ Escalabilidade: Task queue distribuído com Celery

✨ SaaS Completo: Assinaturas, trials, webhooks, pagamentos

✨ Código Profissional: Migrations, testes, CI/CD, ambientes separados

✨ Impacto Real: Solução para problema concreto de pequenos negócios