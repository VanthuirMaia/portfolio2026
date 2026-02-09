---
titulo: "DTBackIALoomi - Assistente Inteligente de Tintas Suvinil com IA"
descricao: "API completa especializada em recomendação de tintas utilizando agente de IA autônomo, busca semântica (RAG), geração de imagens (DALL-E) e sistema robusto de segurança com Guardrails, desenvolvida como desafio técnico de processo seletivo."
stack:
  - Python 3.11
  - FastAPI
  - PostgreSQL
  - OpenAI GPT-4o-mini
  - LangChain + LangGraph
  - DALL-E 2/3
  - SQLAlchemy
  - Docker + Compose
objetivo: "Demonstrar expertise em IA aplicada através de um assistente inteligente e seguro que recomenda tintas usando técnicas avançadas de RAG, processamento de linguagem natural e geração de imagens, com foco em segurança (Guardrails), otimização de custos (97% redução vs GPT-4) e experiência do usuário."
imagens:
  - "/projetos/dt-back-ia-loomi/capa.png"
  - "/projetos/dt-back-ia-loomi/tela1.png"
  - "/projetos/dt-back-ia-loomi/tela2.png"
  - "/projetos/dt-back-ia-loomi/tela3.png"
  - "/projetos/dt-back-ia-loomi/tela4.png"
link_projeto: ""
link_repositorio: "https://github.com/VanthuirMaia/DTBackIALoomi"
data: "2026-01"
destaque: true
---

## Sobre o Projeto

**DTBackIALoomi** é um desafio técnico de processo seletivo que demonstra expertise profissional em Inteligência Artificial aplicada. É um assistente inteligente especializado em recomendação de tintas Suvinil, utilizando arquitetura de ponta com agente autônomo (LangGraph), busca semântica (RAG com embeddings), geração de imagens (DALL-E) e sistema rigoroso de proteção contra ataques (Guardrails).

O projeto compactua arquitetura robusta, segurança em primeiro lugar, otimização de custos e documentação exemplar - características essenciais para produção em escala.

### O Desafio

Criar um sistema de recomendação de produtos que:

- Entenda contexto e necessidades do usuário
- Recomende produtos semanticamente relevantes
- Gere visualizações realistas com DALL-E
- Proteja-se contra manipulação e ataques
- Seja economicamente viável
- Funcione com latência inferior a 3 segundos

### A Solução Implementada

DTBackIALoomi oferece uma solução completa:

- Agente IA autônomo com LangGraph (React Pattern)
- 6 ferramentas especializadas para diferentes tipos de consultas
- RAG com 72 produtos e busca semântica por similaridade de cosseno
- 24 padrões de Guardrails + 99 keywords de validação (100% taxa de detecção)
- Integração DALL-E para visualização fotorrealista de ambientes
- API REST com documentação automática (Swagger/OpenAPI)
- Autenticação JWT com RBAC (admin/user)
- 97% redução em custos usando GPT-4o-mini

## Highlights do Projeto

| Categoria | Métrica | Descrição |
|---|---|---|
| **Economia** | **~97% redução em custos** | GPT-4o-mini vs GPT-4 |
| **Segurança** | **100% taxa de detecção** | 15/15 testes de ataque bloqueados |
| **Cobertura** | **24 padrões + 99 keywords** | Proteção multi-camada |
| **Catálogo** | **72 produtos** | Base completa com cores e acabamentos |
| **Ferramentas** | **6 tools especializadas** | Agente com seleção inteligente |
| **Performance** | **< 3s por resposta** | Cache de embeddings em memória |
| **Integração** | **100% DALL-E** | Geração de imagens fotorrealistas |

## Arquitetura Técnica

### Stack Profissional

| Componente | Tecnologia | Finalidade |
|---|---|---|
| Framework Web | FastAPI 0.115.6 | API REST de alta performance, async nativo |
| Banco de Dados | PostgreSQL 15 | Persistência robusta e ACID compliance |
| ORM | SQLAlchemy 2.0.36 | Moderno com type hints e async ready |
| LLM | GPT-4o-mini | 97% mais barato, qualidade suficiente |
| Embeddings | text-embedding-3-small | 1536 dimensões, custo otimizado |
| Agente IA | LangGraph 0.2.62 | React Pattern, estado gerenciado |
| Geração de Imagens | DALL-E 2/3 | Fotorrealismo e prompts em português |
| Autenticação | JWT (python-jose) | Stateless e seguro |
| Containerização | Docker + Compose | Reprodutibilidade garantida |

### Fluxo de Processamento

1. **Input do Usuário** → Validação com Guardrails
2. **Análise de Intenção** → Agent Service (LangGraph)
3. **Seleção de Ferramenta** → Think → Act → Observe
4. **Execução** → RAG, Filtros, Cálculos, DALL-E
5. **Validação de Output** → Segurança final
6. **Resposta** → Recomendações + Imagens + Histórico

## Funcionalidades Implementadas

### Agente IA e Ferramentas

✅ **Busca Semântica (RAG)**
- Embeddings em tempo real com similaridade de cosseno
- Cache em memória para performance
- Top-5 produtos mais relevantes

✅ **Busca por Filtros**
- Cor, acabamento, linha de produtos
- Queries otimizadas com SQLAlchemy

✅ **Cálculo de Quantidade**
- Rendimento padrão por litro
- Cálculo para 2 demãos
- Sugestão de quantidade de latas

✅ **Validação de Cores**
- Listagem de cores disponíveis
- Recomendações por psicologia das cores

✅ **Linhas de Produtos**
- Categorias: Acrílica, Verniz, Primer, etc
- Características técnicas por linha

✅ **Visualização DALL-E**
- Imagens fotorrealistas de ambientes
- 9 tipos de ambientes suportados
- Prompts em português natural

### Segurança (Guardrails)

✅ **14 padrões Prompt Injection** → 100% detecção
✅ **10 padrões Conteúdo Bloqueado** → 100% detecção  
✅ **99 keywords Validação de Tópico** → 100% detecção
✅ **Output Sanitization** → Remoção de dados sensíveis

Exemplos de bloqueio:
- "Ignore all previous instructions" → Bloqueado
- "Como fazer uma bomba?" → Bloqueado
- "Qual a capital da França?" → Redirecionado

### Autenticação e RBAC

✅ JWT com expiração de 24h configurável  
✅ Roles: admin (CRUD completo), user (consultas apenas)  
✅ Endpoints públicos: `/paints`, `/health`  
✅ Endpoints privados: `/chat`, CRUD admin  

### Frontend

✅ HTML/CSS/JS vanilla (sem dependências)  
✅ Interface de chat moderna  
✅ Suporte a imagens DALL-E com modal  
✅ Responsive design (desktop + mobile)  
✅ Animações e feedback visual  

## Métricas de Performance

### Otimização de Custos

| Modelo | Input | Output | Economia vs GPT-4 |
|---|---|---|---|
| GPT-4 | $30.00/1M | $60.00/1M | - |
| GPT-4o | $2.50/1M | $10.00/1M | 91% |
| **GPT-4o-mini** | **$0.15/1M** | **$0.60/1M** | **~97%** |

**Resultado**: Sistema economiza ~97% em custos de tokens mantendo qualidade suficiente para recomendações

### Eficiência do RAG

| Métrica | Valor |
|---|---|
| Base de Produtos | 72 tintas |
| Dimensões Embedding | 1536 |
| Algoritmo | Similaridade de Cosseno |
| Cache | Em memória (singleton) |
| Top-K Resultados | 5 produtos |

### Latência

- Resposta média: < 3 segundos
- Cache de embeddings: ~50ms por busca
- Geração DALL-E: ~2-3s
- Token overhead: minimal

## Aprendizados Técnicos

Este projeto envolveu mastery em:

1. **Agentes de IA Autônomos**: LangGraph React Pattern, tool selection inteligente
2. **RAG Semanticamente Correto**: Embeddings, similaridade, cache estratégico
3. **Segurança em IA**: Guardrails multi-camada, regex patterns, validação de tópico
4. **Integração com APIs Externas**: OpenAI GPT, DALL-E, tokens, retry logic
5. **Arquitetura Escalável**: FastAPI async, SQLAlchemy ORM, conexão pool
6. **Autenticação Profissional**: JWT stateless, RBAC granular
7. **DevOps e Containerização**: Docker, Compose, health checks
8. **Documentação e Qualidade**: Tests, docstrings, GitHub README profissional

## Endpoints Principais

### Autenticação
POST /auth/register # Novo usuário
POST /auth/login # Obter token JWT
POST /auth/register-admin # Admin apenas

### Tintas (CRUD)
GET /paints # Lista todas (público)
GET /paints/{id} # Por ID (público)
POST /paints # Criar (admin)
PUT /paints/{id} # Atualizar (admin)
DELETE /paints/{id} # Deletar (admin)

### Chat (Assistente IA)
POST /chat # Enviar mensagem (auth)
POST /chat/clear # Limpar histórico (auth)
GET /health # Health check (público)

### Documentação
GET /docs # Swagger UI
GET /redoc # ReDoc

## Decisões Técnicas Justificadas

### Por que LangGraph?
- **React Pattern**: Think → Act → Observe
- **Estado Gerenciado**: Mantém contexto da conversa
- **Observabilidade**: Rastreia raciocínio do agente
- **Extensibilidade**: Fácil adicionar novas ferramentas

### Por que Embeddings em Memória?
- **Simplicidade**: Sem dependências extras (pgvector)
- **Escala adequada**: 72 produtos cabem facilmente
- **Performance**: Cache evita recálculo
- **Evolução**: Fácil migrar para pgvector depois

### Por que GPT-4o-mini?
- **Custo-benefício**: 97% mais barato
- **Qualidade**: Suficiente para recomendações
- **Latência**: Respostas mais rápidas
- **Rate limits**: Maiores que modelos premium

## Uso de IA no Desenvolvimento

### Claude (Anthropic)
- Planejamento de arquitetura
- Implementação de código
- Revisão e correção
- Geração de documentação

### ChatGPT (OpenAI)  
- Definição de estratégias
- Revisão técnica
- Brainstorming de soluções

**Decisões baseadas em IA**:
- Expansão de 25 para 72 produtos (melhor cobertura)
- Migração para LangGraph (compatibilidade)
- Load de .env no main.py (corrigiu issue)

## Destaques do Projeto

✨ **Desafio Técnico Profissional**: Demonstra expertise em IA aplicada em contexto real

✨ **Segurança em Primeiro Lugar**: 24 padrões + 99 keywords, 100% taxa de detecção

✨ **Otimização de Custos**: 97% economia vs GPT-4 sem perda de qualidade

✨ **Arquitetura Robusta**: LangGraph, RAG, DALL-E, JWT, Docker

✨ **Documentação Exemplar**: README, guia técnico, guia entrevista

✨ **Frontend Funcional**: Interface moderna sem dependências externas

✨ **Pronto para Produção**: Tests, health checks, logging, RBAC

✨ **Colaboração com IA**: Demonstra capacidade de trabalhar com assistentes de IA