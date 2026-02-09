---
titulo: "Análise de Pedidos e Entregas - SQL + Power BI"
descricao: "Dashboard profissional de análise logística com modelo de dados SQL, consultas avançadas para KPIs logísticos e visualizações interativas em Power BI."
stack:
  - SQL (DDL, DML, Queries Avançadas)
  - PostgreSQL / SQL Server
  - Power BI Desktop
  - DAX Queries
  - Modelagem de Dados Dimensional
  - KPI Development
objetivo: "Construir um modelo de dados relacional robusto com consultas SQL otimizadas para extrair KPIs logísticos críticos e apresentá-los através de um dashboard Power BI interativo para tomada de decisão operacional."
imagens:
  - "/projetos/analise-pedidos/capa.png"
  - "/projetos/analise-pedidos/dashboard-principal.png"
  - "/projetos/analise-pedidos/kpi-entregas.png"
  - "/projetos/analise-pedidos/analise-tempo-medio.png"
  - "/projetos/analise-pedidos/drill-down-status.png"
link_projeto: ""
link_repositorio: "https://github.com/VanthuirMaia/Projeto-Analise-de-Pedidos-Entregas-SQL-Power-BI"
data: "2025-06"
destaque: false
---

## Sobre o Projeto

O **Projeto de Análise de Pedidos e Entregas** é um sistema completo de **business intelligence** focado em logística e operações. Combina modelagem SQL robusta com análise visual em Power BI para extrair insights críticos sobre performance de entregas.

O projeto demonstra:
- **Engenharia de Dados**: Modelo dimensional bem estruturado
- **SQL Avançado**: Consultas complexas para KPIs
- **BI Profissional**: Dashboards interativos e responsivos
- **Análise Operacional**: Métricas relevantes para negócios

### Objetivos Principais

Construir um modelo de dados que responda:
1. ❓ **Quantos pedidos foram entregues no período?**
2. ❓ **Qual é o tempo médio de entrega?**
3. ❓ **Quais são os gargalos operacionais?**
4. ❓ **Qual é a taxa de sucesso de entregas?**
5. ❓ **Quais clientes/regiões têm melhor performance?**

## Arquitetura do Projeto

### 1️⃣ Modelagem de Dados (SQL)

#### Estrutura de Tabelas

**Dimensões**:
- `dim_clientes` - Informações de clientes
- `dim_produtos` - Catálogo de produtos
- `dim_datas` - Tabela de datas para análise temporal
- `dim_status_pedido` - Status de pedidos
- `dim_localizacao` - Cidades, regiões, CEP

**Fatos**:
- `fato_pedidos` - Registros de pedidos (chave-primária: pedido_id)
- `fato_entregas` - Registros de entregas (relacionado com pedidos)

#### Schema Star/Snowflake

```sql
-- Exemplo de estrutura
fato_pedidos (principal)
├── fk_cliente → dim_clientes
├── fk_produto → dim_produtos
├── fk_data_pedido → dim_datas
├── fk_status → dim_status_pedido
└── fk_localizacao_entrega → dim_localizacao

fato_entregas (secundário)
├── fk_pedido → fato_pedidos
├── fk_motorista → dim_motorista
└── fk_data_entrega → dim_datas
2️⃣ Consultas SQL para KPIs
KPI 1: Total de Pedidos
sql
SELECT 
  COUNT(DISTINCT pedido_id) AS total_pedidos,
  COUNT(DISTINCT cliente_id) AS total_clientes,
  SUM(valor_total) AS receita_total
FROM fato_pedidos
WHERE data_pedido >= DATE_ADD(CURDATE(), INTERVAL -30 DAY);
Resultado: Total de pedidos, clientes ativos e receita do período

KPI 2: Tempo Médio de Entrega
sql
SELECT 
  DATEDIFF(DAY, data_pedido, data_entrega) AS dias_entrega,
  COUNT(*) AS total_pedidos,
  AVG(DATEDIFF(DAY, data_pedido, data_entrega)) AS tempo_medio
FROM fato_pedidos
JOIN fato_entregas ON fato_pedidos.pedido_id = fato_entregas.pedido_id
WHERE status = 'Entregue'
GROUP BY DATEDIFF(DAY, data_pedido, data_entrega)
ORDER BY dias_entrega;
Resultado: Distribuição de tempo de entrega e análise de performance

KPI 3: Taxa de Sucesso por Status
sql
SELECT 
  status,
  COUNT(*) AS total,
  ROUND(100.0 * COUNT(*) / SUM(COUNT(*)) OVER(), 2) AS percentual
FROM fato_pedidos
GROUP BY status
ORDER BY total DESC;
Resultado: Proporção de pedidos por status (entregues, cancelados, pendentes)

KPI 4: Performance por Região
sql
SELECT 
  l.regiao,
  l.cidade,
  COUNT(DISTINCT p.pedido_id) AS total_pedidos,
  ROUND(AVG(DATEDIFF(DAY, p.data_pedido, e.data_entrega)), 2) AS tempo_medio_dias,
  ROUND(100.0 * SUM(CASE WHEN e.data_entrega <= DATE_ADD(p.data_pedido, INTERVAL 7 DAY) THEN 1 ELSE 0 END) / COUNT(*), 2) AS taxa_prazo
FROM fato_pedidos p
JOIN dim_localizacao l ON p.fk_localizacao = l.localizacao_id
LEFT JOIN fato_entregas e ON p.pedido_id = e.pedido_id
GROUP BY l.regiao, l.cidade
ORDER BY total_pedidos DESC;
Resultado: Análise comparativa de regiões (volume, tempo, taxa de prazo)

KPI 5: Análise de Rentabilidade
sql
SELECT 
  d.produto_categoria,
  COUNT(p.pedido_id) AS total_pedidos,
  SUM(p.valor_total) AS receita_total,
  SUM(p.custo_operacional) AS custo_total,
  ROUND(SUM(p.valor_total) - SUM(p.custo_operacional), 2) AS lucro,
  ROUND((SUM(p.valor_total) - SUM(p.custo_operacional)) / SUM(p.valor_total) * 100, 2) AS margem_percentual
FROM fato_pedidos p
JOIN dim_produtos d ON p.fk_produto = d.produto_id
GROUP BY d.produto_categoria
ORDER BY lucro DESC;
Resultado: Rentabilidade por categoria de produto

3️⃣ Dashboard Power BI
Layout Principal
Página 1: Overview Geral

Cards com KPIs: Total Pedidos, Receita Total, Tempo Médio Entrega, Taxa Sucesso

Gráfico de Série Temporal: Tendência de pedidos por mês

Gráfico de Pizza: Distribuição por status

Tabela com Top 10: Principais cidades/regiões

Página 2: Análise Logística

Mapa: Localização geográfica de pedidos

Gráfico de Distribuição: Tempo de entrega em faixas

KPI por Região: Tabela comparativa

Heatmap: Performance por dia da semana/hora

Página 3: Análise Financeira

Gráfico de Colunas: Receita vs Custo por categoria

Margem de Lucro: Linha com margem % por produto

Análise de Rentabilidade: Tabela completa

Forecast: Projeção de receita (se ML integrado)

Página 4: Drill-Down Detalhado

Seletor de período (data range)

Filtros por status, região, cliente

Tabela detalha de pedidos com performance

Indicadores individuais

Recursos Interativos
Slicers: Data, Status, Região, Produto

Drill-Through: Clicar em pedido para ver detalhes

Tooltips: Informações adicionais ao hover

Sync de Filtros: Todos os visuais atualizam em tempo real

Bookmarks: Atalhos para visualizações específicas

Desenvolvimento do Projeto
Fase 1: Modelagem de Dados
✅ Identificação de entidades principais
✅ Definição de relacionamentos
✅ Criação de tabela de dimensão de datas
✅ Normalização (3NF)
✅ Otimização de índices

Fase 2: Desenvolvimento SQL
✅ Scripts DDL (CREATE TABLE)
✅ Scripts DML (INSERT, UPDATE, DELETE)
✅ Consultas OLAP complexas
✅ Procedures para cálculos recorrentes
✅ Triggers para integridade de dados

Fase 3: Integração Power BI
✅ Conexão com banco de dados
✅ Importação de tabelas
✅ Relacionamentos em BI
✅ Criação de medidas DAX
✅ Design de visualizações

Fase 4: Análise e Insights
✅ Identificação de KPIs críticos
✅ Análise de tendências
✅ Detecção de anomalias
✅ Recomendações de ação

Aprendizados Técnicos
SQL Avançado
Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD()

CTEs (Common Table Expressions): WITH clauses para queries complexas

Aggregations: GROUP BY, HAVING, SUM(), AVG(), COUNT() DISTINCT

Joins: INNER, LEFT, RIGHT, FULL OUTER, CROSS joins

Subconsultas: Nested queries para lógica complexa

Performance: Índices, execution plans, query optimization

DAX (Power BI)
Medidas Calculadas: SUM(), CALCULATE(), FILTER()

Time Intelligence: YTD(), MTD(), PREVIOUSMONTH()

Relacionamentos: Many-to-One, One-to-Many

Contexto de Filtro: CONTEXT() awareness em cálculos

Variáveis: VAR para performance

Business Intelligence
Dimensional Modeling: Star schema design

KPI Definition: Métricas de negócio significativas

UX em BI: Navegação intuitiva, cores, layout

Storytelling: Narrativa de dados

Performance: Dashboard responsivo

Métricas do Projeto
Complexidade SQL
Métrica	Valor
Tabelas no Modelo	8-10
Consultas Principais	5+
Índices Otimizados	15+
Procedures	3-5
Triggers	2-3
Linhas de Código SQL	1000+
Dashboard Power BI
Métrica	Valor
Páginas	4 principais
Visuais Totais	25+
Medidas DAX	20+
Slicers Dinâmicos	6+
Drill-Through	3+
KPIs Principais	5
Performance
Métrica	Valor
Tempo de Query	< 2 segundos
Capacidade do Dataset	1M+ registros
Refresh Automático	Diário
Usuários Simultâneos	10+
Compatibilidade	Desktop + Web
Stack Técnico
Componente	Tecnologia
Banco de Dados	PostgreSQL / SQL Server
Linguagem Query	SQL (T-SQL / PL/pgSQL)
Modelagem	Star Schema Dimensional
BI Tool	Power BI Desktop
Linguagem BI	DAX
Versionamento	Git + GitHub
Documentação	Markdown
Insights Esperados
Operacionais
Tempo médio de entrega por região

Taxa de sucesso/cancelamento

Gargalos por horário/dia da semana

Performance de motoristas/equipes

Financeiros
Receita total e tendência

Custo operacional por entrega

Margem de lucro por produto

Clientes mais rentáveis

Estratégicos
Oportunidades de expansão (regiões com demanda alta)

Otimização de rotas (reduzir tempo)

Produtos mais lucrativos

Segmentação de clientes por value

Possíveis Extensões
 Integração com dados de tráfego/clima

 Machine Learning para previsão de atraso

 Análise de sentimento de avaliações de clientes

 Integração com sistema ERP

 Mobile app para motoristas com GPS

 Alertas automáticos para anomalias

 Simulação de cenários (what-if)

 Otimização de rotas (algoritmo)

Conclusão
Este projeto demonstra competência em:

✅ Modelagem de Dados: Star schema dimensional profissional
✅ SQL Avançado: Queries complexas e otimizadas
✅ Power BI: Dashboards interativos e responsivos
✅ Business Intelligence: KPIs de negócio relevantes
✅ Análise Operacional: Insights acionáveis
✅ Performance: Otimização de queries e dashboards
