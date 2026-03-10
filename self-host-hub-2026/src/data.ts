import { Platform, SummaryGroup } from './types';

export const PLATFORMS: Platform[] = [
  {
    id: 'coolify',
    position: 1,
    name: 'Coolify',
    focus: 'Hospedar sites/apps como Vercel, mas grátis',
    advantages: [
      { tag: 'Painel bonito', explanation: 'Uma interface visual intuitiva que permite gerenciar seus servidores sem precisar digitar comandos complexos no terminal.', youtubeUrl: 'https://www.youtube.com/results?search_query=coolify+dashboard+tour' },
      { tag: 'Git auto-deploy', explanation: 'Sempre que você envia uma atualização para o GitHub, o Coolify percebe e atualiza seu site automaticamente.', youtubeUrl: 'https://www.youtube.com/results?search_query=coolify+git+autodeploy' },
      { tag: 'Templates prontos', explanation: 'Instale WordPress, bancos de dados e ferramentas famosas com apenas um clique, sem configurações manuais.', youtubeUrl: 'https://www.youtube.com/results?search_query=coolify+one+click+apps' },
      { tag: 'Monitoramento fácil', explanation: 'Gráficos simples que mostram quanto de memória e processamento seus aplicativos estão usando em tempo real.' }
    ],
    examples: 'SaaS completo com Next.js e PostgreSQL, Hub de Automação para Marketing, Homelab com monitoramento centralizado',
    detailedExamples: [
      { 
        title: 'SaaS Indie Escalável', 
        description: 'Configure um ambiente de produção profissional com deploy automático via GitHub. Benefícios: Economia de centenas de dólares em taxas de PaaS (como Vercel), isolamento total de dados e certificados SSL automáticos para todos os seus subdomínios.' 
      },
      { 
        title: 'Infraestrutura de Marketing Self-Hosted', 
        description: 'Hospede ferramentas como Mautic (e-mail marketing) e Plausible (analytics) em um único servidor. Benefícios: Privacidade total dos dados dos seus clientes, sem limites de rastreamento e custo fixo independente do volume de tráfego.' 
      },
      { 
        title: 'Ambiente de Desenvolvimento Colaborativo', 
        description: 'Crie ambientes de "Preview" automáticos para cada Pull Request da sua equipe. Benefícios: Agilidade no review de código, testes em ambiente real antes do merge e feedback visual imediato para designers e stakeholders.' 
      }
    ],
    hardwareMin: '2 GB / 2 núcleos / 30 GB',
    hardwareRec: '4–8 GB / 4 núcleos / 50–100 GB SSD',
    difficulty: 'Fácil',
    targetAudience: 'Quem quer Vercel-like sem pagar caro',
    audiences: [
      { title: 'Devs Indie / freelancers', description: 'Substitui Vercel/Railway/Render completamente. Pague 1x pelo VPS, hospede projetos ilimitados.' },
      { title: 'Homelabbers', description: 'Dashboard bonito para gerenciar todos os serviços do homelab com auto-update e monitoramento.' },
      { title: 'Pequenas agências', description: 'Multi-servidor: gerencie VPS de múltiplos clientes de um painel central com controle de acesso por time.' }
    ],
    subcategories: ['Desenvolvedores Indie', 'Pequenas Agências', 'Homelab Enthusiasts'],
    repoUrl: 'https://github.com/coollabsio/coolify',
    downloadUrl: 'https://github.com/coollabsio/coolify/releases',
    installCommand: 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash',
    installGuide: 'Interface disponível em http://localhost:8000 após instalação.',
    commands: [
      { title: 'Instalar Coolify', description: 'Script oficial de instalação em 1 linha', command: 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash' },
      { title: 'Ver logs do serviço', description: 'Acompanha logs em tempo real', command: 'sudo journalctl -u coolify -f' },
      { title: 'Reiniciar Coolify', description: 'Reinicia o serviço principal', command: 'sudo systemctl restart coolify' },
      { title: 'Atualizar Coolify', description: 'Re-executa o installer para atualizar', command: 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash' },
      { title: 'Verificar status', description: 'Checa se o serviço está rodando', command: 'sudo systemctl status coolify' },
      { title: 'Ver uso de disco', description: 'Checa espaço livre no servidor', command: 'df -h' },
      { title: 'Ver containers ativos', description: 'Lista todos os apps rodando', command: 'docker ps' },
      { title: 'Backup manual', description: 'Cria backup compactado dos dados', command: 'docker exec coolify tar -czf /data/backup-$(date +%Y%m%d).tar.gz /data' }
    ],
    supportedStacks: [
      { name: 'Sites WordPress', description: 'Blogs e sites institucionais prontos em segundos.' },
      { name: 'Apps Modernos (Node.js/Next.js)', description: 'Sistemas web atuais com deploy automático.' },
      { name: 'Bancos de Dados', description: 'PostgreSQL, MySQL, MongoDB e Redis para guardar seus dados.' },
      { name: 'Linguagens de Programação', description: 'Python, PHP, Go, Rust e muito mais.' },
      { name: 'Ferramentas de Marketing', description: 'Mautic, Plausible e outras para crescer seu negócio.' }
    ],
    installationSteps: [
      { title: 'Acesso SSH', description: 'Conecte-se ao seu servidor via terminal usando SSH.' },
      { title: 'Atualização do Sistema', description: 'Garanta que seu servidor esteja atualizado.', command: 'sudo apt update && sudo apt upgrade -y' },
      { title: 'Executar Instalador', description: 'Rode o script oficial que configura Docker e Coolify automaticamente.', command: 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash' },
      { title: 'Acesso Web', description: 'Aguarde alguns minutos e acesse o painel pelo navegador.', command: 'http://seu-ip:8000' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 22.04+', command: 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash' },
      { name: 'Debian 11+', command: 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash' },
      { name: 'CentOS/RHEL', command: 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash' },
      { name: 'Alpine Linux 3.16+', command: 'apk add curl bash && curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Sincroniza com seu GitHub/GitLab. Ao fazer um "push", o Coolify reconstrói e publica sua aplicação automaticamente.',
        script: 'git push origin main'
      },
      upload: {
        description: 'Permite subir arquivos Docker Compose ou arquivos estáticos diretamente pela interface web.',
        script: '# No painel: New Resource -> Docker Compose -> Cole seu código'
      },
      cli: {
        description: 'Controle total via terminal para automações e gerenciamento remoto avançado.',
        script: 'coolify resource create --type docker-compose'
      }
    },
    deployDescription: 'Conecte seu GitHub para deploy automático no push, suba um arquivo Docker Compose via painel ou use a CLI para gerenciar seus serviços remotamente.'
  },
  {
    id: 'dokploy',
    position: 2,
    name: 'Dokploy',
    focus: 'Apps e bancos organizados com Docker',
    advantages: [
      { tag: 'Backup auto', explanation: 'Cria cópias de segurança dos seus dados automaticamente, garantindo que você não perca nada se algo der errado.', youtubeUrl: 'https://www.youtube.com/results?search_query=dokploy+backup+setup' },
      { tag: 'Previews', explanation: 'Cria uma versão temporária do seu site para cada alteração que você faz, permitindo testar antes de publicar para todos.' },
      { tag: 'Leve', explanation: 'Consome pouquíssimos recursos do servidor, sendo ideal para máquinas menores e mais baratas.' },
      { tag: 'Cluster pequeno', explanation: 'Permite conectar alguns servidores juntos para aumentar a capacidade de forma simples.' }
    ],
    examples: 'Cluster de APIs em Node.js, Hospedagem de Bancos de Dados Isolados, Microserviços com Docker Compose',
    detailedExamples: [
      { 
        title: 'Gestão de Microserviços Corporativos', 
        description: 'Organize dezenas de containers Docker em um único painel intuitivo e centralizado. Benefícios: Redução drástica na complexidade de gerenciamento de rede Docker, monitoramento em tempo real de CPU/RAM por container e facilidade para escalar serviços individualmente sem downtime.' 
      },
      { 
        title: 'Central de Bancos de Dados com Backups', 
        description: 'Hospede instâncias isoladas de PostgreSQL, Redis e MongoDB para diferentes projetos com facilidade. Benefícios: Backups automáticos configuráveis para S3 ou local, isolamento total de segurança entre aplicações e economia de recursos ao compartilhar o mesmo kernel do servidor.' 
      },
      { 
        title: 'Ambientes de Staging para QA', 
        description: 'Crie clones rápidos da sua infraestrutura de produção para testes de qualidade. Benefícios: Garantia de que o código funcionará em produção, facilidade para compartilhar URLs de teste com stakeholders e destruição automática de ambientes após o uso.' 
      }
    ],
    hardwareMin: '2 GB / 1–2 núcleos / 30 GB',
    hardwareRec: '4 GB / 2–4 núcleos / 40–80 GB SSD',
    difficulty: 'Fácil',
    targetAudience: 'Docker users querendo PaaS gratuito bonito',
    audiences: [
      { title: 'DevOps Engineers', description: 'Gerenciamento simplificado de stacks Docker.' },
      { title: 'Full Stack Devs', description: 'Deploy rápido de aplicações sem configurar Nginx manualmente.' },
      { title: 'Startups', description: 'Infraestrutura escalável com custo zero de licença.' }
    ],
    subcategories: ['DevOps Engineers', 'Full Stack Devs', 'Startups'],
    repoUrl: 'https://github.com/Dokploy/dokploy',
    downloadUrl: 'https://dokploy.com/docs/introduction',
    installCommand: 'curl -sSL https://dokploy.com/install.sh | sh',
    installGuide: 'Acesse o painel via porta 3000 após a instalação.',
    commands: [
      { title: 'Instalar Dokploy', description: 'Script oficial', command: 'curl -sSL https://dokploy.com/install.sh | sh' },
      { title: 'Ver logs do Dokploy', description: 'Logs do painel de controle', command: 'docker logs dokploy' },
      { title: 'Ver uso de recursos', description: 'Monitora CPU e RAM dos containers', command: 'docker stats' },
      { title: 'Atualizar Dokploy', description: 'Baixa a versão mais recente', command: 'curl -sSL https://dokploy.com/install.sh | sh' }
    ],
    supportedStacks: [
      { name: 'Docker Compose', description: 'Roda qualquer conjunto de containers que você já tenha.' },
      { name: 'Apps Node.js/PHP', description: 'Ideal para APIs e sites dinâmicos.' },
      { name: 'Bancos de Dados Isolados', description: 'PostgreSQL e MongoDB com backups automáticos.' },
      { name: 'Ambientes de Teste', description: 'Crie versões de teste do seu app em segundos.' }
    ],
    installationSteps: [
      { title: 'Preparação', description: 'Certifique-se de que o Docker está instalado no seu servidor.' },
      { title: 'Instalação', description: 'Execute o script de instalação oficial para configurar o Dokploy.', command: 'curl -sSL https://dokploy.com/install.sh | sh' },
      { title: 'Configuração Inicial', description: 'Acesse o painel para criar seu primeiro usuário administrador.', command: 'http://seu-ip:3000' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+', command: 'curl -sSL https://dokploy.com/install.sh | sh' },
      { name: 'Debian 10+', command: 'curl -sSL https://dokploy.com/install.sh | sh' },
      { name: 'Alpine Linux 3.18+', command: 'apk add curl && curl -sSL https://dokploy.com/install.sh | sh' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Focado em GitOps. Conecte seu repositório e defina a branch. O Dokploy cuida do build e deploy.',
        script: 'git commit -m "update" && git push'
      },
      cli: {
        description: 'Interface de linha de comando para gerenciar containers, volumes e redes Docker de forma remota.',
        script: 'dokploy deploy --app my-cool-app'
      }
    },
    deployDescription: 'Focado em GitOps: basta configurar seu repositório e o Dokploy cuida do resto. Também oferece uma CLI poderosa para automações.'
  },
  {
    id: 'caprover',
    position: 3,
    name: 'CapRover',
    focus: 'Hospedar vários apps com painel clássico',
    advantages: [
      { tag: 'Zero downtime', explanation: 'Atualiza seus aplicativos sem que eles fiquem fora do ar por nem um segundo durante o processo.' },
      { tag: 'Domínio fácil', explanation: 'Configura endereços personalizados (como www.seusite.com) e certificados de segurança HTTPS de forma automática.' },
      { tag: 'Apps prontos', explanation: 'Uma biblioteca gigante de aplicativos que podem ser instalados instantaneamente.', youtubeUrl: 'https://www.youtube.com/results?search_query=caprover+one+click+apps' },
      { tag: 'Estável', explanation: 'Uma das ferramentas mais antigas e confiáveis do mercado, com poucos erros e bugs.' }
    ],
    examples: 'Clusters de Microserviços Ruby on Rails, Sites WordPress com Cache Avançado, APIs Python/Django',
    detailedExamples: [
      { 
        title: 'Alternativa ao Heroku para Rails/Node', 
        description: 'Migre suas aplicações Ruby on Rails ou Node.js para seu próprio VPS com a mesma facilidade do Heroku. Benefícios: Custo zero de plataforma, suporte nativo a workers (Sidekiq/Redis) e controle total sobre as variáveis de ambiente e segredos com certificados SSL automáticos.' 
      },
      { 
        title: 'Hospedagem de One-Click Apps', 
        description: 'Instale ferramentas como Ghost, Meilisearch ou WordPress em segundos através da biblioteca integrada. Benefícios: Configuração automática de Nginx e SSL, otimização de performance pré-configurada e interface extremamente simples para quem não quer lidar com terminal.' 
      },
      { 
        title: 'Cluster de APIs com Balanceamento', 
        description: 'Distribua o tráfego entre múltiplas instâncias da sua API para garantir alta disponibilidade. Benefícios: Tolerância a falhas (se uma instância cai, as outras assumem), facilidade para realizar atualizações sem tirar o serviço do ar e escalabilidade horizontal simplificada.' 
      }
    ],
    hardwareMin: '1–2 GB / 1–2 núcleos / 20–30 GB',
    hardwareRec: '4 GB / 2–4 núcleos / 50 GB+ SSD',
    difficulty: 'Fácil',
    targetAudience: 'Estilo Heroku clássico',
    audiences: [
      { title: 'SysAdmins', description: 'Controle total sobre o servidor com interface amigável.' },
      { title: 'Heroku Refugees', description: 'Experiência similar ao Heroku sem os custos proibitivos.' }
    ],
    subcategories: ['SysAdmins', 'Webmasters', 'Heroku Refugees'],
    repoUrl: 'https://github.com/caprover/caprover',
    downloadUrl: 'https://caprover.com/docs/get-started.html',
    installCommand: 'docker run -p 80:80 -p 443:443 -p 3000:3000 caprover/caprover',
    installGuide: 'Use a CLI local para configurar o servidor após o deploy do container.',
    commands: [
      { title: 'Rodar CapRover', description: 'Inicia o container principal', command: 'docker run -p 80:80 -p 443:443 -p 3000:3000 caprover/caprover' },
      { title: 'Instalar CLI Local', description: 'Ferramenta para comandar do seu PC', command: 'npm install -g caprover' },
      { title: 'Configurar Servidor', description: 'Primeiro setup via terminal', command: 'caprover setup' },
      { title: 'Fazer Deploy', description: 'Envia seu código para o servidor', command: 'caprover deploy' }
    ],
    supportedStacks: [
      { name: 'One-Click Apps', description: 'Mais de 100 apps como Ghost, WordPress e Meilisearch.' },
      { name: 'Sites PHP/Node.js', description: 'Suporte clássico para as linguagens mais usadas.' },
      { name: 'Apps Ruby on Rails', description: 'Excelente alternativa ao Heroku.' },
      { name: 'Bancos de Dados', description: 'MySQL, PostgreSQL e MongoDB integrados.' }
    ],
    installationSteps: [
      { title: 'Instalar Docker', description: 'O CapRover exige o Docker instalado no servidor.' },
      { title: 'Executar CapRover', description: 'Inicie o container principal do CapRover.', command: 'docker run -p 80:80 -p 443:443 -p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock -v /captain:/captain caprover/caprover' },
      { title: 'Configuração via CLI', description: 'Use a ferramenta de linha de comando para finalizar o setup.', command: 'npm install -g caprover && caprover setup' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 18.04+', command: 'docker run ... (ver comando acima)' },
      { name: 'Debian 9+', command: 'docker run ... (ver comando acima)' },
      { name: 'CentOS 7+', command: 'docker run ... (ver comando acima)' },
      { name: 'Alpine Linux 3.15+', command: 'apk add docker && docker run ...' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Configure um Webhook no seu GitHub. O CapRover receberá o sinal e atualizará o app instantaneamente.',
        script: '# No GitHub: Settings -> Webhooks -> Add webhook (URL do CapRover)'
      },
      upload: {
        description: 'Suba um arquivo compactado (.tar) contendo seu código e o arquivo captain-definition.',
        script: 'tar -cvf deploy.tar . && # Suba via painel'
      },
      cli: {
        description: 'O método preferido dos profissionais. Envie seu código direto do terminal do seu computador.',
        script: 'caprover deploy'
      }
    },
    deployDescription: 'Suporta deploy via Git (Webhooks), upload de arquivos .tar ou via CLI oficial (caprover deploy).'
  },
  {
    id: 'portainer',
    position: 4,
    name: 'Portainer',
    focus: 'Controlar containers num painel só',
    advantages: [
      { tag: 'Painel bonito', explanation: 'Interface visual moderna para gerenciar containers Docker sem precisar de linha de comando.', youtubeUrl: 'https://www.youtube.com/results?search_query=portainer+walkthrough' },
      { tag: 'Logs centralizados', explanation: 'Veja o que está acontecendo dentro de todos os seus aplicativos em uma única tela de texto.' },
      { tag: 'Seguro', explanation: 'Controle quem pode acessar e modificar cada parte do seu servidor com permissões detalhadas.' },
      { tag: 'Times organizados', explanation: 'Ideal para empresas, permitindo dividir o acesso entre diferentes equipes de desenvolvedores.' }
    ],
    examples: 'Gestão de Containers em Homelab, Monitoramento de Clusters Docker, Administração de Servidores Remotos',
    detailedExamples: [
      { 
        title: 'Painel de Controle para Homelab', 
        description: 'Visualize e gerencie todos os seus serviços domésticos (Plex, Pi-hole, Home Assistant) em uma interface web profissional. Benefícios: Facilidade para reiniciar containers travados, visualização gráfica do consumo de recursos e edição rápida de volumes e redes sem digitar uma única linha de comando.' 
      },
      { 
        title: 'Administração de Múltiplos Servidores', 
        description: 'Conecte diferentes servidores Docker (Edge Nodes) a um único painel central do Portainer. Benefícios: Visão consolidada de toda a sua infraestrutura distribuída, facilidade para mover stacks entre servidores e controle de acesso granular (RBAC) para diferentes membros da equipe de TI.' 
      },
      { 
        title: 'Ambiente de Treinamento Docker', 
        description: 'Use o Portainer como ferramenta educacional para ensinar conceitos de containers para novos desenvolvedores. Benefícios: Abstração visual de conceitos complexos (redes, volumes, imagens), interface segura que evita erros catastróficos no terminal e facilidade para auditar ações dos alunos.' 
      }
    ],
    hardwareMin: '1–2 GB / 1–2 núcleos / 20 GB',
    hardwareRec: '4 GB / 2 núcleos / 50 GB SSD',
    difficulty: 'Fácil',
    targetAudience: 'Quem tem containers e quer dashboard unificado',
    audiences: [
      { title: 'Homelabers', description: 'Organize todos os seus serviços de casa em um só lugar.' },
      { title: 'Docker Beginners', description: 'Aprenda Docker sem precisar decorar todos os comandos CLI.' }
    ],
    subcategories: ['Homelabers', 'IT Managers', 'Docker Beginners'],
    repoUrl: 'https://github.com/portainer/portainer',
    downloadUrl: 'https://www.portainer.io/install',
    installCommand: 'docker run -d -p 9443:9443 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce',
    installGuide: 'Acesse via HTTPS na porta 9443.',
    commands: [
      { title: 'Instalar CE', description: 'Roda a Community Edition', command: 'docker run -d -p 9443:9443 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce' },
      { title: 'Ver logs do Portainer', description: 'Logs do sistema', command: 'docker logs portainer' },
      { title: 'Parar Portainer', description: 'Para o painel sem apagar dados', command: 'docker stop portainer' },
      { title: 'Reiniciar Portainer', description: 'Reinicia o serviço', command: 'docker start portainer' }
    ],
    supportedStacks: [
      { name: 'Qualquer Container Docker', description: 'Se existe no Docker Hub, o Portainer roda.' },
      { name: 'Stacks Docker Compose', description: 'Gerencie múltiplos serviços de uma vez.' },
      { name: 'Serviços de Homelab', description: 'Plex, Pi-hole, Home Assistant e outros.' },
      { name: 'Ambientes de Desenvolvimento', description: 'Bancos de dados e APIs para programadores.' }
    ],
    installationSteps: [
      { title: 'Criar Volume', description: 'Crie um volume para persistir os dados do Portainer.', command: 'docker volume create portainer_data' },
      { title: 'Rodar Container', description: 'Inicie o Portainer Community Edition.', command: 'docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest' },
      { title: 'Acesso Seguro', description: 'Acesse via HTTPS para configurar a senha do admin.', command: 'https://seu-ip:9443' }
    ],
    supportedDistros: [
      { name: 'Qualquer Linux com Docker', command: 'docker run ... (ver comando acima)' },
      { name: 'Windows/Mac (Docker Desktop)', command: 'docker run ... (ver comando acima)' },
      { name: 'Alpine Linux (com Docker)', command: 'apk add docker && docker run ...' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      upload: {
        description: 'Copie e cole seu código Docker Compose diretamente no editor web do Portainer para criar "Stacks".',
        script: '# No painel: Stacks -> Add stack -> Web editor'
      },
      cli: {
        description: 'Gerencie containers remotamente via API ou conectando o Portainer a outros agentes Docker.',
        script: 'docker stack deploy -c docker-compose.yml my-stack'
      }
    },
    deployDescription: 'Crie containers colando o código do Docker Compose no editor web ou subindo arquivos .yaml diretamente.'
  },
  {
    id: 'casaos',
    position: 5,
    name: 'CasaOS',
    focus: 'Sistema simples pra NAS/homelab com loja',
    advantages: [
      { tag: 'Fácil', explanation: 'Interface que lembra a área de trabalho de um computador, feita para quem não entende nada de programação.' },
      { tag: 'Loja de apps', explanation: 'Uma "App Store" para o seu servidor. Clique em instalar e o aplicativo aparece na sua tela.', youtubeUrl: 'https://www.youtube.com/results?search_query=casaos+app+store' },
      { tag: 'Arquivos bonitos', explanation: 'Gerenciador de arquivos visual que permite arrastar e soltar documentos como se fosse o Windows ou Mac.' }
    ],
    examples: 'Nuvem Pessoal de Arquivos, Central de Mídia Doméstica, Servidor de Backup Automatizado',
    detailedExamples: [
      { 
        title: 'Substituição Completa do Google Drive/Photos', 
        description: 'Hospede o Nextcloud ou Immich para gerenciar seus arquivos e fotos com segurança. Benefícios: Privacidade absoluta (seus dados não saem da sua casa), sem taxas mensais de armazenamento e sincronização automática entre todos os seus dispositivos móveis e desktops.' 
      },
      { 
        title: 'Central de Entretenimento Familiar', 
        description: 'Instale Plex ou Jellyfin para organizar sua biblioteca de filmes e séries de forma profissional. Benefícios: Interface estilo Netflix para seus próprios arquivos, streaming fluido para smart TVs e dispositivos móveis, e organização automática de metadados, capas e legendas.' 
      },
      { 
        title: 'Segurança e Privacidade na Rede Doméstica', 
        description: 'Rode o AdGuard Home ou Pi-hole para bloquear anúncios e rastreadores em toda a sua rede. Benefícios: Navegação mais rápida, proteção contra sites maliciosos e bloqueio de propagandas em smart TVs e dispositivos IoT que não aceitam extensões de browser.' 
      }
    ],
    hardwareMin: '2 GB / 1–2 núcleos / 20 GB',
    hardwareRec: '4–8 GB / 2–4 núcleos / 100 GB+',
    difficulty: 'Muito fácil',
    targetAudience: 'Iniciante, família, Raspberry Pi/mini PC',
    audiences: [
      { title: 'Casual Users', description: 'Interface intuitiva que qualquer um pode usar.' },
      { title: 'Privacy Advocates', description: 'Mantenha seus dados sob seu controle total.' }
    ],
    subcategories: ['Casual Users', 'Privacy Advocates', 'Media Collectors'],
    repoUrl: 'https://github.com/IceWhaleTech/CasaOS',
    downloadUrl: 'https://casaos.io/',
    installCommand: 'curl -fsSL https://get.casaos.io | bash',
    installGuide: 'Acesse o IP do servidor no seu navegador.',
    commands: [
      { title: 'Instalação Rápida', description: 'Script de um clique', command: 'curl -fsSL https://get.casaos.io | bash' },
      { title: 'Verificar Status', description: 'Checa se o sistema está ok', command: 'systemctl status casaos' },
      { title: 'Reiniciar CasaOS', description: 'Reinicia a interface', command: 'systemctl restart casaos' },
      { title: 'Atualizar via Terminal', description: 'Força atualização do sistema', command: 'curl -fsSL https://get.casaos.io | bash' }
    ],
    supportedStacks: [
      { name: 'Cinema em Casa (Plex/Jellyfin)', description: 'Organize seus filmes e séries como um Netflix próprio.' },
      { name: 'Nuvem de Arquivos (Nextcloud)', description: 'Seu próprio Google Drive sem mensalidade.' },
      { name: 'Bloqueador de Anúncios (AdGuard)', description: 'Navegue sem propagandas em todos os aparelhos da casa.' },
      { name: 'Download de Arquivos', description: 'Transmission e qBittorrent para baixar arquivos.' }
    ],
    installationSteps: [
      { title: 'Script de Instalação', description: 'Rode o comando oficial de instalação automática.', command: 'curl -fsSL https://get.casaos.io | bash' },
      { title: 'Aguardar Finalização', description: 'O script instalará todas as dependências necessárias.' },
      { title: 'Primeiro Acesso', description: 'Acesse o painel web para criar sua conta local.', command: 'http://seu-ip' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+', command: 'curl -fsSL https://get.casaos.io | bash' },
      { name: 'Debian 11+', command: 'curl -fsSL https://get.casaos.io | bash' },
      { name: 'Raspberry Pi OS', command: 'curl -fsSL https://get.casaos.io | bash' },
      { name: 'Alpine Linux 3.17+', command: 'apk add curl bash && curl -fsSL https://get.casaos.io | bash' }
    ],
    deployMethods: { 
      dragNDrop: true, 
      autoDeploy: false, 
      ftp: true, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      dragNDrop: {
        description: 'Arraste arquivos do seu computador diretamente para as pastas do servidor como se fosse um HD externo.',
        script: '# Basta arrastar o arquivo para a janela do navegador no Files app'
      },
      ftp: {
        description: 'Conecte via FileZilla ou WinSCP para transferir grandes volumes de dados de forma estável.',
        script: 'sftp://seu-ip (porta 22)'
      },
      upload: {
        description: 'Instale novos aplicativos subindo arquivos Docker Compose ou selecionando na App Store integrada.',
        script: '# App Store -> Custom Install -> Import Docker Compose'
      },
      cli: {
        description: 'Acesse o terminal integrado para rodar comandos Docker manualmente se necessário.',
        script: 'casaos-cli app install my-app'
      }
    },
    deployDescription: 'Gerencie arquivos arrastando para o navegador, use FTP para transferências pesadas ou suba arquivos via interface web.'
  },
  {
    id: 'runtipi',
    position: 6,
    name: 'Tipi (RunTipi)',
    focus: 'Loja de apps com 1 clique',
    advantages: [
      { tag: '+200 apps', explanation: 'Uma biblioteca vasta de aplicativos prontos para uso imediato.' },
      { tag: 'Painel limpo', explanation: 'Design focado na simplicidade, sem poluição visual ou menus complicados.' },
      { tag: 'Atualiza fácil', explanation: 'Mantenha todos os seus aplicativos na versão mais recente com apenas um clique.' }
    ],
    examples: 'Central de Backup de Fotos com Immich, Gerenciador de Senhas Seguro com Vaultwarden, Dashboard de Monitoramento Pessoal',
    detailedExamples: [
      { 
        title: 'Nuvem de Fotos Familiar Privada', 
        description: 'Instale o Immich para fazer backup automático das fotos do celular de toda a família com facilidade. Benefícios: Interface moderna idêntica ao Google Photos, reconhecimento facial processado localmente (privacidade total) e economia vitalícia de planos de armazenamento em nuvem paga.' 
      },
      { 
        title: 'Cofre de Senhas Corporativo/Familiar', 
        description: 'Hospede o Vaultwarden para gerenciar as senhas da sua equipe ou família de forma centralizada. Benefícios: Sincronização segura entre todos os dispositivos, preenchimento automático em browsers e controle total sobre a criptografia e localização dos seus dados sensíveis.' 
      },
      { 
        title: 'Hub de Automação Residencial', 
        description: 'Rode o Home Assistant para controlar luzes, câmeras e sensores da sua casa inteligente. Benefícios: Independência de nuvens de fabricantes (funciona offline), automações complexas e personalizadas e integração de dispositivos de diferentes marcas em um só lugar.' 
      }
    ],
    hardwareMin: '4 GB / 2 núcleos / 10–20 GB',
    hardwareRec: '8 GB+ / 4 núcleos / 40 GB+ SSD',
    difficulty: 'Fácil',
    targetAudience: 'Instalar serviços sem config',
    subcategories: ['App Store Users', 'Homelab Beginners'],
    repoUrl: 'https://github.com/runtipi/runtipi',
    downloadUrl: 'https://github.com/runtipi/runtipi/releases',
    installCommand: 'curl -L https://setup.runtipi.io | bash',
    installGuide: '1. Execute o script. 2. Siga as instruções no terminal.',
    supportedStacks: [
      { name: 'Loja de Apps Pronta', description: 'Mais de 200 aplicativos que você instala com um clique.' },
      { name: 'Fotos e Arquivos', description: 'Immich e Nextcloud para guardar suas memórias.' },
      { name: 'Segurança de Senhas', description: 'Vaultwarden para nunca mais esquecer uma senha.' }
    ],
    installationSteps: [
      { title: 'Script de Instalação', description: 'Execute o comando de instalação automática.', command: 'curl -L https://setup.runtipi.io | bash' },
      { title: 'Configuração', description: 'Siga as instruções no terminal para finalizar o setup.' },
      { title: 'Acesso', description: 'Acesse o painel web pelo IP do servidor.', command: 'http://seu-ip' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+', command: 'curl -L https://setup.runtipi.io | bash' },
      { name: 'Debian 11+', command: 'curl -L https://setup.runtipi.io | bash' },
      { name: 'Alpine Linux 3.16+', command: 'apk add curl bash && curl -L https://setup.runtipi.io | bash' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      upload: {
        description: 'Instale qualquer app da loja com um clique ou suba seus próprios arquivos Docker Compose.',
        script: '# No painel: App Store -> Custom App'
      },
      cli: {
        description: 'Use a CLI do Tipi para gerenciar o estado do servidor e dos aplicativos instalados.',
        script: './runtipi-cli restart'
      }
    },
    deployDescription: 'A instalação é feita quase inteiramente pela loja de apps interna. Você também pode subir arquivos de configuração via painel.'
  },
  {
    id: 'easypanel',
    position: 7,
    name: 'EasyPanel',
    focus: 'Painel leve pra VPS pequeno',
    advantages: [
      { tag: 'Roda em máquina fraca', explanation: 'Otimizado para funcionar até em servidores com pouca memória (1GB RAM).', youtubeUrl: 'https://www.youtube.com/results?search_query=easypanel+setup' },
      { tag: 'Git + SSL auto', explanation: 'Conecta ao seu código e gera cadeados de segurança (HTTPS) automaticamente.' },
      { tag: 'Rápido', explanation: 'Interface veloz e deploys que terminam em poucos segundos.' }
    ],
    examples: 'Landing Pages de Alta Performance, APIs em Micro-VPS, Sites Estáticos com SSL Automático',
    detailedExamples: [
      { 
        title: 'Hospedagem de Landing Pages de Conversão', 
        description: 'Suba sites estáticos ou em PHP em servidores de baixo custo com performance otimizada. Benefícios: Carregamento ultra-rápido para melhor SEO, certificados SSL renovados automaticamente e interface extremamente leve que não consome a RAM preciosa do seu servidor de entrada.' 
      },
      { 
        title: 'Micro-APIs Escaláveis para Startups', 
        description: 'Deploy de pequenas APIs em Node.js, Python ou Go com isolamento Docker simplificado. Benefícios: Facilidade para gerenciar variáveis de ambiente, logs em tempo real integrados no painel e deploy via Git que economiza horas de configuração manual.' 
      },
      { 
        title: 'Ambiente de Desenvolvimento Remoto', 
        description: 'Configure um servidor de desenvolvimento acessível de qualquer lugar para codar fora de casa. Benefícios: Consistência de ambiente entre diferentes máquinas, facilidade para compartilhar demos ao vivo e segurança de dados ao manter o código em seu próprio servidor.' 
      }
    ],
    hardwareMin: '1–2 GB / 1 núcleo / 20 GB',
    hardwareRec: '2–4 GB / 2 núcleos / 40 GB SSD',
    difficulty: 'Muito fácil',
    targetAudience: 'VPS barato, projetos minimalistas',
    subcategories: ['Budget Devs', 'Minimalists'],
    repoUrl: 'https://github.com/easypanel-io/easypanel',
    downloadUrl: 'https://get.easypanel.io',
    installCommand: 'curl -sSL https://get.easypanel.io | sh',
    installGuide: '1. Execute o script. 2. Acesse a porta 8800.',
    supportedStacks: [
      { name: 'Sites Leves', description: 'Perfeito para blogs e sites que não precisam de muita potência.' },
      { name: 'Pequenos Sistemas', description: 'APIs e ferramentas internas para sua empresa.' },
      { name: 'Certificados Grátis', description: 'HTTPS automático para todos os seus sites.' }
    ],
    installationSteps: [
      { title: 'Instalação', description: 'Execute o script de instalação oficial.', command: 'curl -sSL https://easypanel.io/install.sh | sh' },
      { title: 'Acesso', description: 'Acesse o painel web para configuração inicial.', command: 'http://seu-ip:3000' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+', command: 'curl -sSL https://get.easypanel.io | sh' },
      { name: 'Debian 10+', command: 'curl -sSL https://get.easypanel.io | sh' },
      { name: 'Alpine Linux 3.18+', command: 'apk add curl bash && curl -sSL https://get.easypanel.io | sh' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Conecte seu GitHub e o Easypanel fará o deploy automático a cada novo commit.',
        script: 'git push origin main'
      },
      cli: {
        description: 'Gerencie seus projetos e serviços diretamente pelo terminal usando a CLI oficial.',
        script: 'easypanel deploy'
      }
    },
    deployDescription: 'Conecte seu repositório Git para deploys automáticos ou use a CLI para gerenciar seus projetos.'
  },
  {
    id: 'yunohost',
    position: 8,
    name: 'YunoHost',
    focus: 'Servidor completo pronto',
    advantages: [
      { tag: '+400 apps', explanation: 'Uma das maiores lojas de aplicativos self-hosted do mundo.' },
      { tag: 'Domínio/email/SSL fácil', explanation: 'Gerencie seu próprio servidor de e-mail e endereços web sem dor de cabeça.' },
      { tag: 'Maduro', explanation: 'Projeto com anos de estrada, extremamente estável e com grande comunidade.' }
    ],
    examples: 'Servidor de E-mail Profissional, Nuvem Colaborativa com Nextcloud, Chat Privado com Matrix',
    detailedExamples: [
      { 
        title: 'Servidor de E-mail Profissional Independente', 
        description: 'Configure seu próprio servidor de e-mail com suporte a IMAP, SMTP e webmail moderno. Benefícios: Fim das taxas mensais por usuário, privacidade total das suas mensagens e ferramentas antispam de nível corporativo integradas nativamente.' 
      },
      { 
        title: 'Escritório Digital Colaborativo Self-Hosted', 
        description: 'Hospede Nextcloud para arquivos, OnlyOffice para edição de documentos e Matrix para chat em tempo real. Benefícios: Alternativa soberana ao Google Workspace/Microsoft 365, controle total sobre permissões de dados e sem limites artificiais de armazenamento.' 
      },
      { 
        title: 'Plataforma de Blog e Conteúdo', 
        description: 'Instale WordPress, Ghost ou WriteFreely para publicar seus pensamentos sem censura. Benefícios: Propriedade total do seu conteúdo, facilidade de backup e uma vasta seleção de plugins e temas instaláveis com um clique.' 
      }
    ],
    hardwareMin: '2 GB / 1–2 núcleos / 20–30 GB',
    hardwareRec: '4–8 GB / 2–4 núcleos / 100 GB+',
    difficulty: 'Fácil',
    targetAudience: 'Não-programador querendo tudo rápido',
    subcategories: ['Non-Tech Users', 'Self-Hosting Advocates'],
    repoUrl: 'https://github.com/YunoHost/yunohost',
    downloadUrl: 'https://yunohost.org/en/install',
    installCommand: 'Follow official ISO installation guide',
    installGuide: '1. Baixe a ISO. 2. Grave no pendrive. 3. Siga o instalador.',
    supportedStacks: [
      { name: 'E-mail Próprio', description: 'Tenha seu e-mail profissional sem depender de grandes empresas.' },
      { name: 'Chat e Mensagens', description: 'XMPP e Matrix para conversar com privacidade.' },
      { name: 'Nuvem Completa', description: 'Arquivos, contatos e calendários sincronizados.' }
    ],
    installationSteps: [
      { title: 'Instalação', description: 'Execute o script de instalação oficial.', command: 'curl https://install.yunohost.org | bash' },
      { title: 'Pós-Instalação', description: 'Siga o guia de configuração inicial via web ou terminal.', command: 'yunohost tools postinstall' }
    ],
    supportedDistros: [
      { name: 'Debian 11/12 (Recomendado)', command: 'curl https://install.yunohost.org | bash' },
      { name: 'Raspberry Pi OS', command: 'curl https://install.yunohost.org | bash' },
      { name: 'Alpine Linux 3.19+', command: 'apk add curl bash && curl https://install.yunohost.org | bash' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: true, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      ftp: {
        description: 'Cada usuário tem seu próprio espaço SFTP para gerenciar arquivos de sites e apps.',
        script: 'sftp usuario@seu-dominio.com'
      },
      upload: {
        description: 'Instale centenas de apps empacotados pela comunidade diretamente pelo painel web.',
        script: '# Painel -> Aplicações -> Instalar'
      },
      cli: {
        description: 'Comande todo o servidor, usuários e domínios através de uma CLI extremamente completa.',
        script: 'yunohost app install wordpress'
      }
    },
    deployDescription: 'Focado em uma interface web onde você escolhe o app e ele é instalado. Suporta upload de scripts de instalação customizados.'
  },
  {
    id: 'kamal',
    position: 9,
    name: 'Kamal',
    focus: 'Deploy simples via SSH',
    advantages: [
      { tag: 'YAML fácil', explanation: 'Configuração simples através de um único arquivo de texto que qualquer um pode ler.' },
      { tag: 'Zero downtime', explanation: 'Atualize seu aplicativo sem que ele fique fora do ar nem por um milissegundo.' },
      { tag: 'Qualquer VPS', explanation: 'Funciona em qualquer servidor que tenha acesso via SSH, sem depender de painéis complexos.' }
    ],
    examples: 'Deploy de Aplicações Ruby on Rails, Sites Laravel com Zero Downtime, Microserviços Python',
    detailedExamples: [
      { 
        title: 'Deploy de App Rails em Produção Real', 
        description: 'Gerencie o deploy de uma aplicação Ruby on Rails complexa em múltiplos servidores via SSH de forma automatizada. Benefícios: Processo de deploy extremamente rápido, rollback instantâneo se algo der errado e configuração via YAML que facilita o versionamento da infraestrutura como código.' 
      },
      { 
        title: 'Infraestrutura de Microserviços de Alta Performance', 
        description: 'Use o Kamal para orquestrar diferentes serviços Docker em servidores distintos sem o overhead de um painel pesado. Benefícios: Independência total de provedores de nuvem específicos, custo fixo de VPS e controle absoluto sobre o ciclo de vida dos containers.' 
      },
      { 
        title: 'Hospedagem de APIs em Go/Rust', 
        description: 'Deploy de binários de alta performance com gerenciamento de tráfego integrado. Benefícios: Latência mínima, facilidade para gerenciar múltiplas versões da mesma API e segurança robusta através de comunicação SSH direta.' 
      }
    ],
    hardwareMin: '1–2 GB / 1 núcleo / 20 GB',
    hardwareRec: '4 GB / 2 núcleos / 40 GB SSD',
    difficulty: 'Fácil',
    targetAudience: 'Dev que quer controle total sem PaaS',
    subcategories: ['Ruby on Rails Devs', 'Laravel Devs'],
    repoUrl: 'https://github.com/basecamp/kamal',
    downloadUrl: 'https://rubygems.org/gems/kamal',
    installCommand: 'gem install kamal',
    installGuide: '1. Instale a gem. 2. Configure o deploy.yml.',
    supportedStacks: [
      { name: 'Apps Ruby on Rails', description: 'Otimizado para a stack favorita da Basecamp.' },
      { name: 'Apps Node.js/Python', description: 'Funciona com qualquer aplicação Dockerizada.' },
      { name: 'Bancos de Dados', description: 'Gerencie acessórios como Postgres e Redis via Docker.' }
    ],
    installationSteps: [
      { title: 'Instalar Ruby', description: 'O Kamal é uma Gem do Ruby, então você precisa do Ruby instalado localmente.' },
      { title: 'Instalar Kamal', description: 'Instale a gem do Kamal.', command: 'gem install kamal' },
      { title: 'Inicializar Projeto', description: 'Crie os arquivos de configuração iniciais.', command: 'kamal init' },
      { title: 'Configurar Servidores', description: 'Edite o arquivo config/deploy.yml com os IPs dos seus servidores.' },
      { title: 'Deploy', description: 'Execute o comando de deploy para subir sua aplicação.', command: 'kamal deploy' }
    ],
    supportedDistros: [
      { name: 'Qualquer Linux com Docker & SSH', command: 'kamal setup (após configurar deploy.yml)' },
      { name: 'Alpine Linux 3.16+', command: 'apk add docker ruby && gem install kamal' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      cli: {
        description: 'Todo o processo é via CLI: você configura um arquivo YAML local e roda "kamal deploy" para subir seu app via SSH.',
        script: 'kamal deploy'
      }
    },
    deployDescription: 'Todo o processo é via CLI: você configura um arquivo YAML local e roda "kamal deploy" para subir seu app via SSH.'
  },
  {
    id: 'podman',
    position: 10,
    name: 'Podman + Desktop',
    focus: 'Containers mais seguros (sem root)',
    advantages: [
      { tag: 'Seguro', explanation: 'Arquitetura focada em segurança, rodando containers sem privilégios desnecessários.' },
      { tag: 'Interface desktop', explanation: 'Um aplicativo visual para Windows, Mac e Linux para gerenciar tudo localmente.' },
      { tag: 'Kubernetes compatível', explanation: 'Perfeito para quem quer começar pequeno e depois crescer para clusters gigantes.' }
    ],
    examples: 'Desenvolvimento Local Seguro, Servidor de Containers sem Root, Alternativa Leve ao Docker Desktop',
    detailedExamples: [
      { 
        title: 'Ambiente de Dev Seguro e sem Privilégios', 
        description: 'Rode seus containers de desenvolvimento sem precisar de acesso root no seu sistema operacional principal. Benefícios: Segurança superior para o sistema hospedeiro, isolamento total de processos e facilidade para rodar em ambientes corporativos com políticas restritivas.' 
      },
      { 
        title: 'Alternativa FOSS ao Docker Desktop', 
        description: 'Use o Podman Desktop como uma interface visual gratuita, leve e de código aberto para gerenciar containers. Benefícios: Compatibilidade total com comandos Docker, menor consumo de recursos em repouso e suporte nativo para exportar pods para o Kubernetes.' 
      },
      { 
        title: 'Laboratório Kubernetes Local (Kind/Minikube)', 
        description: 'Use o Podman como backend para rodar clusters Kubernetes locais para testes de arquitetura. Benefícios: Rapidez no ciclo de feedback, facilidade para simular ambientes complexos de nuvem e baixo overhead de rede comparado a máquinas virtuais.' 
      }
    ],
    hardwareMin: '2 GB / 2 núcleos / 20 GB',
    hardwareRec: '4–8 GB / 4 núcleos / 50 GB SSD',
    difficulty: 'Médio',
    targetAudience: 'Segurança alta, alternativa Docker',
    subcategories: ['Security Focused', 'Enterprise Devs'],
    repoUrl: 'https://github.com/containers/podman',
    downloadUrl: 'https://podman-desktop.io/',
    installCommand: 'sudo apt install podman',
    installGuide: '1. Instale via gerenciador de pacotes. 2. Baixe o Podman Desktop.',
    supportedStacks: [
      { name: 'Containers OCI', description: 'Compatibilidade total com imagens Docker.' },
      { name: 'Pods Kubernetes', description: 'Agrupe containers como se estivessem no K8s.' },
      { name: 'Ambientes de Dev', description: 'Ideal para substituir o Docker Desktop.' }
    ],
    installationSteps: [
      { title: 'Instalação Linux', description: 'Instale o Podman usando o gerenciador de pacotes da sua distro.', command: 'sudo apt install podman' },
      { title: 'Podman Desktop', description: 'Baixe e instale o Podman Desktop para uma interface visual.' },
      { title: 'Verificar Instalação', description: 'Confira se o Podman está funcionando corretamente.', command: 'podman --version' }
    ],
    supportedDistros: [
      { name: 'Fedora/RHEL (Nativo)', command: 'sudo dnf install podman' },
      { name: 'Ubuntu 22.04+', command: 'sudo apt update && sudo apt install podman' },
      { name: 'Debian 11+', command: 'sudo apt update && sudo apt install podman' },
      { name: 'Alpine Linux 3.16+', command: 'apk add podman' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      cli: {
        description: 'Gerenciamento via terminal (CLI) ou através do aplicativo Podman Desktop para uma experiência visual.',
        script: 'podman run -d --name my-app my-image'
      }
    },
    deployDescription: 'Gerenciamento via terminal (CLI) ou através do aplicativo Podman Desktop para uma experiência visual.'
  },
  {
    id: 'rancher',
    position: 11,
    name: 'Rancher',
    focus: 'Gerenciar Kubernetes profissional',
    advantages: [
      { tag: 'Painel completo', explanation: 'A ferramenta definitiva para gerenciar múltiplos clusters de servidores de uma vez.' },
      { tag: 'Multi-cluster', explanation: 'Controle servidores em diferentes nuvens (AWS, Google, DigitalOcean) de um só lugar.' },
      { tag: 'Alertas prontos', explanation: 'Sistema de avisos que te notifica se algo parar de funcionar ou se o servidor estiver cheio.' }
    ],
    examples: 'Gestão de Clusters Kubernetes Multi-Cloud, Governança de TI Corporativa, Automação de Infraestrutura',
    detailedExamples: [
      { 
        title: 'Central de Comando Kubernetes Multi-Cloud', 
        description: 'Gerencie clusters na AWS, Google Cloud e servidores locais em um único painel Rancher unificado. Benefícios: Padronização total de segurança em toda a empresa, facilidade para provisionar novos clusters em minutos e visão unificada de custos e consumo de recursos.' 
      },
      { 
        title: 'Self-Service para Equipes de Desenvolvimento', 
        description: 'Permita que times criem seus próprios namespaces e deploys com limites de recursos pré-definidos. Benefícios: Agilidade extrema para o time de desenvolvimento, controle total para o time de infraestrutura e redução drástica de tickets de suporte manual.' 
      },
      { 
        title: 'Segurança e Conformidade Corporativa', 
        description: 'Implemente políticas de segurança (Network Policies) e controle de acesso (RBAC) em todos os seus clusters. Benefícios: Garantia de conformidade com normas de auditoria, isolamento de rede entre diferentes departamentos e proteção contra acessos não autorizados.' 
      }
    ],
    hardwareMin: '4–8 GB / 4 núcleos / 50 GB',
    hardwareRec: '16 GB+ / 8 núcleos / 100 GB+ SSD',
    difficulty: 'Difícil',
    targetAudience: 'Time DevOps Kubernetes enterprise',
    subcategories: ['DevOps Teams', 'Enterprise Architects'],
    repoUrl: 'https://github.com/rancher/rancher',
    downloadUrl: 'https://hub.docker.com/r/rancher/rancher',
    installCommand: 'docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher',
    installGuide: '1. Execute o container Rancher. 2. Acesse via HTTPS.',
    supportedStacks: [
      { name: 'Clusters Kubernetes (K8s)', description: 'Gestão profissional de orquestração.' },
      { name: 'Helm Charts', description: 'Instale aplicações complexas com um clique.' },
      { name: 'Segurança RBAC', description: 'Controle fino de quem acessa o quê.' }
    ],
    installationSteps: [
      { title: 'Docker', description: 'O Rancher roda como um container Docker.' },
      { title: 'Instalação', description: 'Rode o comando Docker para iniciar o servidor do Rancher.', command: 'docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher' },
      { title: 'Acesso Web', description: 'Acesse o painel via HTTPS para configurar a senha inicial.', command: 'https://seu-ip' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04/22.04 (Docker)', command: 'docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher' },
      { name: 'RHEL/CentOS (Docker)', command: 'docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher' },
      { name: 'Alpine Linux (com Docker)', command: 'apk add docker && docker run ...' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Integração nativa com repositórios Git para Continuous Delivery via Fleet.',
        script: '# No painel: Continuous Delivery -> Git Repos'
      },
      upload: {
        description: 'Importe arquivos YAML do Kubernetes ou Helm Charts diretamente pelo painel.',
        script: '# No painel: Import YAML'
      },
      cli: {
        description: 'Use a CLI do Rancher ou kubectl para gerenciar seus clusters remotamente.',
        script: 'rancher up'
      }
    },
    deployDescription: 'Gerencie clusters Kubernetes através do painel web (upload de YAML) ou via CLI (kubectl/rancher cli).'
  },
  {
    id: 'kubesphere',
    position: 12,
    name: 'KubeSphere',
    focus: 'Kubernetes tudo-em-um amigável',
    advantages: [
      { tag: 'Pipeline CI/CD', explanation: 'Automatize o ciclo de vida das suas aplicações do código ao deploy.' },
      { tag: 'Monitoramento', explanation: 'Dashboards integrados para observar a saúde do seu cluster em tempo real.' },
      { tag: 'Loja de Apps', explanation: 'Instale serviços complexos com apenas um clique através de Helm.' }
    ],
    examples: 'Plataforma de Microserviços para Agências, Pipeline CI/CD Moderno, Loja de Apps Interna',
    detailedExamples: [
      { 
        title: 'Plataforma de Desenvolvimento Cloud-Native Unificada', 
        description: 'Ofereça aos seus desenvolvedores um ambiente K8s completo com monitoramento, logging e service mesh inclusos. Benefícios: Redução massiva do tempo de setup de novos projetos, visibilidade total da saúde das aplicações e ferramentas de debugging visual integradas.' 
      },
      { 
        title: 'Modernização de Aplicações Monolíticas Legadas', 
        description: 'Migre apps antigos para containers com orquestração KubeSphere de forma simplificada. Benefícios: Facilidade para implementar estratégias de deploy avançadas (Canary, Blue-Green), auto-scaling inteligente baseado em tráfego e alta disponibilidade nativa.' 
      },
      { 
        title: 'Loja de Aplicativos Interna Corporativa', 
        description: 'Crie um catálogo de serviços pré-aprovados que seus times podem instalar com um clique. Benefícios: Padronização de versões de software, facilidade para distribuir ferramentas internas e governança sobre o que é rodado no cluster.' 
      }
    ],
    hardwareMin: '8 GB / 4 núcleos / 50 GB',
    hardwareRec: '16–32 GB / 8 núcleos / 100 GB+',
    difficulty: 'Difícil',
    targetAudience: 'Kubernetes completo com painel fácil',
    subcategories: ['Cloud Native Devs', 'K8s Operators'],
    repoUrl: 'https://github.com/kubesphere/kubesphere',
    downloadUrl: 'https://kubesphere.io/docs/quickstart/introduction/',
    installCommand: './kk create cluster --name demo',
    installGuide: '1. Baixe o KubeKey. 2. Execute o comando de criação.',
    supportedStacks: [
      { name: 'Clusters Kubernetes', description: 'Gestão completa de orquestração cloud-native.' },
      { name: 'Microserviços Java/Go', description: 'Ideal para arquiteturas corporativas modernas.' },
      { name: 'DevOps Tools', description: 'Jenkins, SonarQube e outras ferramentas integradas.' }
    ],
    installationSteps: [
      { title: 'Baixar KubeKey', description: 'Baixe o binário do KubeKey no seu servidor.', command: 'curl -L https://github.com/kubesphere/kubekey/releases/download/v3.0.13/kubekey-v3.0.13-linux-amd64.tar.gz | tar -xz' },
      { title: 'Criar Cluster', description: 'Inicie a criação do cluster Kubernetes.', command: './kk create cluster --with-kubernetes v1.22.12 --with-kubesphere v3.3.1' },
      { title: 'Acompanhar', description: 'Aguarde a finalização e anote os dados de acesso.' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04/22.04', command: './kk create cluster ...' },
      { name: 'Debian 10/11', command: './kk create cluster ...' },
      { name: 'CentOS 7/8', command: './kk create cluster ...' },
      { name: 'Alpine Linux (Experimental)', command: 'apk add curl bash && ./kk create cluster ...' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Pipelines CI/CD integrados que buscam seu código no Git e fazem o deploy automático no cluster.',
        script: '# No painel: DevOps Projects -> Create Pipeline'
      },
      upload: {
        description: 'Suba manifestos Kubernetes (YAML) ou Helm Charts através da interface visual.',
        script: '# No painel: Application Workloads -> Create'
      },
      cli: {
        description: 'Controle total do cluster via kubectl ou através da CLI do KubeSphere.',
        script: 'kubectl apply -f deployment.yaml'
      }
    },
    deployDescription: 'Suporta GitOps para deploy automático, upload de manifestos YAML no painel ou uso da CLI para controle total.'
  },
  {
    id: 'openfaas',
    position: 13,
    name: 'OpenFaaS',
    focus: 'Funções serverless sob demanda',
    advantages: [
      { tag: 'Escala auto', explanation: 'Suas funções crescem automaticamente conforme a demanda e diminuem para economizar.' },
      { tag: 'Painel dedicado', explanation: 'Interface simples para gerenciar e testar suas funções serverless.' },
      { tag: 'Multi-linguagem', explanation: 'Escreva funções em Python, Node.js, Go, Ruby e muito mais.' }
    ],
    examples: 'Processamento de Webhooks em Tempo Real, Redimensionamento de Imagens On-the-Fly, Tarefas Agendadas Serverless',
    detailedExamples: [
      { 
        title: 'Backend Serverless de Altíssima Eficiência', 
        description: 'Rode funções Python, Go ou Node.js que escalam automaticamente apenas quando recebem tráfego real. Benefícios: Economia extrema de recursos do servidor (paga apenas pelo tempo de execução), facilidade para criar APIs rápidas e integração nativa com o ecossistema Kubernetes.' 
      },
      { 
        title: 'Automação de Fluxos de Dados Orientada a Eventos', 
        description: 'Crie funções disparadas por eventos externos como uploads de arquivos, webhooks ou mensagens em filas. Benefícios: Desacoplamento total de sistemas, facilidade para manter e testar funções isoladas e suporte a múltiplas linguagens no mesmo cluster.' 
      },
      { 
        title: 'Processamento de Imagens e Vídeos On-Demand', 
        description: 'Use funções serverless para redimensionar imagens ou processar vídeos assim que são enviados. Benefícios: Escalabilidade instantânea para picos de carga, redução de latência para o usuário final e simplicidade no gerenciamento de tarefas pesadas.' 
      }
    ],
    hardwareMin: '2–4 GB / 2 núcleos / 20 GB',
    hardwareRec: '8 GB / 4 núcleos / 50 GB SSD',
    difficulty: 'Médio',
    targetAudience: 'Funções pequenas sem cloud pago',
    subcategories: ['Serverless Devs', 'Automation Engineers'],
    repoUrl: 'https://github.com/openfaas/faas',
    downloadUrl: 'https://www.openfaas.com/',
    installCommand: 'arkade get faas-cli',
    installGuide: '1. Instale a CLI. 2. Deploy via Helm ou arkade.',
    supportedStacks: [
      { name: 'Funções Serverless', description: 'Pequenos pedaços de código que rodam sob demanda.' },
      { name: 'APIs de Eventos', description: 'Responda a webhooks e mensagens em filas.' },
      { name: 'Processamento de Dados', description: 'Ideal para tarefas rápidas e isoladas.' }
    ],
    installationSteps: [
      { title: 'Instalar CLI', description: 'Use o arkade para baixar a CLI do OpenFaaS.', command: 'arkade get faas-cli' },
      { title: 'Instalar OpenFaaS', description: 'Instale o OpenFaaS no seu cluster Kubernetes.', command: 'arkade install openfaas' },
      { title: 'Login', description: 'Siga as instruções para obter a senha do admin e fazer login.', command: 'faas-cli login' }
    ],
    supportedDistros: [
      { name: 'Qualquer K8s (Ubuntu/Debian)', command: 'arkade install openfaas' },
      { name: 'Alpine Linux (com K8s)', command: 'apk add curl && arkade install openfaas' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      cli: {
        description: 'O deploy de funções é feito via CLI (faas-cli deploy) ou através do dashboard web colando o código da função.',
        script: 'faas-cli up -f my-function.yml'
      }
    },
    deployDescription: 'O deploy de funções é feito via CLI (faas-cli deploy) ou através do dashboard web colando o código da função.'
  },
  {
    id: 'swiftwave',
    position: 14,
    name: 'Swiftwave',
    focus: 'Hospedar apps leve',
    advantages: [
      { tag: 'Pouca memória', explanation: 'Otimizado para rodar em servidores pequenos com recursos limitados.' },
      { tag: 'Fácil', explanation: 'Interface intuitiva que simplifica o gerenciamento de containers Docker.' },
      { tag: 'Bom pra VPS pequeno', explanation: 'Ideal para quem quer economizar e rodar vários apps em uma única máquina.' }
    ],
    examples: 'Deploy de MVPs Rápidos, Hospedagem de Blogs Pessoais, APIs Leves para Projetos Indie',
    detailedExamples: [
      { 
        title: 'Hospedagem de MVP de Baixíssimo Custo', 
        description: 'Suba sua aplicação web em um VPS de entrada com performance surpreendente e painel leve. Benefícios: Interface simplificada para quem não quer lidar com Docker puro, SSL automático via Let\'s Encrypt e deploy via Git que agiliza o lançamento do seu produto.' 
      },
      { 
        title: 'Central de Projetos Pessoais e Portfólio', 
        description: 'Gerencie múltiplos sites pequenos e experimentos em um único servidor de forma organizada. Benefícios: Baixíssimo consumo de recursos do painel administrativo, facilidade para monitorar logs de erro e custo fixo mensal sem surpresas na fatura.' 
      },
      { 
        title: 'Hospedagem de Bots e Automações', 
        description: 'Rode bots de Telegram, Discord ou scripts de automação de forma estável e isolada. Benefícios: Reinicialização automática em caso de falha, gerenciamento fácil de variáveis de ambiente e baixo overhead de sistema.' 
      }
    ],
    hardwareMin: '2 GB / 1–2 núcleos / 20 GB',
    hardwareRec: '4 GB / 2 núcleos / 40 GB SSD',
    difficulty: 'Fácil',
    targetAudience: 'Hardware limitado, alternativa leve',
    subcategories: ['MVP Builders', 'Resource Conscious'],
    repoUrl: 'https://github.com/swiftwave/swiftwave',
    downloadUrl: 'https://swiftwave.org/',
    installCommand: 'curl -sSL https://swiftwave.org/install.sh | sh',
    installGuide: '1. Execute o script. 2. Siga as instruções.',
    supportedStacks: [
      { name: 'Apps Docker', description: 'Qualquer aplicação que possa ser empacotada em um container.' },
      { name: 'Sites Estáticos', description: 'Hospede seus portfólios e landing pages com facilidade.' },
      { name: 'Bancos de Dados Leves', description: 'SQLite, Redis e outros serviços essenciais.' }
    ],
    installationSteps: [
      { title: 'Instalação', description: 'Rode o script de instalação oficial.', command: 'curl -sSL https://swiftwave.org/install.sh | sh' },
      { title: 'Configuração', description: 'Siga o assistente no terminal para configurar o domínio e SSL.' },
      { title: 'Acesso', description: 'Acesse o painel web para começar a criar seus apps.', command: 'http://seu-ip:3000' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+', command: 'curl -sSL https://swiftwave.org/install.sh | sh' },
      { name: 'Debian 11+', command: 'curl -sSL https://swiftwave.org/install.sh | sh' },
      { name: 'Alpine Linux 3.17+', command: 'apk add curl bash && curl -sSL https://swiftwave.org/install.sh | sh' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Conecte seu repositório Git e o Swiftwave fará o deploy automático a cada novo commit.',
        script: 'git push origin main'
      },
      cli: {
        description: 'Gerencie seus aplicativos e serviços diretamente pelo terminal usando a CLI oficial.',
        script: 'swiftwave deploy'
      }
    },
    deployDescription: 'Conecte seu Git para deploy automático ou use a CLI para gerenciar seus aplicativos de forma leve.'
  },
  {
    id: 'zimaos',
    position: 15,
    name: 'Zima OS',
    focus: 'Sistema pra hardware Zima (NAS)',
    advantages: [
      { tag: 'Perfeito no ZimaBoard', explanation: 'Otimizado para tirar o máximo proveito do hardware Zima.' },
      { tag: 'Migra CasaOS fácil', explanation: 'Transição suave para quem já usa o ecossistema CasaOS.' },
      { tag: 'Focado em NAS', explanation: 'Ferramentas robustas para gerenciar seus arquivos e backups domésticos.' }
    ],
    examples: 'Sistema Operacional para NAS Doméstico, Central de Mídia com ZimaBoard, Servidor de Arquivos de Alta Performance',
    detailedExamples: [
      { 
        title: 'NAS Doméstico Inteligente e Centralizado', 
        description: 'Transforme seu hardware Zima em um servidor de arquivos robusto para toda a sua família. Benefícios: Interface otimizada para o hardware específico, facilidade para gerenciar múltiplos discos em RAID e aplicativos de backup integrados para fotos e documentos.' 
      },
      { 
        title: 'Laboratório de Virtualização e Containers Portátil', 
        description: 'Rode máquinas virtuais e containers Docker no seu ZimaBoard com facilidade e baixo consumo. Benefícios: Isolamento total de ambientes de teste, portabilidade para levar seu laboratório para qualquer lugar e suporte nativo a apps do CasaOS.' 
      },
      { 
        title: 'Servidor de Automação Industrial/IoT', 
        description: 'Use o ZimaBoard como gateway para coletar dados de sensores e controlar dispositivos IoT. Benefícios: Estabilidade de hardware industrial, facilidade para rodar Node-RED ou Home Assistant e conectividade robusta.' 
      }
    ],
    hardwareMin: '4 GB / 2 núcleos / 20–50 GB',
    hardwareRec: '8 GB / 4 núcleos / 100 GB+',
    difficulty: 'Fácil',
    targetAudience: 'Donos de hardware Zima',
    subcategories: ['ZimaBoard Owners', 'NAS Enthusiasts'],
    repoUrl: 'https://github.com/IceWhaleTech/ZimaOS',
    downloadUrl: 'https://www.zimaspace.com/zimaos',
    installCommand: 'Flash to ZimaBoard/ZimaBlade',
    installGuide: '1. Baixe a imagem. 2. Grave no disco do Zima.',
    supportedStacks: [
      { name: 'Armazenamento em Rede (NAS)', description: 'Gerencie seus discos e arquivos com segurança.' },
      { name: 'Apps de Mídia', description: 'Plex, Jellyfin e outras ferramentas de entretenimento.' },
      { name: 'Backups Pessoais', description: 'Proteja suas fotos e documentos automaticamente.' }
    ],
    installationSteps: [
      { title: 'Baixar Imagem', description: 'Baixe a versão mais recente do ZimaOS no site oficial.' },
      { title: 'Gravar no Disco', description: 'Use uma ferramenta como BalenaEtcher para gravar a imagem no drive do ZimaBoard.' },
      { title: 'Boot', description: 'Inicie o hardware com o drive gravado e acesse via rede local.' }
    ],
    supportedDistros: [
      { name: 'ZimaBoard/ZimaBlade (Nativo)', command: 'Flash image to drive' },
      { name: 'x86_64 Generic', command: 'Flash image to drive' },
      { name: 'Alpine Linux (com Docker)', command: 'apk add docker && docker run ...' }
    ],
    deployMethods: { 
      dragNDrop: true, 
      autoDeploy: false, 
      ftp: true, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      dragNDrop: {
        description: 'Gerenciamento de arquivos ultra-rápido via interface web, ideal para grandes bibliotecas de mídia.',
        script: '# Arraste arquivos para o Zima Files'
      },
      ftp: {
        description: 'Suporte nativo a protocolos de rede para montagem de drives remotos.',
        script: 'smb://zimaos-ip'
      },
      upload: {
        description: 'Instale apps da loja Zima ou suba seus próprios containers personalizados.',
        script: '# App Store -> Custom'
      },
      cli: {
        description: 'Acesse o terminal integrado para rodar comandos Docker manualmente se necessário.',
        script: 'zima-cli status'
      }
    },
    deployDescription: 'Otimizado para hardware ZimaBoard, com foco em armazenamento e performance de rede.'
  },
  {
    id: 'gitea',
    position: 16,
    name: 'Gitea + Actions',
    focus: 'Git privado + CI/CD',
    advantages: [
      { tag: 'Leve', explanation: 'Consome pouquíssimos recursos, rodando até em um Raspberry Pi com folga.' },
      { tag: 'GitHub Actions-like', explanation: 'Automatize seus testes e deploys com uma sintaxe familiar.' },
      { tag: 'Ilimitado', explanation: 'Crie quantos repositórios e usuários quiser sem pagar taxas extras.' }
    ],
    examples: 'Hospedagem de Código Privado para Equipes, Pipeline CI/CD com Gitea Actions, Espelhamento de Repositórios GitHub',
    detailedExamples: [
      { 
        title: 'Servidor Git Privado para Equipes de Desenvolvimento', 
        description: 'Mantenha todo o código-fonte da sua empresa em um servidor interno seguro e ultra-rápido. Benefícios: Privacidade total dos seus repositórios, sem custos por usuário e performance superior em rede local comparado a serviços na nuvem.' 
      },
      { 
        title: 'Automação de Testes e Deploys (CI/CD)', 
        description: 'Use o Gitea Actions para rodar testes automáticos e deploys a cada commit enviado. Benefícios: Fluxo de trabalho idêntico ao GitHub Actions, facilidade para configurar runners próprios e integração total com o repositório sem sair do painel.' 
      },
      { 
        title: 'Espelhamento de Segurança de Repositórios Externos', 
        description: 'Crie cópias automáticas de seus repositórios do GitHub ou GitLab para backup local. Benefícios: Garantia de acesso ao código mesmo se o serviço externo cair, facilidade para migrar entre plataformas e histórico completo preservado.' 
      }
    ],
    hardwareMin: '1–2 GB / 1–2 núcleos / 20 GB',
    hardwareRec: '4 GB / 2 núcleos / 50 GB SSD',
    difficulty: 'Médio',
    targetAudience: 'Git + CI/CD 100% próprio',
    subcategories: ['Self-Hosted Git Users', 'Privacy Conscious Teams'],
    repoUrl: 'https://github.com/go-gitea/gitea',
    downloadUrl: 'https://dl.gitea.com/',
    installCommand: 'docker run -d --name=gitea -p 3000:3000 gitea/gitea:latest',
    installGuide: '1. Execute o container. 2. Configure via web.',
    supportedStacks: [
      { name: 'Repositórios Git', description: 'Hospedagem de código segura e privada.' },
      { name: 'Gitea Actions', description: 'Pipelines de CI/CD integrados ao seu repositório.' },
      { name: 'Wikis e Issues', description: 'Gerencie a documentação e bugs do seu projeto.' }
    ],
    installationSteps: [
      { title: 'Docker', description: 'O Gitea pode ser rodado facilmente via Docker.' },
      { title: 'Executar', description: 'Rode o container oficial do Gitea.', command: 'docker run -d --name=gitea -p 3000:3000 -v gitea_data:/data gitea/gitea:latest' },
      { title: 'Setup Web', description: 'Acesse o painel web para configurar o banco de dados e o admin.', command: 'http://seu-ip:3000' }
    ],
    supportedDistros: [
      { name: 'Qualquer Linux com Docker', command: 'docker run -d --name=gitea -p 3000:3000 gitea/gitea:latest' },
      { name: 'Ubuntu/Debian (Binário)', command: 'wget https://dl.gitea.com/gitea/v1.21.0/gitea-1.21.0-linux-amd64 && chmod +x gitea' },
      { name: 'Alpine Linux 3.16+', command: 'apk add gitea' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Crie pipelines CI/CD usando Gitea Actions para testar e publicar seu código automaticamente.',
        script: '# No repositório: .gitea/workflows/deploy.yml'
      },
      upload: {
        description: 'Suba arquivos diretamente pelo navegador para criar ou atualizar repositórios.',
        script: '# No repositório: Add file -> Upload file'
      },
      cli: {
        description: 'Interaja com o Gitea via Git CLI ou através da API REST para automações.',
        script: 'git push origin main'
      }
    },
    deployDescription: 'Deploy automático via Gitea Actions (similar ao GitHub Actions) ou através da CLI do Git.'
  },
  {
    id: 'k3s',
    position: 17,
    name: 'K3s + Rancher Desktop',
    focus: 'Kubernetes leve + testes locais',
    advantages: [
      { tag: 'Roda fácil', explanation: 'Kubernetes simplificado que instala em segundos com um único comando.' },
      { tag: 'Interface desktop', explanation: 'Use o Rancher Desktop para gerenciar seu cluster local visualmente.' },
      { tag: 'Baixo consumo', explanation: 'Ideal para dispositivos de borda (Edge) e hardware limitado.' }
    ],
    examples: 'Ambiente de Desenvolvimento Kubernetes Local, Testes de Manifestos YAML, Cluster K8s para Raspberry Pi',
    detailedExamples: [
      { 
        title: 'Cluster Kubernetes de Baixíssimo Consumo', 
        description: 'Rode um cluster Kubernetes completo em um Raspberry Pi ou mini-PC antigo com eficiência máxima. Benefícios: Baixíssimo consumo de RAM (menos de 512MB para o server), compatibilidade total com ferramentas K8s e facilidade para aprender orquestração real.' 
      },
      { 
        title: 'Laboratório de Testes de Deploy e Arquitetura', 
        description: 'Use o Rancher Desktop com K3s para testar seus manifestos YAML localmente antes de subir para a nuvem. Benefícios: Feedback imediato no desenvolvimento, ambiente isolado do sistema hospedeiro e facilidade para resetar o cluster em segundos.' 
      },
      { 
        title: 'Edge Computing e IoT Industrial', 
        description: 'Implemente o K3s em dispositivos de borda para processamento local de dados. Benefícios: Alta disponibilidade em hardware limitado, facilidade para gerenciar milhares de dispositivos remotamente e segurança robusta.' 
      }
    ],
    hardwareMin: '4 GB / 2 núcleos / 20 GB',
    hardwareRec: '8–16 GB / 4 núcleos / 50 GB SSD',
    difficulty: 'Médio',
    targetAudience: 'Aprendendo/testando Kubernetes local',
    subcategories: ['K8s Learners', 'Local Devs'],
    repoUrl: 'https://github.com/k3s-io/k3s',
    downloadUrl: 'https://rancherdesktop.io/',
    installCommand: 'curl -sfL https://get.k3s.io | sh -',
    installGuide: '1. Execute o script. 2. Configure o kubeconfig.',
    supportedStacks: [
      { name: 'Kubernetes Leve', description: 'Orquestração completa com pegada mínima de memória.' },
      { name: 'Apps Cloud-Native', description: 'Rode qualquer container compatível com K8s.' },
      { name: 'IoT e Edge', description: 'Perfeito para automação industrial e dispositivos remotos.' }
    ],
    installationSteps: [
      { title: 'Instalação', description: 'Rode o script de instalação oficial.', command: 'curl -sfL https://get.k3s.io | sh -' },
      { title: 'Permissões', description: 'Configure o acesso ao arquivo kubeconfig.', command: 'sudo chmod 644 /etc/rancher/k3s/k3s.yaml' },
      { title: 'Verificar', description: 'Confira se o nó está pronto.', command: 'kubectl get nodes' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04/22.04', command: 'curl -sfL https://get.k3s.io | sh -' },
      { name: 'Debian 10/11', command: 'curl -sfL https://get.k3s.io | sh -' },
      { name: 'Raspberry Pi OS', command: 'curl -sfL https://get.k3s.io | sh -' },
      { name: 'Alpine Linux 3.16+', command: 'apk add curl bash && curl -sfL https://get.k3s.io | sh -' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      cli: {
        description: 'Gerenciamento focado em CLI (kubectl) para rodar containers e serviços em um cluster Kubernetes leve.',
        script: 'kubectl apply -f deployment.yaml'
      }
    },
    deployDescription: 'Gerenciamento focado em CLI (kubectl) para rodar containers e serviços em um cluster Kubernetes leve.'
  },
  {
    id: 'nomad',
    position: 18,
    name: 'Nomad (HashiCorp)',
    focus: 'Rodar jobs variados (containers + outros)',
    advantages: [
      { tag: 'Aceita tudo', explanation: 'Roda containers Docker, binários isolados, máquinas virtuais e mais.' },
      { tag: 'Integra HashiCorp', explanation: 'Conexão nativa com Consul (rede) e Vault (segredos).' },
      { tag: 'Simples escalar', explanation: 'Adicione novos servidores ao cluster de forma rápida e descomplicada.' }
    ],
    examples: 'Orquestração de Aplicações Legadas (Binários), Cluster de Microserviços Híbrido, Gestão de Tarefas em Lote',
    detailedExamples: [
      { 
        title: 'Modernização Gradual de Infraestrutura Híbrida', 
        description: 'Rode binários Java/Go legados e novos containers Docker no mesmo cluster Nomad de forma unificada. Benefícios: Transição suave para containers, gerenciamento simplificado de diferentes tipos de carga e facilidade para escalar serviços sob demanda.' 
      },
      { 
        title: 'Cluster de Alta Disponibilidade Simples e Robusto', 
        description: 'Configure um cluster Nomad em poucos minutos para garantir que seus aplicativos nunca parem de rodar. Benefícios: Recuperação automática de falhas, integração nativa com Consul para service discovery e Vault para gerenciamento de segredos.' 
      },
      { 
        title: 'Processamento de Jobs em Lote (Batch Processing)', 
        description: 'Use o Nomad para gerenciar tarefas pesadas que rodam periodicamente ou sob demanda. Benefícios: Escalonamento inteligente de recursos, priorização de tarefas e visibilidade total do progresso dos jobs.' 
      }
    ],
    hardwareMin: '4 GB / 2–4 núcleos / 50 GB',
    hardwareRec: '8–16 GB / 4–8 núcleos / 100 GB+',
    difficulty: 'Difícil',
    targetAudience: 'Stack HashiCorp ou workloads variados',
    subcategories: ['HashiCorp Users', 'Mixed Workload Operators'],
    repoUrl: 'https://github.com/hashicorp/nomad',
    downloadUrl: 'https://www.nomadproject.io/downloads',
    installCommand: 'sudo apt install nomad',
    installGuide: '1. Instale o pacote. 2. Configure o agente.',
    supportedStacks: [
      { name: 'Workloads Híbridos', description: 'Misture containers e apps legados no mesmo cluster.' },
      { name: 'Microserviços', description: 'Orquestração robusta para sistemas distribuídos.' },
      { name: 'Jobs em Lote', description: 'Excelente para processamento de dados e tarefas agendadas.' }
    ],
    installationSteps: [
      { title: 'Instalar Nomad', description: 'Adicione o repositório da HashiCorp e instale o Nomad.', command: 'sudo apt install nomad' },
      { title: 'Iniciar Agente', description: 'Inicie o Nomad em modo de desenvolvimento para testes.', command: 'nomad agent -dev' },
      { title: 'Acesso UI', description: 'Acesse a interface web do Nomad.', command: 'http://localhost:4646' }
    ],
    supportedDistros: [
      { name: 'Ubuntu/Debian', command: 'sudo apt update && sudo apt install nomad' },
      { name: 'RHEL/CentOS', command: 'sudo dnf install nomad' },
      { name: 'Alpine Linux 3.16+', command: 'apk add nomad' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      cli: {
        description: 'O deploy é feito através de arquivos de job (.nomad) enviados via CLI para o servidor Nomad.',
        script: 'nomad job run my-app.nomad'
      }
    },
    deployDescription: 'O deploy é feito através de arquivos de job (.nomad) enviados via CLI para o servidor Nomad.'
  },
  {
    id: 'octelium',
    position: 19,
    name: 'Octelium',
    focus: 'Acesso zero trust unificado (VPN/ZTNA/PaaS)',
    advantages: [
      { tag: 'Zero-config', explanation: 'Configure redes seguras e acesso remoto sem mexer no roteador.' },
      { tag: 'VPN + Gateway', explanation: 'Proteja sua infraestrutura com túneis criptografados de ponta a ponta.' },
      { tag: 'Escalável', explanation: 'Cresça de um único servidor para uma rede global com facilidade.' }
    ],
    examples: 'Acesso Remoto Seguro a Homelab, Alternativa ao ngrok para Desenvolvedores, Gateway de Rede Zero Trust',
    detailedExamples: [
      { 
        title: 'Acesso Seguro ao Homelab sem Port-Forwarding', 
        description: 'Acesse seu Home Assistant, Plex ou arquivos de qualquer lugar do mundo sem abrir portas perigosas no roteador. Benefícios: Segurança total contra ataques externos, facilidade extrema de configuração e túneis criptografados de ponta a ponta.' 
      },
      { 
        title: 'Exposição de Localhost para Clientes e Demos', 
        description: 'Mostre o progresso de um site rodando no seu PC local para um cliente remoto com uma URL pública segura. Benefícios: Alternativa gratuita e soberana ao ngrok, controle total sobre os domínios e sem limites artificiais de banda.' 
      },
      { 
        title: 'Rede Privada Virtual (VPN) para Equipes', 
        description: 'Crie uma rede segura para que seus colaboradores acessem recursos internos de forma protegida. Benefícios: Autenticação forte, facilidade para gerenciar membros e performance otimizada para trabalho remoto.' 
      }
    ],
    hardwareMin: '4 GB / 2 núcleos / 30 GB',
    hardwareRec: '8–16 GB / 4 núcleos / 80 GB+ SSD',
    difficulty: 'Médio',
    targetAudience: 'Quem quer ZTNA/VPN/PaaS tudo junto open-source',
    subcategories: ['Security Enthusiasts', 'Remote Workers'],
    repoUrl: 'https://github.com/octelium/octelium',
    downloadUrl: 'https://octelium.com/',
    installCommand: 'curl -sSL https://octelium.com/install | bash',
    installGuide: '1. Execute o script. 2. Configure o gateway.',
    supportedStacks: [
      { name: 'Redes Zero Trust', description: 'Acesso seguro baseado em identidade, não em IP.' },
      { name: 'Túneis VPN', description: 'Conecte seus dispositivos de forma privada pela internet.' },
      { name: 'Apps Self-Hosted', description: 'Exponha seus serviços internos com segurança total.' }
    ],
    installationSteps: [
      { title: 'Instalação', description: 'Execute o script de instalação oficial.', command: 'curl -sSL https://octelium.com/install | bash' },
      { title: 'Configuração', description: 'Siga o guia de configuração do gateway de rede.' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+', command: 'curl -sSL https://octelium.com/install | bash' },
      { name: 'Debian 11+', command: 'curl -sSL https://octelium.com/install | bash' },
      { name: 'Alpine Linux 3.16+', command: 'apk add curl bash && curl -sSL https://octelium.com/install | bash' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      cli: {
        description: 'Configuração e deploy de serviços através da CLI do Octelium, with foco em redes seguras.',
        script: 'octelium service create --name my-app'
      }
    },
    deployDescription: 'Configuração e deploy de serviços através da CLI do Octelium, com foco em redes seguras.'
  },
  {
    id: 'haloy',
    position: 20,
    name: 'Haloy',
    focus: 'Deploy CLI leve com zero downtime',
    advantages: [
      { tag: 'Upload direto', explanation: 'Suba seu código sem precisar de um registro de containers externo.' },
      { tag: 'Rápido', explanation: 'Deploys que terminam em segundos através de uma CLI eficiente.' },
      { tag: 'HTTPS auto', explanation: 'Certificados de segurança automáticos para todos os seus domínios.' }
    ],
    examples: 'Deploy de Apps Docker via CLI, Hospedagem de Microserviços Rápida, Alternativa Leve para Deploys em VPS',
    detailedExamples: [
      { 
        title: 'Deploy de Microserviço em Segundos via CLI', 
        description: 'Suba sua aplicação Docker para o servidor usando apenas um comando simples no seu terminal. Benefícios: Processo de deploy extremamente ágil, sem necessidade de registry de containers externo e configuração automática de HTTPS via Let\'s Encrypt.' 
      },
      { 
        title: 'Ambiente de Homelab Minimalista e Eficiente', 
        description: 'Gerencie seus serviços pessoais em um VPS pequeno com a leveza e simplicidade do Haloy. Benefícios: Baixíssimo consumo de recursos no servidor, facilidade para atualizar aplicativos e controle total através de linha de comando.' 
      },
      { 
        title: 'Pipeline de CI/CD Simplificado', 
        description: 'Integre o Haloy em seus scripts de automação para deploys contínuos sem complexidade. Benefícios: Facilidade de integração, deploys rápidos e previsíveis e baixo custo de manutenção da infraestrutura.' 
      }
    ],
    hardwareMin: '1–2 GB / 1 núcleo / 20 GB',
    hardwareRec: '4 GB / 2 núcleos / 40 GB SSD',
    difficulty: 'Médio',
    targetAudience: 'Devs que preferem CLI leve e eficiente',
    subcategories: ['CLI Lovers', 'Fast Iterators'],
    repoUrl: 'https://github.com/haloy-io/haloy',
    downloadUrl: 'https://haloy.io/',
    installCommand: 'curl -sSL https://haloy.io/install | sh',
    installGuide: '1. Instale a CLI. 2. Execute haloy init.',
    supportedStacks: [
      { name: 'Apps Docker', description: 'Deploy simplificado de containers via linha de comando.' },
      { name: 'Microserviços', description: 'Ideal para arquiteturas de pequenos serviços independentes.' },
      { name: 'APIs Web', description: 'Hospedagem rápida para backends em qualquer linguagem.' }
    ],
    installationSteps: [
      { title: 'Instalar CLI', description: 'Baixe e instale a ferramenta de linha de comando do Haloy.', command: 'curl -sSL https://haloy.io/install | sh' },
      { title: 'Inicializar', description: 'Crie a configuração inicial do seu projeto.', command: 'haloy init' },
      { title: 'Deploy', description: 'Suba sua aplicação para o servidor.', command: 'haloy deploy' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+', command: 'curl -sSL https://haloy.io/install | sh' },
      { name: 'Debian 11+', command: 'curl -sSL https://haloy.io/install | sh' },
      { name: 'Alpine Linux 3.16+', command: 'apk add curl bash && curl -sSL https://haloy.io/install | sh' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      upload: {
        description: 'Suba seu código diretamente para o servidor sem precisar de um registro de containers externo.',
        script: 'haloy deploy'
      },
      cli: {
        description: 'Gerencie todo o ciclo de vida do seu app (build, deploy, logs) através da CLI do Haloy.',
        script: 'haloy status'
      }
    },
    deployDescription: 'Upload direto de arquivos via CLI (haloy deploy), sem necessidade de um registro de containers externo.'
  },
  {
    id: 'justdeploy',
    position: 21,
    name: 'JustDeploy',
    focus: 'Deploy fácil de GitHub/Docker no VPS',
    advantages: [
      { tag: '1 clique GitHub', explanation: 'Conecte seu repositório e tenha deploy automático em segundos.' },
      { tag: 'Suporta Compose', explanation: 'Gerencie stacks complexas com múltiplos containers de forma visual.' },
      { tag: 'Sem lock-in', explanation: 'Seus dados e containers são seus, mude de servidor quando quiser.' }
    ],
    examples: 'Deploy Automático de Repositórios GitHub, Hospedagem de Stacks Docker Compose, Alternativa ao Heroku em VPS Próprio',
    detailedExamples: [
      { 
        title: 'Fluxo de Trabalho Estilo Heroku em VPS Próprio', 
        description: 'Conecte seu repositório GitHub e tenha deploy automático a cada push sem custos de plataforma. Benefícios: Facilidade extrema de uso, sem necessidade de configurar pipelines complexos e custo fixo previsível do seu VPS.' 
      },
      { 
        title: 'Hospedagem de Aplicações Multi-Container Complexas', 
        description: 'Suba projetos que utilizam Docker Compose com múltiplos serviços de forma simplificada. Benefícios: Gerenciamento visual de stacks, logs integrados diretamente no painel e facilidade para escalar serviços individualmente.' 
      },
      { 
        title: 'Ambiente de Homelab com Deploy Contínuo', 
        description: 'Mantenha seus serviços pessoais sempre atualizados com o código mais recente do seu repositório. Benefícios: Automação total do ciclo de vida dos apps, facilidade para testar novas versões e organização centralizada.' 
      }
    ],
    hardwareMin: '2 GB / 1–2 núcleos / 20 GB',
    hardwareRec: '4 GB / 2 núcleos / 40 GB SSD',
    difficulty: 'Fácil',
    targetAudience: 'Push-to-deploy simples em VPS próprio',
    subcategories: ['GitHub Users', 'Simple Deployers'],
    repoUrl: 'https://github.com/justdeploy/justdeploy',
    downloadUrl: 'https://justdeploy.tech/',
    installCommand: 'curl -sSL https://justdeploy.tech/install | sh',
    installGuide: '1. Execute o script. 2. Conecte o GitHub.',
    supportedStacks: [
      { name: 'Apps Node.js/PHP', description: 'Suporte a linguagens web populares.' },
      { name: 'Containers Docker', description: 'Qualquer app Dockerizado de forma simples.' },
      { name: 'Sites Estáticos', description: 'Ideal para landing pages e documentações.' }
    ],
    installationSteps: [
      { title: 'Instalação', description: 'Execute o script de instalação oficial.', command: 'curl -sSL https://justdeploy.tech/install | sh' },
      { title: 'Conectar GitHub', description: 'Acesse o painel e conecte sua conta do GitHub para começar.' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+', command: 'curl -sSL https://justdeploy.tech/install | sh' },
      { name: 'Debian 11+', command: 'curl -sSL https://justdeploy.tech/install | sh' },
      { name: 'Alpine Linux 3.16+', command: 'apk add curl bash && curl -sSL https://justdeploy.tech/install | sh' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: false 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Conecte sua conta do GitHub e selecione o repositório para deploy automático a cada novo commit.',
        script: 'git push origin main'
      }
    },
    deployDescription: 'Conecte sua conta do GitHub e selecione o repositório para deploy automático a cada novo commit.'
  },
  {
    id: 'kubero',
    position: 22,
    name: 'Kubero',
    focus: 'Heroku-like em Kubernetes',
    advantages: [
      { tag: 'Git push', explanation: 'Deploy estilo Heroku usando apenas o comando "git push".' },
      { tag: 'Addons fáceis', explanation: 'Instale bancos de dados e outros serviços com um clique.' },
      { tag: 'K8s por baixo', explanation: 'Aproveite todo o poder do Kubernetes sem a complexidade.' }
    ],
    examples: 'PaaS Estilo Heroku em Kubernetes, Deploy de Aplicações Web Escaláveis, Gestão de Addons (Bancos de Dados) em K8s',
    detailedExamples: [
      { 
        title: 'Plataforma de Aplicações para Desenvolvedores (PaaS)', 
        description: 'Ofereça uma experiência de deploy simplificada sobre um cluster Kubernetes para seu time. Benefícios: Abstração total da complexidade do K8s, facilidade para adicionar bancos de dados e outros serviços e escalabilidade automática nativa.' 
      },
      { 
        title: 'Migração de Heroku para Kubernetes Soberano', 
        description: 'Mantenha o fluxo de trabalho que você ama enquanto aproveita o poder e a economia do Kubernetes. Benefícios: Redução drástica de custos de plataforma, controle total sobre a infraestrutura e suporte a addons personalizados.' 
      },
      { 
        title: 'Gerenciamento de Microserviços em Larga Escala', 
        description: 'Use o Kubero para orquestrar dezenas de microserviços com facilidade visual. Benefícios: Visibilidade clara das dependências, facilidade para gerenciar segredos e variáveis de ambiente e deploys rápidos via Git.' 
      }
    ],
    hardwareMin: '4 GB / 2 núcleos / 30 GB',
    hardwareRec: '8 GB / 4 núcleos / 60 GB+',
    difficulty: 'Médio-Difícil',
    targetAudience: 'Heroku em Kubernetes próprio',
    subcategories: ['K8s Devs', 'Heroku Fans'],
    repoUrl: 'https://github.com/kubero-dev/kubero',
    downloadUrl: 'https://kubero.dev/',
    installCommand: 'kubectl apply -f https://raw.githubusercontent.com/kubero-dev/kubero/main/install.yaml',
    installGuide: '1. Aplique o manifesto. 2. Acesse o dashboard.',
    supportedStacks: [
      { name: 'Apps Cloud-Native', description: 'Otimizado para rodar em clusters Kubernetes.' },
      { name: 'Pipelines CI/CD', description: 'Automação de build e deploy integrada.' },
      { name: 'Add-ons', description: 'Instale bancos de dados e serviços auxiliares facilmente.' }
    ],
    installationSteps: [
      { title: 'Kubernetes', description: 'Certifique-se de ter um cluster Kubernetes rodando.' },
      { title: 'Instalação', description: 'Aplique o manifesto oficial do Kubero.', command: 'kubectl apply -f https://raw.githubusercontent.com/kubero-dev/kubero/main/install.yaml' },
      { title: 'Acesso', description: 'Acesse o dashboard web para gerenciar seus apps.' }
    ],
    supportedDistros: [
      { name: 'Qualquer Cluster K8s', command: 'kubectl apply -f ...' },
      { name: 'Alpine Linux (com K8s)', command: 'apk add curl && kubectl apply -f ...' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: false 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Experiência estilo Heroku: conecte seu Git e o Kubero cuida do deploy automático em seu cluster Kubernetes.',
        script: 'git push kubero master'
      }
    },
    deployDescription: 'Experiência estilo Heroku: conecte seu Git e o Kubero cuida do deploy automático em seu cluster Kubernetes.'
  },
  {
    id: 'piku',
    position: 23,
    name: 'Piku',
    focus: 'PaaS minimalista git-push (sem Docker pesado)',
    advantages: [
      { tag: 'Ultra-leve', explanation: 'Escrito em Python, consome quase zero recursos do servidor.' },
      { tag: 'Sem containers', explanation: 'Roda processos diretamente no sistema, ideal para VPS minúsculos.' },
      { tag: 'Roda em qualquer lugar', explanation: 'Funciona em qualquer Linux, até nos mais antigos.' }
    ],
    examples: 'Hospedagem de Micro-Apps Python/Node, PaaS Ultra-Leve para Raspberry Pi, Deploy via Git Push sem Docker',
    detailedExamples: [
      { 
        title: 'Servidor de Aplicações para Hardware Legado/Limitado', 
        description: 'Rode múltiplos aplicativos pequenos em um servidor com apenas 512MB de RAM com eficiência total. Benefícios: Eficiência extrema de recursos, sem o overhead do Docker e facilidade de deploy via Git push.' 
      },
      { 
        title: 'Plataforma de Testes Rápidos para Desenvolvedores', 
        description: 'Crie um ambiente de deploy instantâneo para seus projetos pessoais e experimentos. Benefícios: Setup em segundos, controle total via SSH e simplicidade absoluta no gerenciamento de processos e logs.' 
      },
      { 
        title: 'Hospedagem de Scripts e Bots Leves', 
        description: 'Rode scripts Python ou Node.js de forma contínua em hardware de baixo custo. Benefícios: Baixíssimo consumo de energia, facilidade para atualizar o código e estabilidade de execução.' 
      }
    ],
    hardwareMin: '512 MB–1 GB / 1 núcleo / 10 GB',
    hardwareRec: '2 GB / 1–2 núcleos / 20 GB',
    difficulty: 'Fácil',
    targetAudience: 'Projetos minimalistas em hardware muito limitado',
    subcategories: ['Minimalist Devs', 'Legacy Hardware Users'],
    repoUrl: 'https://github.com/piku/piku',
    downloadUrl: 'https://piku.github.io/',
    installCommand: 'curl https://raw.githubusercontent.com/piku/piku/master/piku.py > piku.py',
    installGuide: '1. Baixe o script. 2. Configure o git remote.',
    supportedStacks: [
      { name: 'Apps Python/Node.js/Ruby', description: 'Suporte a múltiplas linguagens via buildpacks.' },
      { name: 'Scripts de Automação', description: 'Execute tarefas em background de forma simples.' },
      { name: 'Web APIs', description: 'Hospedagem minimalista para backends leves.' }
    ],
    installationSteps: [
      { title: 'Baixar Script', description: 'Baixe o script principal do Piku.', command: 'curl https://raw.githubusercontent.com/piku/piku/master/piku.py > piku.py' },
      { title: 'Configurar SSH', description: 'Adicione sua chave pública SSH ao servidor.' },
      { title: 'Git Remote', description: 'Adicione o Piku como um remote no seu repositório local.', command: 'git remote add piku piku@seu-ip:app-name' },
      { title: 'Deploy', description: 'Faça o push do seu código.', command: 'git push piku master' }
    ],
    supportedDistros: [
      { name: 'Ubuntu/Debian', command: 'curl https://raw.githubusercontent.com/piku/piku/master/piku.py > piku.py' },
      { name: 'Raspberry Pi OS', command: 'curl https://raw.githubusercontent.com/piku/piku/master/piku.py > piku.py' },
      { name: 'Alpine Linux 3.16+', command: 'apk add python3 git && curl ...' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Deploy ultra-leve via Git push: o Piku recebe seu código e inicia os processos automaticamente.',
        script: 'git push piku master'
      },
      cli: {
        description: 'Gerencie seus aplicativos e logs remotamente através de comandos SSH simples.',
        script: 'ssh piku@seu-ip help'
      }
    },
    deployDescription: 'Deploy via Git push (estilo Heroku) mas sem a necessidade de Docker, rodando processos diretamente no servidor.'
  },
  {
    id: 'tsuru',
    position: 24,
    name: 'Tsuru',
    focus: 'PaaS git-push estilo antigo',
    advantages: [
      { tag: 'Várias linguagens', explanation: 'Suporte nativo a Python, Ruby, Go, Node.js e muito mais.' },
      { tag: 'Escalável', explanation: 'Projetado para crescer junto com a sua aplicação e tráfego.' },
      { tag: 'PaaS maduro', explanation: 'Plataforma robusta e testada em larga escala por grandes empresas.' }
    ],
    examples: 'PaaS Corporativo para Grandes Equipes, Hospedagem de Aplicações Críticas, Infraestrutura de Deploy Escalável',
    detailedExamples: [
      { 
        title: 'Plataforma de Deploy Corporativa para Grandes Equipes', 
        description: 'Gerencie centenas de aplicações em um cluster robusto, escalável e seguro. Benefícios: Isolamento total entre aplicativos, suporte a múltiplas linguagens e integração profunda com ferramentas de monitoramento corporativas.' 
      },
      { 
        title: 'Modernização de Workflow de Desenvolvimento Ágil', 
        description: 'Implemente um fluxo de deploy estilo Heroku em sua própria infraestrutura com total controle. Benefícios: Padronização de processos de build e deploy, facilidade para gerenciar segredos e alta disponibilidade nativa.' 
      },
      { 
        title: 'Hospedagem de Aplicações Críticas com Alta Carga', 
        description: 'Use o Tsuru para rodar serviços que exigem alta performance e estabilidade. Benefícios: Auto-scaling inteligente, gerenciamento eficiente de recursos e facilidade para realizar deploys sem downtime.' 
      }
    ],
    hardwareMin: '4 GB / 2 núcleos / 40 GB',
    hardwareRec: '8 GB / 4 núcleos / 80 GB+',
    difficulty: 'Médio',
    targetAudience: 'Empresas BR ou Tsuru antigo',
    subcategories: ['Corporate Devs', 'Brazilian Tech Teams'],
    repoUrl: 'https://github.com/tsuru/tsuru',
    downloadUrl: 'https://tsuru.io/',
    installCommand: 'curl -sSL https://tsuru.io/get | bash',
    installGuide: '1. Execute o script. 2. Configure o cluster.',
    supportedStacks: [
      { name: 'Aplicações Corporativas', description: 'Ideal para sistemas complexos e distribuídos.' },
      { name: 'Microserviços', description: 'Gestão avançada de múltiplos serviços independentes.' },
      { name: 'Databases as a Service', description: 'Provisionamento fácil de bancos de dados.' }
    ],
    installationSteps: [
      { title: 'Instalar CLI', description: 'Baixe a ferramenta de linha de comando do Tsuru.', command: 'curl -sSL https://tsuru.io/get | bash' },
      { title: 'Configurar Target', description: 'Aponte a CLI para o seu servidor Tsuru.', command: 'tsuru target-add default http://seu-ip:8080' },
      { title: 'Criar App', description: 'Crie seu primeiro aplicativo.', command: 'tsuru app-create my-app python' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+', command: 'curl -sSL https://tsuru.io/get | bash' },
      { name: 'Debian 11+', command: 'curl -sSL https://tsuru.io/get | bash' },
      { name: 'Alpine Linux 3.16+', command: 'apk add curl bash && curl -sSL https://tsuru.io/get | bash' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      cli: {
        description: 'Plataforma PaaS completa onde o deploy é feito via CLI oficial através do comando "tsuru app-deploy".',
        script: 'tsuru app-deploy -a my-app .'
      }
    },
    deployDescription: 'Plataforma PaaS completa onde o deploy é feito via CLI oficial através do comando "tsuru app-deploy".'
  },
  {
    id: 'hephy',
    position: 25,
    name: 'Hephy Workflow',
    focus: 'PaaS antigo fork Deis pra K8s',
    advantages: [
      { tag: 'Git push', explanation: 'Deploy estilo PaaS clássico usando apenas o comando "git push".' },
      { tag: 'Simples pra K8s', explanation: 'Abstração poderosa que simplifica o uso do Kubernetes para desenvolvedores.' },
      { tag: 'Open-source antigo', explanation: 'Projeto maduro e testado, mantido pela comunidade com foco em estabilidade.' }
    ],
    examples: 'Hospedagem de Apps Legados em K8s, Workflow de Deploy estilo Deis, Plataforma de Microserviços para Equipes de TI',
    detailedExamples: [
      { 
        title: 'Manutenção de Aplicações Deis Workflow Legadas', 
        description: 'Continue rodando seus aplicativos no estilo Deis clássico sobre clusters Kubernetes modernos. Benefícios: Preservação de fluxos de trabalho familiares para a equipe, estabilidade para apps legados e orquestração K8s robusta por baixo.' 
      },
      { 
        title: 'PaaS Interno Simplificado para Desenvolvedores', 
        description: 'Ofereça um ambiente de deploy via Git push para seus desenvolvedores sem a complexidade do K8s puro. Benefícios: Agilidade extrema no ciclo de desenvolvimento, padronização de deploys e facilidade para gerenciar múltiplos aplicativos.' 
      },
      { 
        title: 'Ambiente de Staging e Homologação Rápido', 
        description: 'Crie ambientes de teste idênticos à produção com facilidade. Benefícios: Redução de erros em produção, facilidade para validar novas funcionalidades e isolamento de recursos.' 
      }
    ],
    hardwareMin: '4 GB / 2 núcleos / 30 GB',
    hardwareRec: '8 GB / 4 núcleos / 50 GB+',
    difficulty: 'Médio-Difícil',
    targetAudience: 'Quem mantém Deis-like antigo',
    subcategories: ['Deis Users', 'Legacy K8s Operators'],
    repoUrl: 'https://github.com/teamhephy/workflow',
    downloadUrl: 'https://teamhephy.com/',
    installCommand: 'helm install hephy/workflow',
    installGuide: '1. Adicione o repo helm. 2. Instale o workflow.',
    supportedStacks: [
      { name: 'Apps Kubernetes', description: 'Orquestração profissional de containers.' },
      { name: 'Buildpacks', description: 'Detecção automática de linguagem e build do container.' },
      { name: 'Router Integrado', description: 'Gerenciamento de tráfego e domínios.' }
    ],
    installationSteps: [
      { title: 'Helm Repo', description: 'Adicione o repositório do Hephy ao Helm.', command: 'helm repo add hephy https://charts.teamhephy.com' },
      { title: 'Instalação', description: 'Instale o workflow do Hephy no seu cluster.', command: 'helm install hephy hephy/workflow' },
      { title: 'CLI', description: 'Instale a CLI do Deis para gerenciar os deploys.' }
    ],
    supportedDistros: [
      { name: 'Qualquer Cluster K8s', command: 'helm install hephy/workflow' },
      { name: 'Alpine Linux (com Helm)', command: 'apk add helm && helm install hephy/workflow' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Deploy estilo PaaS clássico via Git push, enviando seu código diretamente para o cluster Kubernetes.',
        script: 'git push hephy master'
      },
      cli: {
        description: 'Gerencie seus aplicativos e logs remotamente através da CLI do Deis/Hephy.',
        script: 'deis apps:list'
      }
    },
    deployDescription: 'Deploy estilo PaaS clássico via CLI, enviando seu código diretamente para o cluster Kubernetes.'
  },
  {
    id: 'cosmos',
    position: 26,
    name: 'Cosmos Cloud',
    focus: 'Gerenciador serviços com segurança',
    advantages: [
      { tag: 'Segurança alta', explanation: 'All-in-one: VPN, Gateway, Autenticação e PaaS em um único pacote.' },
      { tag: 'Integra apps', explanation: 'Focado em privacidade: Ferramentas integradas para proteger seus dados e identidade.' },
      { tag: 'Painel moderno', explanation: 'Interface moderna: Painel visual elegante e fácil de usar para gerenciar tudo.' }
    ],
    examples: 'Homelab Seguro com Autenticação 2FA, Gateway de Acesso Unificado para Serviços Docker, Servidor de Aplicativos com Foco em Privacidade',
    detailedExamples: [
      { 
        title: 'Central de Serviços Pessoais Protegida e Unificada', 
        description: 'Gerencie seu Nextcloud, Plex e Home Assistant com uma camada extra de segurança robusta. Benefícios: Autenticação 2FA nativa para todos os serviços, gerenciamento automático de certificados SSL e isolamento total de rede entre aplicativos.' 
      },
      { 
        title: 'Gateway de Acesso Seguro para Equipes Remotas', 
        description: 'Ofereça acesso protegido a ferramentas internas para seus colaboradores sem a complexidade de uma VPN. Benefícios: Interface moderna e intuitiva, facilidade para gerenciar permissões de usuário e auditoria detalhada de acessos.' 
      },
      { 
        title: 'Hospedagem de Apps com Foco em Privacidade Total', 
        description: 'Rode aplicativos sensíveis em um ambiente controlado e auditável. Benefícios: Controle total sobre os dados, criptografia de ponta a ponta e facilidade para monitorar atividades suspeitas.' 
      }
    ],
    hardwareMin: '2–4 GB / 2 núcleos / 30 GB',
    hardwareRec: '8 GB / 4 núcleos / 60 GB SSD',
    difficulty: 'Médio',
    targetAudience: 'Privacidade alta em homelab',
    subcategories: ['Security Conscious', 'Modern Homelabers'],
    repoUrl: 'https://github.com/azukaar/Cosmos-Cloud',
    downloadUrl: 'https://cosmos-cloud.io/',
    installCommand: 'docker run -d --name cosmos-server -p 80:80 -p 443:443 azukaar/cosmos-server',
    installGuide: '1. Execute o container. 2. Siga o setup wizard.',
    supportedStacks: [
      { name: 'Apps Self-Hosted', description: 'Proteja seus serviços com autenticação centralizada.' },
      { name: 'Redes Privadas', description: 'Crie túneis seguros para seus dispositivos.' },
      { name: 'Containers Docker', description: 'Gerenciamento simplificado de aplicações isoladas.' }
    ],
    installationSteps: [
      { title: 'Docker', description: 'O Cosmos roda como um container Docker.' },
      { title: 'Instalação', description: 'Rode o comando Docker para iniciar o servidor.', command: 'docker run -d --name cosmos-server -p 80:80 -p 443:443 --privileged -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/cosmos:/var/lib/cosmos azukaar/cosmos-server:latest' },
      { title: 'Setup Wizard', description: 'Acesse o painel web para configurar o domínio e SSL.', command: 'http://seu-ip' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04+ (Docker)', command: 'docker run -d --name cosmos-server ...' },
      { name: 'Debian 11+ (Docker)', command: 'docker run -d --name cosmos-server ...' },
      { name: 'Alpine Linux (com Docker)', command: 'apk add docker && docker run ...' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      upload: {
        description: 'Instale aplicativos através da loja interna ou suba seus próprios manifestos Docker Compose.',
        script: '# No painel: App Store -> Custom App'
      },
      cli: {
        description: 'Acesse o terminal integrado para gerenciar containers Docker manualmente se necessário.',
        script: 'docker ps'
      }
    },
    deployDescription: 'Instale aplicativos através da loja interna ou suba arquivos de configuração Docker Compose via painel.'
  },
  {
    id: 'cycle',
    position: 27,
    name: 'Cycle.io (Self-Hosted Core)',
    focus: 'Orquestração híbrida (self + cloud)',
    advantages: [
      { tag: 'Low-ops', explanation: 'Plataforma que cuida de toda a infraestrutura para você focar no código.' },
      { tag: 'Containers nativos', explanation: 'Orquestração de containers sem a complexidade do Kubernetes.' },
      { tag: 'Multi-infra', explanation: 'Deploy em múltiplos provedores de nuvem a partir de um só lugar.' }
    ],
    examples: 'Orquestração de Infraestrutura Híbrida, Gestão de Containers em Data Centers Próprios, Plataforma de Deploy Corporativa Escalável',
    detailedExamples: [
      { 
        title: 'Gestão Unificada de Nuvem Híbrida Corporativa', 
        description: 'Gerencie servidores locais e instâncias em nuvens públicas a partir de uma única interface centralizada. Benefícios: Visibilidade total da infraestrutura distribuída, facilidade para mover cargas de trabalho e otimização inteligente de custos.' 
      },
      { 
        title: 'Plataforma de Deploy para Ambientes de Missão Crítica', 
        description: 'Implemente um sistema de orquestração robusto em seus próprios servidores com foco total em segurança. Benefícios: Controle absoluto sobre os dados, alta disponibilidade nativa e suporte a fluxos de trabalho empresariais complexos.' 
      },
      { 
        title: 'Automação de Infraestrutura em Larga Escala', 
        description: 'Use o Cycle.io para automatizar o provisionamento e gerenciamento de centenas de containers. Benefícios: Redução de erros operacionais, agilidade na entrega de novos serviços e escalabilidade simplificada.' 
      }
    ],
    hardwareMin: '4–8 GB / 4 núcleos / 50 GB',
    hardwareRec: '16 GB+ / 8 núcleos / 100 GB+',
    difficulty: 'Difícil',
    targetAudience: 'Empresas híbridas',
    subcategories: ['Hybrid Cloud Architects', 'Enterprise Ops'],
    repoUrl: 'https://github.com/cycleplatform/core',
    downloadUrl: 'https://cycle.io/',
    installCommand: 'Contact Cycle.io for self-hosted core setup',
    installGuide: '1. Entre em contato com o suporte. 2. Siga o guia personalizado.',
    supportedStacks: [
      { name: 'Aplicações em Containers', description: 'Foco total em workloads Dockerizados.' },
      { name: 'Microserviços', description: 'Escalabilidade e gerenciamento de rede simplificados.' },
      { name: 'APIs de Alta Disponibilidade', description: 'Infraestrutura robusta para serviços críticos.' }
    ],
    installationSteps: [
      { title: 'Contato', description: 'O Cycle.io exige contato com o suporte para setup self-hosted.' },
      { title: 'Infraestrutura', description: 'Prepare os servidores conforme as especificações fornecidas.' },
      { title: 'Agente', description: 'Instale o agente do Cycle nos seus servidores.' }
    ],
    supportedDistros: [
      { name: 'Ubuntu 20.04/22.04', command: 'Contact Cycle.io for agent script' },
      { name: 'RHEL/CentOS 8+', command: 'Contact Cycle.io for agent script' },
      { name: 'Alpine Linux (Experimental)', command: 'Contact Cycle.io for agent script' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Integração nativa com pipelines de CI/CD para orquestração híbrida automatizada.',
        script: '# No painel: Environments -> Deployments'
      },
      cli: {
        description: 'Gerencie sua infraestrutura e containers através da CLI oficial do Cycle.',
        script: 'cycle deploy'
      }
    },
    deployDescription: 'Orquestração avançada via CLI e API para ambientes corporativos e híbridos.'
  },
  {
    id: 'dyrector',
    position: 28,
    name: 'Dyrector.io',
    focus: 'CI/CD + deploy self-hosted',
    advantages: [
      { tag: 'Gestão visual', explanation: 'Interface poderosa para gerenciar deploys em múltiplos ambientes.' },
      { tag: 'Multi-node', explanation: 'Controle containers em diferentes servidores de um painel central.' },
      { tag: 'Versão de deploy', explanation: 'Histórico e controle total sobre as versões de cada app.' }
    ],
    examples: 'Pipeline de Deploy Contínuo com Ambientes de Preview, Gestão de Deploys Multi-Cloud, Automação de Infraestrutura para Equipes de Dev',
    detailedExamples: [
      { 
        title: 'Ambientes de Preview Automáticos para QA e Dev', 
        description: 'Crie ambientes de teste temporários e isolados para cada Pull Request no seu repositório Git. Benefícios: Feedback ultra-rápido para desenvolvedores, facilidade para revisar mudanças visualmente e redução drástica de bugs em produção.' 
      },
      { 
        title: 'Central de Deploy para Múltiplos Clusters Kubernetes', 
        description: 'Gerencie deploys em diferentes clusters K8s a partir de um único painel Dyrector.io intuitivo. Benefícios: Padronização de processos de CI/CD, visibilidade total do estado dos deploys e facilidade para gerenciar variáveis de ambiente complexas.' 
      },
      { 
        title: 'Automação de Infraestrutura para Equipes Ágeis', 
        description: 'Implemente pipelines de deploy contínuo que escalam com o seu time. Benefícios: Redução do trabalho manual, maior previsibilidade nos deploys e facilidade para integrar novas ferramentas.' 
      }
    ],
    hardwareMin: '2–4 GB / 2 núcleos / 30 GB',
    hardwareRec: '8 GB / 4 núcleos / 50 GB SSD',
    difficulty: 'Médio',
    targetAudience: 'CI/CD simples em casa',
    subcategories: ['CI/CD Enthusiasts', 'Automation Fans'],
    repoUrl: 'https://github.com/dyrector-io/dyrectorio',
    downloadUrl: 'https://dyrector.io/',
    installCommand: 'docker-compose up -d',
    installGuide: '1. Baixe o docker-compose. 2. Execute o up.',
    supportedStacks: [
      { name: 'Clusters Docker/K8s', description: 'Suporte a diferentes tipos de orquestração.' },
      { name: 'Ambientes de Teste', description: 'Ideal para gerenciar QA, Staging e Produção.' },
      { name: 'Apps Complexos', description: 'Orquestração de múltiplos containers interligados.' }
    ],
    installationSteps: [
      { title: 'Baixar Config', description: 'Baixe o arquivo docker-compose.yaml oficial.' },
      { title: 'Instalação', description: 'Rode o Docker Compose para subir o painel.', command: 'docker-compose up -d' },
      { title: 'Acesso', description: 'Acesse o painel web para configurar seu cluster.', command: 'http://seu-ip:8000' }
    ],
    supportedDistros: [
      { name: 'Ubuntu/Debian (Docker Compose)', command: 'docker-compose up -d' },
      { name: 'RHEL/CentOS (Docker Compose)', command: 'docker-compose up -d' },
      { name: 'Alpine Linux (com Docker Compose)', command: 'apk add docker-compose && docker-compose up -d' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Configure pipelines de deploy automático integrados ao seu Git para Continuous Delivery.',
        script: '# No painel: Projects -> Deployments'
      },
      cli: {
        description: 'Gerencie seus ambientes e deploys diretamente pelo terminal usando a CLI do Dyrector.',
        script: 'dyrectorio deploy'
      }
    },
    deployDescription: 'Configure pipelines de deploy automático integrados ao seu Git ou use a CLI para gerenciar ambientes.'
  },
  {
    id: 'porter',
    position: 29,
    name: 'Porter (Open Source)',
    focus: 'Bundles de apps pra deploy',
    advantages: [
      { tag: 'Bundling simples', explanation: 'Empacote app e infraestrutura em um único bundle CNAB.' },
      { tag: 'Portabilidade', explanation: 'Mova suas aplicações entre nuvens sem mudar o código de deploy.' },
      { tag: 'Padronização', explanation: 'Garanta que todos os deploys sigam as mesmas regras e versões.' }
    ],
    examples: 'Empacotamento de Aplicações para Deploy Multi-Cloud, Criação de Bundles de Infraestrutura Reutilizáveis, Padronização de Deploys Complexos',
    detailedExamples: [
      { 
        title: 'Criação de Pacotes de Aplicação Portáteis e Seguros', 
        description: 'Empacote sua aplicação junto com todas as dependências de infraestrutura em um único bundle CNAB padronizado. Benefícios: Facilidade extrema para mover apps entre diferentes provedores de nuvem, garantia de paridade entre ambientes e simplificação do processo de instalação.' 
      },
      { 
        title: 'Catálogo de Infraestrutura como Código Reutilizável', 
        description: 'Crie bundles reutilizáveis para serviços comuns como bancos de dados ou sistemas de mensageria complexos. Benefícios: Padronização de configurações em toda a organização, redução de erros manuais e agilidade instantânea para novos projetos.' 
      },
      { 
        title: 'Padronização de Deploys Multi-Cloud Complexos', 
        description: 'Use o Porter para garantir que seus deploys sejam idênticos em qualquer nuvem. Benefícios: Redução de lock-in de fornecedor, facilidade de manutenção e conformidade técnica simplificada.' 
      }
    ],
    hardwareMin: '4 GB / 2 núcleos / 40 GB',
    hardwareRec: '8 GB / 4 núcleos / 80 GB+',
    difficulty: 'Médio',
    targetAudience: 'Bundles CNAB/portabilidade',
    subcategories: ['Package Maintainers', 'Cloud Portability Experts'],
    repoUrl: 'https://github.com/getporter/porter',
    downloadUrl: 'https://porter.sh/install/',
    installCommand: 'curl -L https://porter.sh/install.sh | bash',
    installGuide: '1. Execute o script. 2. Instale os mixins.',
    supportedStacks: [
      { name: 'Bundles CNAB', description: 'Pacotes de aplicação portáteis e padronizados.' },
      { name: 'Infraestrutura como Código', description: 'Terraform, Helm e Docker integrados.' },
      { name: 'Apps Multi-Cloud', description: 'Deploy consistente em qualquer provedor.' }
    ],
    installationSteps: [
      { title: 'Instalar CLI', description: 'Baixe e instale a CLI do Porter.', command: 'curl -L https://porter.sh/install.sh | bash' },
      { title: 'Mixins', description: 'Instale os mixins necessários para seus pacotes.', command: 'porter mixins install docker' },
      { title: 'Verificar', description: 'Confira se a instalação foi bem sucedida.', command: 'porter version' }
    ],
    supportedDistros: [
      { name: 'Ubuntu/Debian', command: 'curl -L https://porter.sh/install.sh | bash' },
      { name: 'macOS/Linux (Binary)', command: 'curl -L https://porter.sh/install.sh | bash' },
      { name: 'Alpine Linux 3.16+', command: 'apk add curl bash && curl -L https://porter.sh/install.sh | bash' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: false, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      cli: {
        description: 'Deploy focado em pacotes (bundles) CNAB que são gerenciados e publicados através da CLI oficial.',
        script: 'porter publish'
      }
    },
    deployDescription: 'Deploy focado em pacotes (bundles) CNAB que são gerenciados e publicados através da CLI oficial.'
  },
  {
    id: 'openshift',
    position: 30,
    name: 'OpenShift (OKD)',
    focus: 'Kubernetes enterprise open-source',
    advantages: [
      { tag: 'Segurança alta', explanation: 'Foco em conformidade e isolamento para ambientes corporativos.' },
      { tag: 'Builds auto', explanation: 'Source-to-Image (S2I) cria containers direto do seu código Git.' },
      { tag: 'Rotas', explanation: 'Gerenciamento avançado de tráfego e domínios integrado.' }
    ],
    examples: 'Plataforma Kubernetes Corporativa Open-Source, Gestão de Aplicações Críticas em Larga Escala, Ambiente de Desenvolvimento Cloud-Native',
    detailedExamples: [
      { 
        title: 'Infraestrutura de TI para Organizações de Larga Escala', 
        description: 'Implemente uma plataforma Kubernetes robusta com segurança, governança e monitoramento integrados nativamente. Benefícios: Padronização total de processos de desenvolvimento, conformidade com normas rígidas de segurança e escalabilidade para milhares de usuários.' 
      },
      { 
        title: 'Automação Completa do Ciclo de Vida de Aplicações', 
        description: 'Use as ferramentas integradas do OpenShift para automatizar desde o build do código até o deploy final. Benefícios: Redução drástica do time-to-market, facilidade para implementar CI/CD avançado e monitoramento proativo da saúde dos aplicativos.' 
      },
      { 
        title: 'Ambiente de Desenvolvimento Cloud-Native Moderno', 
        description: 'Ofereça aos seus desenvolvedores as melhores ferramentas para criar apps modernos em containers. Benefícios: Agilidade no desenvolvimento, suporte a microserviços e integração com tecnologias de ponta.' 
      }
    ],
    hardwareMin: '8–16 GB / 4–8 núcleos / 100 GB',
    hardwareRec: '32 GB+ / 8+ núcleos / 200 GB+',
    difficulty: 'Difícil',
    targetAudience: 'Empresas grandes K8s open',
    subcategories: ['Enterprise DevOps', 'Red Hat Users'],
    repoUrl: 'https://github.com/okd-project/okd',
    downloadUrl: 'https://www.okd.io/download/',
    installCommand: 'Follow OKD installation guide for your infrastructure',
    installGuide: '1. Prepare a infra. 2. Use o instalador okd.',
    supportedStacks: [
      { name: 'Kubernetes Enterprise', description: 'A versão mais robusta e segura do Kubernetes.' },
      { name: 'Apps Java/Spring', description: 'Otimizado para stacks corporativas tradicionais.' },
      { name: 'Microserviços Modernos', description: 'Suporte total a service mesh e serverless.' }
    ],
    installationSteps: [
      { title: 'Infraestrutura', description: 'Prepare os servidores (nós mestres e trabalhadores) conforme os requisitos.' },
      { title: 'Instalador', description: 'Baixe o instalador do OKD.', command: 'openshift-install create cluster' },
      { title: 'CLI', description: 'Instale a ferramenta de linha de comando oc.', command: 'oc login' }
    ],
    supportedDistros: [
      { name: 'Fedora CoreOS (Nativo)', command: 'Use openshift-install' },
      { name: 'RHEL (Nativo)', command: 'Use openshift-install' },
      { name: 'Alpine Linux (Experimental)', command: 'Use openshift-install' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Source-to-Image (S2I) cria containers automaticamente a partir do seu código fonte no Git.',
        script: 'oc new-app https://github.com/user/repo'
      },
      upload: {
        description: 'Suba manifestos Kubernetes (YAML) ou Helm Charts através do console web do OpenShift.',
        script: '# No console: Add -> YAML'
      },
      cli: {
        description: 'Controle total do cluster e aplicações através da ferramenta de linha de comando oc.',
        script: 'oc apply -f deployment.yaml'
      }
    },
    deployDescription: 'Plataforma robusta com builds automáticos integrados (Source-to-Image) e gerenciamento via CLI (oc).'
  },
  {
    id: 'cloudfoundry',
    position: 31,
    name: 'Cloud Foundry',
    focus: 'PaaS multi-linguagem clássica',
    advantages: [
      { tag: 'cf push simples', explanation: 'A experiência de deploy mais famosa e simples do mercado.' },
      { tag: 'Escalável', explanation: 'Projetado para rodar milhares de instâncias de apps simultaneamente.' },
      { tag: 'Legado estável', explanation: 'Ideal para manter aplicações Java e Ruby de grande porte.' }
    ],
    examples: 'PaaS Corporativo para Aplicações Java e Ruby, Gestão de Ciclo de Vida de Apps em Larga Escala, Infraestrutura de Nuvem Privada para Desenvolvedores',
    detailedExamples: [
      { 
        title: 'Manutenção de Aplicações Corporativas Legadas Estáveis', 
        description: 'Continue rodando seus aplicativos Java/Spring ou Ruby on Rails em uma plataforma PaaS madura, estável e confiável. Benefícios: Abstração total da infraestrutura para os desenvolvedores, escalabilidade horizontal simplificada e ecossistema rico de serviços integrados.' 
      },
      { 
        title: 'Plataforma de Desenvolvimento para Equipes Globais', 
        description: 'Ofereça um ambiente de deploy padronizado para centenas de desenvolvedores em diferentes localizações. Benefícios: Governança centralizada, facilidade para gerenciar recursos em larga escala e isolamento total entre diferentes projetos e unidades de negócio.' 
      },
      { 
        title: 'Infraestrutura de Nuvem Privada Soberana', 
        description: 'Implemente sua própria nuvem PaaS para garantir total controle sobre os dados e processos. Benefícios: Independência de provedores públicos, redução de custos em escala e segurança personalizada.' 
      }
    ],
    hardwareMin: '8 GB / 4 núcleos / 50 GB',
    hardwareRec: '16–32 GB / 8 núcleos / 100 GB+',
    difficulty: 'Difícil',
    targetAudience: 'Stack Cloud Foundry antigo',
    subcategories: ['Legacy PaaS Operators', 'Java Enterprise Devs'],
    repoUrl: 'https://github.com/cloudfoundry/cf-deployment',
    downloadUrl: 'https://www.cloudfoundry.org/',
    installCommand: 'bosh deploy -d cf cf-deployment.yml',
    installGuide: '1. Instale o BOSH. 2. Execute o deploy.',
    supportedStacks: [
      { name: 'Apps Java/Spring', description: 'A plataforma de referência para o ecossistema Spring.' },
      { name: 'Apps Ruby on Rails', description: 'Suporte histórico e robusto para Rails.' },
      { name: 'Serviços Gerenciados', description: 'Integração fácil com bancos de dados via Service Broker.' }
    ],
    installationSteps: [
      { title: 'BOSH', description: 'O Cloud Foundry é gerenciado pelo BOSH.' },
      { title: 'Instalação', description: 'Execute o deploy usando o manifesto oficial.', command: 'bosh deploy -d cf cf-deployment.yml' },
      { title: 'CLI', description: 'Instale a CLI do Cloud Foundry para gerenciar seus apps.', command: 'cf login' }
    ],
    supportedDistros: [
      { name: 'Ubuntu (BOSH Stemcell)', command: 'bosh deploy -d cf ...' },
      { name: 'Alpine Linux (Experimental)', command: 'bosh deploy -d cf ...' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: false, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Experiência de deploy clássica: o Cloud Foundry detecta a linguagem e faz o deploy automático via Git push.',
        script: 'cf push my-app'
      },
      cli: {
        description: 'Gerencie todo o ciclo de vida da sua aplicação (escala, logs, serviços) através da CLI oficial.',
        script: 'cf logs my-app'
      }
    },
    deployDescription: 'Deploy clássico via CLI através do comando "cf push", que automatiza todo o ciclo de vida do app.'
  },
  {
    id: 'northflank',
    position: 32,
    name: 'Northflank (Self/Hybrid)',
    focus: 'Plataforma moderna com self-hosted híbrido',
    advantages: [
      { tag: 'UI bonita', explanation: 'Uma das interfaces mais modernas e intuitivas do mercado.' },
      { tag: 'CI/CD nativo', explanation: 'Pipelines de build e deploy automáticos sem configuração.' },
      { tag: 'Databases prontos', explanation: 'Suba bancos de dados gerenciados em segundos.' },
      { tag: 'Híbrido fácil', explanation: 'Gerencie servidores locais e nuvem pública no mesmo painel.' }
    ],
    examples: 'Gestão Híbrida de Aplicações e Bancos de Dados, Plataforma de Deploy Moderna para Startups, Automação de Infraestrutura Multi-Cloud',
    detailedExamples: [
      { 
        title: 'Infraestrutura Híbrida para Startups em Rápido Crescimento', 
        description: 'Gerencie seus aplicativos em servidores próprios e escale para a nuvem pública de forma transparente quando necessário. Benefícios: Otimização inteligente de custos, flexibilidade total para escolher onde rodar cada serviço e interface de gerenciamento moderna e intuitiva.' 
      },
      { 
        title: 'Central de Bancos de Dados Gerenciados Self-Hosted', 
        description: 'Suba e gerencie bancos de dados (PostgreSQL, Redis, MongoDB) com a facilidade de uma nuvem pública em seu próprio hardware. Benefícios: Redução drástica de custos com DBaaS, controle total sobre a localização dos dados e backups automáticos configuráveis.' 
      },
      { 
        title: 'Automação de Infraestrutura Multi-Cloud Simplificada', 
        description: 'Use o Northflank para orquestrar serviços em diferentes provedores a partir de um único lugar. Benefícios: Redução da complexidade operacional, agilidade nos deploys e visão unificada de toda a sua stack tecnológica.' 
      }
    ],
    hardwareMin: '4–8 GB / 4 núcleos / 50 GB',
    hardwareRec: '16 GB+ / 8 núcleos / 100 GB+',
    difficulty: 'Médio-Difícil',
    targetAudience: 'UI moderna + self-hosted parcial',
    subcategories: ['Modern Full Stack Devs', 'Hybrid Cloud Users'],
    repoUrl: 'https://github.com/northflank',
    downloadUrl: 'https://northflank.com/',
    installCommand: 'Connect your infrastructure in Northflank dashboard',
    installGuide: '1. Crie conta. 2. Conecte seu cluster.',
    supportedStacks: [
      { name: 'Full Stack Apps', description: 'Ideal para projetos modernos com frontend e backend.' },
      { name: 'Bancos de Dados', description: 'PostgreSQL, Redis, MongoDB e MySQL prontos.' },
      { name: 'Microserviços', description: 'Orquestração visual de sistemas distribuídos.' }
    ],
    installationSteps: [
      { title: 'Conta', description: 'Crie uma conta no Northflank.' },
      { title: 'Infraestrutura', description: 'Conecte seu provedor de nuvem ou cluster Kubernetes próprio.' },
      { title: 'Deploy', description: 'Crie um novo serviço e selecione seu repositório Git.' }
    ],
    supportedDistros: [
      { name: 'Qualquer Cluster K8s', command: 'Connect via Northflank agent' },
      { name: 'Alpine Linux (com K8s)', command: 'apk add curl && connect via agent' }
    ],
    deployMethods: { 
      dragNDrop: false, 
      autoDeploy: true, 
      ftp: false, 
      upload: true, 
      cli: true 
    },
    deployDetails: {
      autoDeploy: {
        description: 'Conecte seu repositório Git e o Northflank fará o build e deploy automático a cada commit.',
        script: '# No painel: Services -> Create -> Git'
      },
      upload: {
        description: 'Suba imagens Docker diretamente para o registro do Northflank ou use imagens externas.',
        script: '# No painel: Services -> Create -> Image'
      },
      cli: {
        description: 'Gerencie seus serviços e infraestrutura através da CLI moderna do Northflank.',
        script: 'nf deploy'
      }
    },
    deployDescription: 'Plataforma moderna com interface intuitiva para deploy automático via Git ou gerenciamento via CLI.'
  },
  {
    id: 'turuhost',
    position: 33,
    name: 'Turu Host',
    focus: 'Hosting simples (pouca info recente)',
    advantages: [
      { tag: 'Simples', explanation: 'Ideal para quem não quer lidar com servidores e quer apenas hospedar um site.' },
      { tag: 'Low-cost', explanation: 'Uma das opções mais acessíveis para pequenos projetos e estudantes.' },
      { tag: 'Painel web', explanation: 'Gerencie seus arquivos e domínios sem precisar de terminal.' }
    ],
    examples: 'Hospedagem de Sites Estáticos Simples, Servidor de Arquivos Básico para Web, Alternativa de Baixo Custo para Pequenos Projetos',
    detailedExamples: [
      { 
        title: 'Hospedagem de Landing Pages e Sites Institucionais', 
        description: 'Suba sites estáticos de forma rápida, barata e estável para seus projetos iniciais ou de clientes. Benefícios: Simplicidade absoluta no gerenciamento, custo extremamente competitivo e facilidade para gerenciar arquivos diretamente via painel web.' 
      },
      { 
        title: 'Pequeno Repositório de Arquivos Web Privado', 
        description: 'Mantenha arquivos importantes acessíveis via web de forma organizada, simples e segura. Benefícios: Interface amigável para upload e download, gerenciamento básico de diretórios e rapidez total no setup inicial.' 
      },
      { 
        title: 'Hospedagem de Projetos de Estudantes e Portfólios', 
        description: 'Um ambiente ideal para quem está começando e precisa de um lugar simples para mostrar seu trabalho. Benefícios: Baixo custo, facilidade de aprendizado e suporte a tecnologias web básicas.' 
      }
    ],
    hardwareMin: '1–2 GB / 1 núcleo / 20 GB',
    hardwareRec: '4 GB / 2 núcleos / 40 GB SSD',
    difficulty: 'Fácil',
    targetAudience: 'Projetos muito básicos (verificar atualizações)',
    subcategories: ['Static Site Owners', 'Minimalist Hosts'],
    repoUrl: 'https://github.com/turuhost',
    downloadUrl: 'https://turuhost.com/',
    installCommand: 'Check official website for latest info',
    installGuide: '1. Siga o guia no site oficial.',
    supportedStacks: [
      { name: 'Sites Estáticos', description: 'HTML, CSS e JavaScript simples.' },
      { name: 'Apps PHP Básicos', description: 'Suporte a scripts web tradicionais.' },
      { name: 'Portfólios', description: 'O lugar perfeito para mostrar seus primeiros projetos.' }
    ],
    installationSteps: [
      { title: 'Hospedagem', description: 'Contrate um plano de hospedagem no Turu Host.' },
      { title: 'Painel', description: 'Acesse o painel de controle fornecido.' },
      { title: 'Upload', description: 'Suba seus arquivos via Gerenciador de Arquivos ou FTP.' }
    ],
    supportedDistros: [
      { name: 'Hospedagem Compartilhada (Nativo)', command: 'Use o painel web' },
      { name: 'Alpine Linux (Experimental)', command: 'apk add curl bash && use web panel' }
    ],
    deployMethods: { 
      dragNDrop: true, 
      autoDeploy: false, 
      ftp: true, 
      upload: true, 
      cli: false 
    },
    deployDetails: {
      dragNDrop: {
        description: 'Gerencie seus arquivos estáticos de forma visual arrastando-os para o navegador.',
        script: '# Arraste arquivos para o Gerenciador de Arquivos'
      },
      ftp: {
        description: 'Conecte-se via FTP para subir grandes volumes de arquivos de forma estável.',
        script: 'ftp://turuhost-ip'
      },
      upload: {
        description: 'Suba seus arquivos estáticos diretamente através do painel de controle web.',
        script: '# No painel: Gerenciador de Arquivos -> Upload'
      }
    },
    deployDescription: 'Hospedagem simples onde você sobe seus arquivos estáticos diretamente através do painel de controle.'
  }
];

export const SUMMARY_GROUPS: SummaryGroup[] = [
  {
    category: 'Iniciante / simples em casa',
    suggestions: ['CasaOS', 'Tipi', 'EasyPanel', 'YunoHost']
  },
  {
    category: 'Hospedar como Vercel/Railway grátis',
    suggestions: ['Coolify', 'Dokploy', 'CapRover', 'Swiftwave']
  },
  {
    category: 'VPS pequeno/barato (≤4 GB RAM)',
    suggestions: ['EasyPanel', 'Swiftwave', 'Kamal', 'Piku']
  },
  {
    category: 'Containers organizados',
    suggestions: ['Portainer', 'Coolify', 'Dokploy']
  },
  {
    category: 'Kubernetes sem complicar muito',
    suggestions: ['K3s + Rancher Desktop', 'KubeSphere', 'Rancher']
  },
  {
    category: 'Funções serverless pequenas',
    suggestions: ['OpenFaaS']
  },
  {
    category: 'Git + CI/CD tudo em casa',
    suggestions: ['Gitea + Actions', 'Coolify', 'Dokploy']
  },
  {
    category: 'Acesso zero trust/VPN/PaaS unificado',
    suggestions: ['Octelium', 'Cosmos Cloud']
  },
  {
    category: 'Empresa grande / privacidade total',
    suggestions: ['Rancher', 'KubeSphere', 'OpenShift (OKD)', 'Northflank']
  },
  {
    category: 'Deploy CLI leve / minimalista',
    suggestions: ['Haloy', 'Kamal', 'JustDeploy']
  },
  {
    category: 'Projetos legados/antigos',
    suggestions: ['Tsuru', 'Hephy Workflow', 'Cloud Foundry']
  }
];
