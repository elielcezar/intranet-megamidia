# Intranet Megamidia - Tema Drupal 10

Tema personalizado para a Intranet corporativa da Megamidia. Design moderno com sidebar, dashboard e gestão de comunicados, documentos e eventos.

## Requisitos

- Drupal 10.5+
- PHP 8.1+

## Instalação

1. Copie a pasta `intranet_megamidia` para `themes/custom/` do seu Drupal
2. Ative o tema em **Aparência** (`/admin/appearance`)
3. Configure como tema padrão

## Estrutura

```
intranet_megamidia/
├── intranet_megamidia.info.yml       # Definição do tema
├── intranet_megamidia.libraries.yml  # Bibliotecas CSS/JS
├── intranet_megamidia.theme          # Funções PHP do tema
├── css/
│   └── style.css                     # Estilos centralizados
├── js/
│   └── main.js                       # Scripts do tema
├── templates/
│   ├── html.html.twig                # Estrutura HTML base
│   ├── layout/
│   │   └── page.html.twig            # Template principal da página
│   ├── includes/
│   │   ├── header.html.twig          # Header com busca
│   │   ├── sidebar.html.twig         # Sidebar navegação
│   │   ├── footer.html.twig          # Footer
│   │   └── icons.html.twig           # Biblioteca de ícones SVG
│   ├── node/
│   │   ├── node--comunicado.html.twig
│   │   ├── node--documento.html.twig
│   │   └── node--evento.html.twig
│   ├── views/
│   │   ├── views-view--frontpage.html.twig
│   │   ├── views-view--comunicados.html.twig
│   │   ├── views-view--documentos.html.twig
│   │   └── views-view--eventos.html.twig
│   ├── block/
│   │   ├── block--system-branding-block.html.twig
│   │   └── block--system-menu-block.html.twig
│   └── menu/
│       └── menu--main.html.twig
└── logo.svg
```

## Tipos de Conteúdo Sugeridos

### Comunicado
- **Machine name:** `comunicado`
- **Campos:**
  - `title` - Título
  - `body` - Conteúdo
  - `field_imagem` - Imagem de destaque (Image)
  - `field_categoria` - Categoria (Term reference)
  - `field_anexos` - Anexos (File, múltiplo)

### Documento
- **Machine name:** `documento`
- **Campos:**
  - `title` - Nome do documento
  - `body` - Descrição
  - `field_arquivo` - Arquivo (File)
  - `field_categoria` - Categoria (Term reference)

### Evento
- **Machine name:** `evento`
- **Campos:**
  - `title` - Título do evento
  - `body` - Descrição
  - `field_data` - Data do evento (Date)
  - `field_horario` - Horário (Text)
  - `field_local` - Local (Text)
  - `field_categoria` - Categoria (Term reference)

## Taxonomia Sugerida

### Categoria
- **Machine name:** `categoria`
- **Termos sugeridos:**
  - RH
  - TI
  - Diretoria
  - Social
  - Operações

## Views Sugeridas

### Dashboard (Frontpage)
- **Machine name:** `frontpage`
- **Página:** `/`
- **Exibe:** Comunicados em destaque + recentes

### Comunicados
- **Machine name:** `comunicados`
- **Página:** `/comunicados`
- **Exibe:** Lista de comunicados

### Documentos
- **Machine name:** `documentos`
- **Página:** `/documentos`
- **Exibe:** Lista de documentos em tabela

### Eventos/Agenda
- **Machine name:** `eventos`
- **Página:** `/agenda`
- **Exibe:** Próximos eventos em cards

## Regiões

- `header` - Header
- `sidebar` - Sidebar
- `content` - Content (área principal)
- `footer` - Footer
- `highlighted` - Highlighted (mensagens)
- `help` - Help

## CSS/Tailwind

O tema usa Tailwind CSS via CDN com configuração customizada de cores:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      }
    }
  }
}
```

## Uso de Ícones

Para usar ícones nos templates:

```twig
{% include '@intranet_megamidia/includes/icons.html.twig' with {'icon': 'home', 'class': 'w-5 h-5'} %}
```

Ícones disponíveis: `home`, `file-text`, `calendar`, `search`, `bell`, `menu`, `sparkles`, `download`, `chevron-right`, `chevron-left`, `clock`, `map-pin`, `share`, `copy`, `plus`, `x`, `calendar-plus`, `user`, `logout`.

## Próximos Passos

1. **Criar tipos de conteúdo** no Drupal conforme especificado acima
2. **Criar taxonomia** Categoria
3. **Criar Views** para listagens
4. **Substituir dados mockados** nos templates por variáveis Twig dinâmicas do Drupal
5. **Configurar blocos** nas regiões header, sidebar e footer
6. **Implementar busca inteligente** (opcional - módulo customizado com IA)

## Desenvolvimento

Para modificar estilos, edite `css/style.css`. O Tailwind CSS está disponível via CDN, permitindo uso de todas as classes utilitárias nos templates.

Para adicionar novos comportamentos JavaScript, edite `js/main.js` seguindo o padrão de Drupal behaviors.

## Licença

Proprietário - Megamidia © 2024

