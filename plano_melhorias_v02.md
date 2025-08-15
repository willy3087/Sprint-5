@@ -1,1 +1,254 @@
-\n# 📋 Plano de Melhorias v0.2 - GlobalCoffee\n\n## 🎯 Análise das Páginas Atuais\n\n### Páginas Identificadas:\n1. **dashboard_kpis.html** - Dashboard de previsão climática (2145 linhas)\n2. **features.html** - Análise de componentes do preço do café (986 linhas)\n3. **pricing.html** - Bolsa de valores e trading (1318 linhas)\n\n## 🔍 Problemas Identificados (baseado em `analise_ui_ux_final.md`)\n\n### 1. **Acessibilidade (Score Atual: 65/100)**\n- ❌ Falta de ARIA labels em elementos interativos\n- ❌ Contraste insuficiente (#999 sobre #f4f6f8 = 2.84:1)\n- ❌ Navegação por teclado não otimizada\n- ❌ Ausência de skip links\n- ❌ Imagens sem alt text adequado\n- ❌ Formulários sem labels associados\n- ❌ Touch targets < 44px em mobile\n\n### 2. **Responsividade (Score Atual: 72/100)**\n- ❌ Quebra de layout em 320px\n- ❌ Tabelas com scroll horizontal em mobile\n- ❌ Gráficos não responsivos\n- ❌ Sidebar fixa em telas pequenas\n- ❌ Fontes não escalonáveis (px fixo)\n\n### 3. **Usabilidade (Score Atual: 68/100)**\n- ❌ Falta de feedback visual em ações\n- ❌ Estados de loading inconsistentes\n- ❌ Microinterações ausentes\n- ❌ Hierarquia visual confusa\n- ❌ Falta de estados hover/focus\n- ❌ Sem indicadores de progresso\n\n## 📐 Estratégia de Melhorias v0.2\n\n### Por Persona:\n\n#### **José Silva (Pequeno Produtor)**\n- ✅ Cards grandes com touch targets de 48px\n- ✅ Modo alto contraste\n- ✅ WhatsApp integrado\n- ✅ Gráficos simplificados\n- ✅ Fonte mínima 16px\n\n#### **Roberto Santos (Médio Produtor)**\n- ✅ KPIs detalhados com tooltips\n- ✅ Dashboards customizáveis\n- ✅ Otimização para tablet\n- ✅ Exportação de dados\n\n#### **Ana Carolina (Jovem Inovadora)**\n- ✅ Dark mode\n- ✅ Animações fluidas\n- ✅ PWA capabilities\n- ✅ Integração social\n\n## 🛠️ Implementações Técnicas v0.2\n\n### 1. **Sistema de Design Tokens**\n`css\n:root {\n  /* Cores com contraste WCAG AAA */\n  --primary-green: #4CAF50;\n  --text-primary: #1a1a1a; /* Contraste 16:1 */\n  --text-secondary: #525252; /* Contraste 7:1 */\n  \n  /* Touch targets */\n  --touch-target: 48px;\n  \n  /* Responsividade */\n  --breakpoint-mobile: 320px;\n  --breakpoint-tablet: 768px;\n  --breakpoint-desktop: 1024px;\n}\n`\n\n### 2. **Melhorias de Acessibilidade**\n`html\n<!-- Skip links -->\n<a href=\"#main\" class=\"skip-link\">Pular para conteúdo</a>\n\n<!-- ARIA labels -->\n<button aria-label=\"Menu principal\" aria-expanded=\"false\">\n  <span class=\"sr-only\">Abrir menu</span>\n</button>\n\n<!-- Focus trap -->\n<div role=\"dialog\" aria-modal=\"true\" tabindex=\"-1\">\n`\n\n### 3. **Responsividade Aprimorada**\n`css\n/* Container fluid com limites */\n.container {\n  width: 100%;\n  max-width: 1400px;\n  padding: clamp(1rem, 4vw, 2rem);\n}\n\n/* Grid responsivo */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: clamp(1rem, 3vw, 2rem);\n}\n\n/* Tabelas responsivas */\n@media (max-width: 768px) {\n  table {\n    display: block;\n  }\n  \n  tr {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid var(--border-color);\n    margin-bottom: 1rem;\n  }\n}\n`\n\n### 4. **Microinterações**\n`css\n/* Hover com feedback háptico */\n.card {\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);\n}\n\n/* Loading states */\n.loading {\n  animation: pulse 2s infinite;\n}\n\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}\n`\n\n### 5. **Performance**\n- Lazy loading de imagens\n- Code splitting\n- Service Worker para PWA\n- Cache de assets\n- Preconnect para APIs\n\n## 📊 Métricas de Sucesso\n\n### Antes (v0.1)\n- Acessibilidade: 65/100\n- Responsividade: 72/100\n- Usabilidade: 68/100\n- Performance: 75/100\n\n### Meta (v0.2)\n- Acessibilidade: 95/100 ✅\n- Responsividade: 95/100 ✅\n- Usabilidade: 90/100 ✅\n- Performance: 90/100 ✅\n\n## 🚀 Implementação\n\n### Fase 1: Dashboard KPIs v0.2\n- [x] Design tokens\n- [x] Skip links\n- [x] ARIA labels\n- [ ] Grid responsivo\n- [ ] Microinterações\n- [ ] Dark mode\n\n### Fase 2: Features v0.2\n- [ ] Cards acessíveis\n- [ ] Gráficos responsivos\n- [ ] Touch targets 48px\n- [ ] Loading states\n\n### Fase 3: Pricing v0.2\n- [ ] Tabelas responsivas\n- [ ] Real-time updates\n- [ ] WhatsApp integration\n- [ ] PWA manifest\n\n## 📝 Checklist de Validação\n\n### Acessibilidade\n- [ ] WAVE: 0 erros\n- [ ] axe DevTools: 0 violações\n- [ ] Lighthouse: > 95\n- [ ] Navegação por teclado completa\n- [ ] Screen reader testado\n\n### Responsividade\n- [ ] 320px: ✓\n- [ ] 768px: ✓\n- [ ] 1024px: ✓\n- [ ] 1440px: ✓\n- [ ] 4K: ✓\n\n### Performance\n- [ ] FCP < 2s\n- [ ] TTI < 3.5s\n- [ ] CLS < 0.1\n- [ ] Bundle < 300KB\n\n## 🎨 Referências de Design\n\nBaseado em:\n- Climate FieldView (simplicidade)\n- FarmLogs (KPIs claros)\n- Granular Insights (visualizações)\n- Material Design 3 (acessibilidade)\n- iOS Human Interface (touch)\n\n## 📱 Progressive Web App\n\n### Manifest.json\n`json\n{\n  \"name\": \"GlobalCoffee\",\n  \"short_name\": \"GCoffee\",\n  \"theme_color\": \"#4CAF50\",\n  \"background_color\": \"#ffffff\",\n  \"display\": \"standalone\",\n  \"orientation\": \"any\",\n  \"icons\": [\n    {\n      \"src\": \"icon-192.png\",\n      \"sizes\": \"192x192\",\n      \"type\": \"image/png\"\n    },\n    {\n      \"src\": \"icon-512.png\",\n      \"sizes\": \"512x512\",\n      \"type\": \"image/png\"\n    }\n  ]\n}\n`\n\n## 🔄 Próximos Passos\n\n1. Implementar dashboard_kpis_v0.2.html completo\n2. Criar features_v0.2.html\n3. Criar pricing_v0.2.html\n4. Adicionar Service Worker\n5. Testar com usuários reais\n6. Documentar componentes\n
+# 📋 Plano de Melhorias v0.2 - GlobalCoffee

- +## 🎯 Análise das Páginas Atuais
- +### Páginas Identificadas:
  +1. **dashboard_kpis.html** - Dashboard de previsão climática (2145 linhas)
  +2. **features.html** - Análise de componentes do preço do café (986 linhas)
  +3. **pricing.html** - Bolsa de valores e trading (1318 linhas)
- +## 🔍 Problemas Identificados (baseado em `analise_ui_ux_final.md`)
- +### 1. **Acessibilidade (Score Atual: 65/100)**
  +- ❌ Falta de ARIA labels em elementos interativos
  +- ❌ Contraste insuficiente (#999 sobre #f4f6f8 = 2.84:1)
  +- ❌ Navegação por teclado não otimizada
  +- ❌ Ausência de skip links
  +- ❌ Imagens sem alt text adequado
  +- ❌ Formulários sem labels associados
  +- ❌ Touch targets < 44px em mobile
- +### 2. **Responsividade (Score Atual: 72/100)**
  +- ❌ Quebra de layout em 320px
  +- ❌ Tabelas com scroll horizontal em mobile
  +- ❌ Gráficos não responsivos
  +- ❌ Sidebar fixa em telas pequenas
  +- ❌ Fontes não escalonáveis (px fixo)
- +### 3. **Usabilidade (Score Atual: 68/100)**
  +- ❌ Falta de feedback visual em ações
  +- ❌ Estados de loading inconsistentes
  +- ❌ Microinterações ausentes
  +- ❌ Hierarquia visual confusa
  +- ❌ Falta de estados hover/focus
  +- ❌ Sem indicadores de progresso
- +## 📐 Estratégia de Melhorias v0.2
- +### Por Persona:
- +#### **José Silva (Pequeno Produtor)**
  +- ✅ Cards grandes com touch targets de 48px
  +- ✅ Modo alto contraste
  +- ✅ WhatsApp integrado
  +- ✅ Gráficos simplificados
  +- ✅ Fonte mínima 16px
- +#### **Roberto Santos (Médio Produtor)**
  +- ✅ KPIs detalhados com tooltips
  +- ✅ Dashboards customizáveis
  +- ✅ Otimização para tablet
  +- ✅ Exportação de dados
- +#### **Ana Carolina (Jovem Inovadora)**
  +- ✅ Dark mode
  +- ✅ Animações fluidas
  +- ✅ PWA capabilities
  +- ✅ Integração social
- +## 🛠️ Implementações Técnicas v0.2
- +### 1. **Sistema de Design Tokens**
  +```css
  +:root {
- /_ Cores com contraste WCAG AAA _/
- --primary-green: #4CAF50;
- --text-primary: #1a1a1a; /_ Contraste 16:1 _/
- --text-secondary: #525252; /_ Contraste 7:1 _/
-
- /_ Touch targets _/
- --touch-target: 48px;
-
- /_ Responsividade _/
- --breakpoint-mobile: 320px;
- --breakpoint-tablet: 768px;
- --breakpoint-desktop: 1024px;
  +}
  +```
- +### 2. **Melhorias de Acessibilidade**
  +```html +<!-- Skip links --> +<a href="#main" class="skip-link">Pular para conteúdo</a>
- +<!-- ARIA labels --> +<button aria-label="Menu principal" aria-expanded="false">
- <span class="sr-only">Abrir menu</span> +</button>
- +<!-- Focus trap --> +<div role="dialog" aria-modal="true" tabindex="-1">
  +```
- +### 3. **Responsividade Aprimorada**
  +```css
  +/_ Container fluid com limites _/
  +.container {
- width: 100%;
- max-width: 1400px;
- padding: clamp(1rem, 4vw, 2rem);
  +}
- +/_ Grid responsivo _/
  +.grid {
- display: grid;
- grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
- gap: clamp(1rem, 3vw, 2rem);
  +}
- +/_ Tabelas responsivas _/
  +@media (max-width: 768px) {
- table {
- display: block;
- }
-
- tr {
- display: flex;
- flex-direction: column;
- border: 1px solid var(--border-color);
- margin-bottom: 1rem;
- }
  +}
  +```
- +### 4. **Microinterações**
  +```css
  +/_ Hover com feedback háptico _/
  +.card {
- transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  +}
- +.card:hover {
- transform: translateY(-4px);
- box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  +}
- +/_ Loading states _/
  +.loading {
- animation: pulse 2s infinite;
  +}
- +@keyframes pulse {
- 0%, 100% { opacity: 1; }
- 50% { opacity: 0.5; }
  +}
  +```
- +### 5. **Performance**
  +- Lazy loading de imagens
  +- Code splitting
  +- Service Worker para PWA
  +- Cache de assets
  +- Preconnect para APIs
- +## 📊 Métricas de Sucesso
- +### Antes (v0.1)
  +- Acessibilidade: 65/100
  +- Responsividade: 72/100
  +- Usabilidade: 68/100
  +- Performance: 75/100
- +### Meta (v0.2)
  +- Acessibilidade: 95/100 ✅
  +- Responsividade: 95/100 ✅
  +- Usabilidade: 90/100 ✅
  +- Performance: 90/100 ✅
- +## 🚀 Implementação
- +### Fase 1: Dashboard KPIs v0.2
  +- [x] Design tokens
  +- [x] Skip links
  +- [x] ARIA labels
  +- [ ] Grid responsivo
  +- [ ] Microinterações
  +- [ ] Dark mode
- +### Fase 2: Features v0.2
  +- [ ] Cards acessíveis
  +- [ ] Gráficos responsivos
  +- [ ] Touch targets 48px
  +- [ ] Loading states
- +### Fase 3: Pricing v0.2
  +- [ ] Tabelas responsivas
  +- [ ] Real-time updates
  +- [ ] WhatsApp integration
  +- [ ] PWA manifest
- +## 📝 Checklist de Validação
- +### Acessibilidade
  +- [ ] WAVE: 0 erros
  +- [ ] axe DevTools: 0 violações
  +- [ ] Lighthouse: > 95
  +- [ ] Navegação por teclado completa
  +- [ ] Screen reader testado
- +### Responsividade
  +- [ ] 320px: ✓
  +- [ ] 768px: ✓
  +- [ ] 1024px: ✓
  +- [ ] 1440px: ✓
  +- [ ] 4K: ✓
- +### Performance
  +- [ ] FCP < 2s
  +- [ ] TTI < 3.5s
  +- [ ] CLS < 0.1
  +- [ ] Bundle < 300KB
- +## 🎨 Referências de Design
- +Baseado em:
  +- Climate FieldView (simplicidade)
  +- FarmLogs (KPIs claros)
  +- Granular Insights (visualizações)
  +- Material Design 3 (acessibilidade)
  +- iOS Human Interface (touch)
- +## 📱 Progressive Web App
- +### Manifest.json
  +```json
  +{
- "name": "GlobalCoffee",
- "short_name": "GCoffee",
- "theme_color": "#4CAF50",
- "background_color": "#ffffff",
- "display": "standalone",
- "orientation": "any",
- "icons": [
- {
-      "src": "icon-192.png",
-      "sizes": "192x192",
-      "type": "image/png"
- },
- {
-      "src": "icon-512.png",
-      "sizes": "512x512",
-      "type": "image/png"
- }
- ]
  +}
  +```
- +## 🔄 Próximos Passos
- +1. Implementar dashboard_kpis_v0.2.html completo
  +2. Criar features_v0.2.html
  +3. Criar pricing_v0.2.html
  +4. Adicionar Service Worker
  +5. Testar com usuários reais
  +6. Documentar componentes
  \ No newline at end of file
