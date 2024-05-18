const tags = {
    "Quarta": "quarta",
    "Sexta": "sexta",
    "Sábado": "sabado",
    "Domingo": "domingo",

    "Teatro": "teatro",
    "Ginásio de Eventos": "ginasio_evento",
    "Comedoria": "comedoria",
    "Espaço Oficina 1": "oficina_1",
    "Ginásio de Esportes": "ginasio_esporte",
    "Área externa - gramado": "area_externa",
    "Parque Aquático - Deck": "deck",
    "Espaço de Tecnologias e Artes": "espaco_tecnologia",
    "Sala de Expressão Corporal 2": "sala_corporal_2",
    "Sala de Expressão Artística": "sala_artistica",
    "em vários locais da unidade": "varios",
    "Comedoria - área externa": "comedoria_externa",
    "Parque Aquático": "parque",
    "Sala de Expressão Corporal 1": "sala_corporal_1",
    "Área de convivência": "convivencia",
    "Biblioteca": "biblioteca",


    "Cinema e Vídeo": "cinema",
    "Exibição": "exibicao",
    "Jovens": "jovens",
    "Música": "musica",
    "Show": "show",
    "Bate-Papo": "bate",
    "Ações para Cidadania": "acao",
    "Artes Visuais": "artes",
    "Tecnologias e Artes": "tecnologias",
    "Oficina": "oficina",
    "Esporte e Atividade Física": "esporte",
    "Crianças": "criancas",
    "Vicência": "vivencia",
    "Dança": "danca",
    "Performance": "performance",
    "Intervenção": "intervencao",
    "Alimentação": "alimentacao",
    "Exposição": "exposicao",
    "Instalação": "instalacao",
    "Literatura": "literatura",
}

const itens = [
    {
        "titulo": "O Menino e a Garça",
        "subtitulo": "Direçao: Hayao Miyazaki",
        "atividade": "Cinema e VídeoexibiçãoJovens",
        "local": "Teatro",
        "imagem": "img/O Menino e a Garça.jpg",
        "descricao": `Indicado ao Oscar de Melhor Animação, O Menino e a Garça faz parte do catálogo do Studio Ghibli e conta com a direção de Hayao Miyazaki.

        Baseado no livro de Genzaburo Yoshino de 1937, o longa conta a história de Mahito Maki, um jovem que vive no Japão. Após a morte de sua mãe, Mahito se muda com a família para uma propriedade no campo junto com sua nova madrasta, onde uma série de eventos misteriosos o levam a uma torre antiga e isolada, lar de uma garça travessa. Quando sua madrasta desaparece, o menino segue a garça e entra num mundo fantástico, habitado pelos vivos e pelos mortos, e embarca em uma jornada épica ao lado da garça que o guia a descobertas sobre os segredos deste mundo e a verdade sobre si mesmo.
        
        A narrativa conta ainda com detalhes de experiências vividas pelo próprio diretor durante sua infância.
        
        <strong>Ficha Técnica</strong>
        Título original: Kimitachi wa Dō Ikiru ka. 2023. Japão.
        Direção e roteiro: Hayao Miyazaki
        Elenco: Soma Santoki, Masaki Suda, Kô Shibasaki`,
        "horario": "Das 20h às 21h30",
        "dia": "Quarta",
        "ingressos": "Retirada de ingressos limitados com 30 minutos antes do início da atividade"
    },
    {
        "titulo": "Baile Medieval – com Terra Celta",
        "subtitulo": "e com a participação do grupo artístico Ligia Aydar",
        "atividade": "JovensMúsicashow",
        "local": "Ginásio de Eventos",
        "imagem": "",
        "descricao": `A abertura do evento promete uma experiência épica e envolvente com um Baile Medieval, embalado pelo som do grupo musical Terra Celta.

        Vestidos com trajes típicos da era medieval, os participantes serão transportados para um mundo de magia, dança e música ao vivo. O Terra Celta, conhecido por sua fusão única de elementos celtas e modernos, cria uma atmosfera vibrante e contagiante, convidando todos a dançarem e se divertirem ao ritmo das melodias ancestrais.
        
        É uma oportunidade imperdível para vivenciar a atmosfera mística e festiva dos tempos medievais.
        
        Para o Baile Medieval, o Sesc Rio Preto convida os participantes a virem fantasiados a caráter (traje típico não obrigatório)`,
        "horario": "Das 19h às 20h30",
        "dia": "Sexta",
        "ingressos": "Sem retirada de ingressos. Lugares limitados."
    },
    {
        "titulo": "Afinal, o que é um Influencer?",
        "subtitulo": "Com Ygor Palopoli, Malena e mediação de Kaciane Caroline",
        "atividade": "Ações para Cidadaniabate-papoJovens",
        "local": "Teatro",
        "imagem": "img/Afinal, o que é um Influencer.jpg",
        "descricao": `Compartilhando experiências, histórias e insights sobre o mundo do entretenimento, os influenciadores proporcionarão uma visão pessoal dos bastidores e das tendências que estão moldando a indústria atualmente. Desde análises de filmes e séries até dicas de gaming e discussões sobre o impacto dos doramas, cada tema será abordado de forma envolvente e inspiradora.

        Sobre Ygor Palopoli
        
        Ygor Palopoli é bacharel em Cinema e Audiovisual e cria conteúdo sobre o tema desde 2018. Atua também como apresentador, jornalista e roteirista, passando por veículos renomados como AdoroCinema, IGN e Terra, onde atualmente é um dos principais colunistas da vertical de entretenimento.
        
        Sobre Malena
        
        Iniciou sua carreira aos 17 anos, foi uma das pioneiras em gerar conteúdo gamer no Youtube, plataforma na qual possui mais de 6 milhões de inscritos. Malena traz conteúdo de jogos em suas lives diárias, acumula quase 10 milhões de seguidores em suas redes que juntas, contabilizam mais de 1 bilhão de visualizações.
        
        Sobre Kaciane Caroline
        
        Influenciadora digital de Rio Preto tem se revelado como uma das mais talentosas e inspiradoras criadoras de conteúdos gamers do Brasil, conquistando o coração de milhares de fãs e seguidores em várias plataformas.`,
        "horario": "Das 11h às 12h30",
        "dia": "Sábado",
        "ingressos": 'Retirada de ingressos limitados uma hora antes'
    },
    {
        "titulo": "Batalha de Rimas",
        "subtitulo": "com Batalha do Braile ",
        "atividade": "JovensMúsicashow",
        "local": "Comedoria",
        "imagem": "",
        "descricao": `Nesta energizante edição da Batalha do Braile – Modalidade Personagens – cada MC vai representar um personagem de desenho, anime, quadrinhos ou filme. Para mandar bem nas rimas, os MCs devem interpretar as características, poderes e histórias desses personagens para derrotar seu adversário. Quem leva a melhor?!`,
        "horario": "Das 14h às 15h ",
        "dia": "Sábado",
        "ingressos": "Espaço limitado"
    },
    {
        "titulo": "Quadrinhos no Cotidiano",
        "subtitulo": "com os quadrinistas Carlos Ruas, André Inácio, Carol Ito e mediação de Walmir Orlandeli",
        "atividade": "Ações para Cidadaniabate-papoArtes Visuaisbate-papoJovens",
        "local": "Teatro",
        "imagem": "",
        "descricao": `Um encontro imperdível para os fãs e entusiastas de quadrinhos no qual grandes nomes do cenário nacional se reúnem ao redor de uma mesa de diálogos para explorar e discutir o rico universo das HQs do Brasil.`,
        "horario": "Das 14h às 15h30",
        "dia": "Sábado",
        "ingressos": "Retirada de ingressos limitados uma hora antes"
    },
    {
        "titulo": "Mostra Pop",
        "subtitulo": "",
        "atividade": "DançaperformanceJovens",
        "local": "Ginásio de Esportes",
        "imagem": "",
        "descricao": `Uma mostra dinâmica e empolgante que reúne diversos grupos de dança e solos para apresentarem suas coreografias inspiradas no universo pop.

        Assista a performances cheias de ritmo ou se aventure no palco principal do Animerp.`,
        "horario": "Das 15h30 às 16h30 Das 15h30 às 17h",
        "dia": "Sábado Domingo",
        "ingressos": 'Para participantes inscritos e selecionados'
    },
    {
        "titulo": "Geek Stencil em Ecobag",
        "subtitulo": "Com Coletivo Uns que Pensa Arte",
        "atividade": "JovensTecnologias e Artesoficina",
        "local": "Espaço Oficina 1",
        "imagem": "",
        "descricao": `Nesta oficina, você vai escolher sua “Moeda do Poder” dos Power Rangers, para estampar uma ecobag, aprendendo sobre a técnica de stencil e levando para casa sua bolsa única e personalizada.`,
        "horario": "Sábado, em três sessões: das 13h às 14h, das 14h30 às 15h30 e das 16h às 17h",
        "dia": "Sábado",
        "ingressos": 'Entrega de senhas limitadas no local da atividade com 30 minutos de antecedência.'
    },
    {
        "titulo": "Batalha de Dança",
        "subtitulo": "com Lucas Leal, dançarino e coreógrafo",
        "atividade": "Dançaintervenção",
        "local": "Ginásio de Esportes",
        "imagem": "",
        "descricao": `As batalhas de danças são momentos emocionantes em que dançarinos tem a oportunidade de mostrar ao público sua performance, habilidades de improviso, criatividade e presença de palco. Participe deste desafio contagiante!`,
        "horario": "Das 16h30 às 17h",
        "dia": "Sábado",
        "ingressos": ''
    },
    {
        "titulo": "Diogo Miyahara canta aberturas memoráveis",
        "subtitulo": "com Diogo Miyahara",
        "atividade": "JovensMúsicashow",
        "local": "Comedoria",
        "imagem": "",
        "descricao": `Do universo heroico e cheio de aventuras dos Super Sentais, ao encanto das aberturas da TV Manchete, cada música traz consigo lembranças e emoções que fizeram parte da vida de uma geração inteira.

        Um momento para os fãs relembrarem suas canções favoritas da televisão e se emocionarem com as interpretações de Diogo Miyahara e a presença especial dos cosplayers do Changeman.`,
        "horario": "Das 16h às 17h",
        "dia": "Sábado",
        "ingressos": ''
    },
    {
        "titulo": "Síntese Narrativa dos Quadrinhos",
        "subtitulo": "com Walmir Orlandeli",
        "atividade": "JovensTecnologias e Artesbate-papo",
        "local": "Teatro",
        "imagem": "",
        "descricao": `A proposta é levar aos participantes uma bagagem teórica de como funciona uma construção narrativa e trabalhar o processo de síntese fazendo uso de diferentes linguagens, como: conto, crônica, poesia, haikai e quadrinhos.`,
        "horario": "Das 16h às 17h30",
        "dia": "Sábado",
        "ingressos": 'Entrega de senhas limitadas no local da atividade com 30 minutos de antecedência.'
    },
    {
        "titulo": "No Ritmo dos Animes",
        "subtitulo": "Com o grupo de dança YongHang",
        "atividade": "DançaintervençãoJovens",
        "local": "Ginásio de Esportes",
        "imagem": "",
        "descricao": `Para abrir o tradicional desfile Cosplay, jovens dançarinos da cidade irão incorporar seus personagens favoritos em uma apresentação de dança vibrante, unindo o K-pop e o universo dos Animes, Games e Seriados.`,
        "horario": "Das 17h20 às 17h30",
        "dia": "Sábado",
        "ingressos": ''
    },
    {
        "titulo": "Kung Fu: a arte marcial milenar",
        "subtitulo": "com AFLS - Associação  Fei Lung Sin de Kung Fu",
        "atividade": "Jovensshow",
        "local": "Ginásio de Esportes",
        "imagem": "img/Kung Fu a arte marcial milenar.png",
        "descricao": `O público é convidado a assistir e conhecer mais sobre esta arte marcial milenar, o Kung Fu.

        Esta modalidade foi criada na China e seus movimentos de ataque e defesa foram inspirados na natureza e na observação dos movimentos dos animais.`,
        "horario": "Das 12h30 às 13h",
        "dia": "Domingo",
        "ingressos": ''
    },
    {
        "titulo": "Vivência de Kung Fu",
        "subtitulo": "com AFLS - Associação Fei Lung Sin de Kung Fu ",
        "atividade": "Esporte e Atividade FísicavivênciaJovens",
        "local": "Ginásio de Esportes",
        "imagem": "",
        "descricao": `Kung Fu é uma arte marcial milenar, que teve nos anos 70 grande destaque nos filmes de Bruce Lee, um  ícone da cultura pop. A modalidade é ideal para quem quer aprender uma defesa pessoal e também uma poderosa ferramenta de autoconhecimento e equilíbrio entre o corpo e a mente.

        Nesta vivência, o participante terá contato com os princípios básicos do Kung Fu.   `,
        "horario": "Das 13h às 14h",
        "dia": "Domingo",
        "ingressos": 'Inscrições no local. Vagas Limitadas.'
    },
    {
        "titulo": "Universo Cosplay",
        "subtitulo": "Com os cosplayers Charpinha, Tia Sol, Melusine Sparkle e Sakura Cacheada, Mediação de Gustavo (assistente técnico do Trabalho Social com Pessoas Idosas)",
        "atividade": "Jovensintervenção",
        "local": "Teatro",
        "imagem": "",
        "descricao": `A prática do Cosplay está cada vez mais conhecida e ganhando milhares de adeptos.

        Nesta mesa, cosplayers profissionais irão debater sobre este universo tão encantador.
        
        Com as cosplayers Charpinha, Tia Sol, Melusine Sparkle e Sakura Cacheada e mediação de Gustavo (assistente técnico do Trabalho Social com Pessoas Idosas do Sesc São Paulo.)`,
        "horario": "Das 13h às 14h30",
        "dia": "Domingo",
        "ingressos": 'Entrega de senhas limitadas no local da atividade com 30 minutos de antecedência'
    },
    {
        "titulo": "Banda Animoji",
        "subtitulo": "com Banda Animoji",
        "atividade": "JovensMúsicashow",
        "local": "Comedoria",
        "imagem": "",
        "descricao": `Com músicas que marcaram gerações e emocionaram fãs ao redor do mundo, Animoji leva o público a uma jornada musical repleta de nostalgia, energia e emoção.  

        Sobre a banda
        A banda, formada em 2022, é composta por Nina Ribeiro (Vocal), Magayver Walner (Guitarra e Vocal), JT Oliver (Bateria e Vocal) e Abinel Filho (Contrabaixo e Direção), todos profissionais da área musical em Rio Preto. `,
        "horario": "Das 14h às 15h",
        "dia": "Domingo",
        "ingressos": 'Espaço Limitado'
    },
    {
        "titulo": "Quintal Lúdico I Brincar Retrô",
        "subtitulo": "Com Coletivo Regar",
        "atividade": "Criançasvivência",
        "local": "Área externa - gramado",
        "imagem": "",
        "descricao": `Nesse espaço voltado à primeira infância, no quintal lúdico que ocorre todos os finais de semana no Sesc Rio Preto, mergulharemos no universo geek e retrô para criar um ambiente brincante, divertido e nostálgico aliado à intervenção artística e mediação do brincar relembrando e revivendo momentos de outra época para alguns e cheio de novidade e curiosidade para outros.

        Indicado para crianças até 6 anos.`,
        "horario": "Das 10h às 15h30",
        "dia": "Sábado Domingo",
        "ingressos": ''
    },
    {
        "titulo": "Arena K-Pop",
        "subtitulo": "com Integrantes do Grupo Yong Hang",
        "atividade": "JovensMúsicavivência",
        "local": "Ginásio de Esportes",
        "imagem": "",
        "descricao": `Uma pista de dança com muito Random Play Dance, dinâmicas e aquela Playlist que não vai deixar ninguém parado. Se solte ao som do K-pop nesta arena toda voltada a este universo.`,
        "horario": "Das 12h às 15h30 ",
        "dia": "Sábado Domingo",
        "ingressos": 'Espaço limitado'
    },
    {
        "titulo": "Dragon Bottons",
        "subtitulo": "com Leonardo Noelodran",
        "atividade": "JovensTecnologias e Artesoficina",
        "local": "Parque Aquático - Deck",
        "imagem": "",
        "descricao": `Nesta oficina, a partir da temática do DragonBall, os participantes terão a oportunidade de personalizar e materializar suas ideias em bottons, estimulando a imaginação e a criatividade através do desenho e outras técnicas, além de possibilitar a experiência do processo de uma produção gráfica.`,
        "horario": "Sábado e domingo, das 13h às 14h, e das 15h às 16h",
        "dia": "Sábado Domingo",
        "ingressos": 'Entrega de senhas limitadas no local da atividade com 30 minutos de antecedência.'
    },
    {
        "titulo": "Relógio Morfador",
        "subtitulo": "com Dani Águas, arte educadadora",
        "atividade": "JovensTecnologias e Artesoficina",
        "local": "Espaço de Tecnologias e Artes",
        "imagem": "",
        "descricao": `Todo fã dos Power Rangers sempre sonhou ter um relógio morfador. Nesta oficina, os participantes irão criar este dispositivo de transformação de pulso dos Rangers, utilizando materiais simples como feltro, e.v.a, e outros.`,
        "horario": "Sábado e domingo, em duas sessões: das 13h às 14h e das 15h às 16h",
        "dia": "Sábado Domingo",
        "ingressos": 'Entrega de senhas limitadas no local da atividade com 30 minutos de antecedência.'
    },
    {
        "titulo": "Brinquedo de Origami",
        "subtitulo": "Com Irene Tanabe",
        "atividade": "Criançasoficina",
        "local": "Parque Aquático - Deck",
        "imagem": "",
        "descricao": `Que tal convidar a garotada para criar brinquedos de papel? Com um simples quadrado ou retângulo de papel é possível criar divertidos brinquedos de origamis. A proposta desta atividade é mostrar que esta técnica milenar pode ser um recurso para alegrar as crianças.

        No Animerp iremos trabalhar com personagens de anime como o Pikachu.
        
        Indicado para crianças de 6 a 12 anos.`,
        "horario": "Das 10h30 às 11h30, das 13h às 14h e das 15h às 16h",
        "dia": "Sábado Domingo",
        "ingressos": 'Entrega de senhas limitadas no local da atividade com 30 minutos de antecedência.'
    },
    {
        "titulo": "Caminhos e Possibilidades na Dublagem",
        "subtitulo": "com os dubladores Manolo Rey e Alexia Vitória",
        "atividade": "Ações para Cidadaniabate-papoJovens",
        "local": "Teatro",
        "imagem": "",
        "descricao": `Vozes icônicas fazem parte deste bate-papo. Os dubladores Manolo Rey e Alexia Vitória falarão sobre seus principais personagens, curiosidades da carreira e do universo da dublagem, além de fazer algumas demonstrações de suas dublagens mais famosas.

        Manolo empresta sua voz aos personagens do Tobey Maguire em Homem Aranha, do Sonic, do Gaguinho do Looney Tunes, Will Smith em Um Maluco no pedaço, Ken da Bárbie e tantas outras, enquanto Alexia é a dubladora que ganhou destaque no live action de “Barbie” como a “Barbie Médica” e também é responsável pelas vozes de Tia Nao no anime “Skip and Loafer”, Sasha Colby em “RuPaul’s Drag Race”, entre muitas outras personagens.
        
        Mediação de Marcos Braz, animador cultural Sesc São Paulo.`,
        "horario": "Das 15h às 16h30",
        "dia": "Domingo",
        "ingressos": 'Retirada de ingressos limitados com uma hora de antecedência'
    },
    {
        "titulo": "Batalha Campal",
        "subtitulo": "com Dragon Style Swordplay",
        "atividade": "JovensMúsicavivência",
        "local": "Ginásio de Esportes",
        "imagem": "",
        "descricao": `Teste seus talentos de força e habilidade, monte seu time, estratégias, e venha participar desta Batalha Campal com a equipe mais tradicional de Rio Preto, Dragon Style Swordplay!`,
        "horario": "Das 12h às 17h ",
        "dia": "Sábado Domingo",
        "ingressos": 'Espaço limitado'
    },
    {
        "titulo": "Trapezoidz",
        "subtitulo": "com Coletivo Uns que Pensa Arte",
        "atividade": "JovensTecnologias e Artesoficina",
        "local": "Espaço Oficina 1",
        "imagem": "",
        "descricao": `Para os fãs de ToyArt, ou para quem deseja conhecer mais sobre a técnica, nesta oficina, criaremos trapezoidz de papel com seu Ranger favorito.

        Venha fazer o seu e se divertir com a gente!`,
        "horario": "Domingo, em três sessões: das 13h às 14h, das 14h30 às 15h30, e das 16h às 17h",
        "dia": "Domingo",
        "ingressos": 'Retirada de senhas limitadas no local com 30 minutos de antecedência.'
    },
    {
        "titulo": "Larp: O Magnífico nos Céus do Amanhã",
        "subtitulo": "com Confraria das Ideias",
        "atividade": "Jovensintervenção",
        "local": "Sala de Expressão Corporal 2",
        "imagem": "img/Larp O Magnífico nos Céus do Amanhã.jpg",
        "descricao": `Viena, 1889. Conturbada época repleta de pós-conflitos entre nações e impérios, marcada por vasta efervescência cultural, grandes invenções e descobertas do homem. Maravilhas tecnológicas movidas principalmente a vapor – a combustão é a grande propulsão deste mundo abalado por revoluções industriais, sociais e culturais…

        É diante deste cenário que o Zeppelin “O Magnífico” irá decolar em seu voo inaugural com celebridades, cientistas, políticos, repórteres de diversas nações e credos.
        
        Que aventuras agitarão este pretensioso voo? Você pode embarcar no Zeppelin durante o Animerp!`,
        "horario": "Das 12h às 17h",
        "dia": "Sábado Domingo",
        "ingressos": 'Entrega de senhas limitadas no local da atividade com 30 minutos de antecedência'
    },
    {
        "titulo": "Caricaturas no Estilo Mangás",
        "subtitulo": "com Hélio Kaname e Wesley Estácio, artistas ilustradores",
        "atividade": "Artes VisuaisintervençãoJovens",
        "local": "Comedoria - Área Externa",
        "imagem": "",
        "descricao": `Nesta intervenção, os artistas Hélio Kaname e Wesley Estácio, criarão caricaturas do público presente no estilo dos mangás.`,
        "horario": "Das 13h às 17h",
        "dia": "Sábado Domingo",
        "ingressos": 'Atendimento por ordem de chegada'
    },
    {
        "titulo": "O Leão e o Dragão Chinês",
        "subtitulo": "Com o grupo União Nacional Dança de Leão e Dragão",
        "atividade": "DançaexibiçãoJovens",
        "local": "Em vários locais da unidade",
        "imagem": "",
        "descricao": `Neste espetáculo, a energia vibrante das cores, os ritmos envolventes dos sons, os movimentos graciosos e poderosos, e a sincronia perfeita entre os dançarinos criam um impacto digno de uma expressão artística que passeia pelos séculos trazendo a tradição, a beleza e o fascínio pela cultura chinesa.`,
        "horario": "Das 14h às 17h",
        "dia": "Sábado Domingo",
        "ingressos": ''
    },
    {
        "titulo": "Espaço Maid Café Sailor Moon",
        "subtitulo": "Com Spirit Maid Café",
        "atividade": "AlimentaçãooficinaJovens",
        "local": "Sala de Expressão Artística",
        "imagem": "",
        "descricao": `Guiados pelas habilidosas Sailors, os participantes serão ensinados a preparar pratos deliciosos com um toque especial de fofura. Desde sobremesas decoradas até petiscos encantadores, cada receita é uma experiência culinária divertida.
        Seja você um iniciante na cozinha ou um entusiasta da gastronomia, o Maid Café oferece uma experiência única que combina aprendizado, entretenimento e degustação em um ambiente alegre e acolhedor.
        
        Venha se deliciar e se divertir com as Sakuras enquanto descobre o lado mais fofo da culinária!`,
        "horario": "Sábado e domingo, em três sessões: das 13h às 14h, das 14h30 às 15h30 e das 16h às 17h",
        "dia": "Sábado Domingo",
        "ingressos": 'Retirada de ingressos com 30 minutos de antecedência.'
    },
    {
        "titulo": "Uma Viagem com Miyazaki",
        "subtitulo": "com Isaac Ruy",
        "atividade": "Ações para CidadaniaArtes VisuaisinstalaçãoJovens",
        "local": "Parque Aquático",
        "imagem": "",
        "descricao": `Adentre o mundo mágico de “A Viagem de Chihiro” em uma instalação artística única, inspirada na obra-prima de Hayao Miyazaki, esta experiência imersiva transporta os visitantes para o universo encantado do filme. Um dos pontos altos da instalação é o espaço dedicado à icônica cena do vagão, onde os visitantes podem recriar a imagem ao lado do lendário personagem Kaonashi, conhecido como Sem Rosto.`,
        "horario": "Das 12h às 18h",
        "dia": "Sábado Domingo",
        "ingressos": ''
    },
    {
        "titulo": "Feira Geek",
        "subtitulo": "Com artistas independentes da cidade e da região",
        "atividade": "Ações para CidadaniaexposiçãoJovens",
        "local": "Parque Aquático - Deck",
        "imagem": "",
        "descricao": `Explore um espaço repleto de talento e criatividade, onde cada produto conta uma história e reflete a paixão de seus criadores pelo universo geek.

        A feira é o lugar ideal para encontrar itens artesanais e apoiar o trabalho de artistas independentes, garantindo uma experiência única e autêntica para os aficionados por cultura pop.`,
        "horario": "Das 11h às 18h",
        "dia": "Sábado Domingo",
        "ingressos": ''
    },
    {
        "titulo": "Área Game",
        "subtitulo": "com Arena PlayMater's ",
        "atividade": "Jovens",
        "local": "Área de convivência",
        "imagem": "",
        "descricao": `Ajustem os controles, é hora de mandar ver nos games. Com atari, fliperama, PS2, óculos de realidade virtual, Just Dance e muitos outros. Bora jogar? `,
        "horario": "Das 12h às 18h ",
        "dia": "Sábado Domingo",
        "ingressos": ''
    },
    {
        "titulo": "Espaço RPG e Card Games",
        "subtitulo": "Com Arena PlayMaster's",
        "atividade": "Jovens",
        "local": "Sala de Expressão Corporal 1",
        "imagem": "",
        "descricao": `Um espaço para quem curte jogar ou deseja aprender RPG e Card Games, com orientação e narração de mestres de mesa.

 

        Programação de Sábado:  
         
        12h-14h: O que é RPG?; sistemas existentes, gêneros de jogo, recomendação de jogos, materiais e demais orientações
        
        14h-15h: Bate-papo RPG: tecnologia x analógico, vantagens, desvantagens, e ferramentas de jogo
        
        15h-16h30: Mesa de RPG (Espada, Feitiçaria & 2D6)
        
        16h30-18h: Mesa de RPG (Vamps – Glitterhearts)
        
         
        
        Programação de Domingo: 
        
        12h-14h: Oficina de criação de personagens (Tormenta e Apocalipse Zumbi)
        
        14h-15h: Oficina para Mestres Iniciantes: criando uma Dungeon
        
        15h-16h30: Mesa de RPG (Encontro Aleatório – Tormenta)
        
        16h30-18h: Mesa de RPG (Apocalipse Zumbi)`,
        "horario": "Das 12h às 18h ",
        "dia": "Sábado Domingo",
        "ingressos": 'Inscrições no local. Vagas Limitadas.'
    },
    {
        "titulo": "Área de Leitura",
        "subtitulo": "",
        "atividade": "JovensLiteraturavivência",
        "local": "Biblioteca",
        "imagem": "img/Área de Leitura.png",
        "descricao": `Venham conhecer nosso acervo de Mangás, quadrinhos e demais produções geek em um ambiente temático pensado para descansar e imergir no universo da literatura. `,
        "horario": "Das 11h às 18h ",
        "dia": "Sábado Domingo",
        "ingressos": 'Espaço limitado'
    },
    {
        "titulo": "Dragão dos Desejos",
        "subtitulo": "com Isaac Ruy",
        "atividade": "Ações para CidadaniaArtes VisuaisinstalaçãoJovens",
        "local": "Parque Aquático - Deck",
        "imagem": "",
        "descricao": `Este espaço foi inspirado na obra de Akira Toriyama e na lenda das sete Esferas do Dragão, de Dragon Ball Z.

        Cada esfera carrega consigo um poder capaz de realizar um desejo quando reunidas. Em sua trajetória, o autor teceu a saga épica de “Dragon Ball”, onde a coragem, a amizade e a busca pela superação ecoaram através de cada batalha.`,
        "horario": "Das 12h às 18h",
        "dia": "Sábado Domingo",
        "ingressos": ''
    },
    {
        "titulo": "Discotecagem",
        "subtitulo": "com Luizy Lebrusky",
        "atividade": "JovensMúsicaintervenção",
        "local": "Ginásio de Esportes",
        "imagem": "",
        "descricao": `Prepare-se para cantar, dançar e se divertir ao som de músicas como o pop, k-pop, animesongs e o melhor do funk brasileiro criando uma atmosfera de celebração e diversão para todas as idades.`,
        "horario": "Das 12h às 18h30",
        "dia": "Sábado Domingo",
        "ingressos": ''
    },
    {
        "titulo": "Desfile Cosplay",
        "subtitulo": "",
        "atividade": "JovensMúsicavivência",
        "local": "Ginásio de Esportes",
        "imagem": "",
        "descricao": `Vista seu melhor cosplay e junte-se a nós para uma tarde de diversão e celebração. Mal podemos esperar para ver suas criações e performances inspiradoras.

        Menores de idade deverão estar acompanhados pelos responsáveis legais para preenchimento de autorizações de imagem.`,
        "horario": "Das 17h30 às 18h30 ",
        "dia": "Sábado Domingo",
        "ingressos": 'Inscrições no local. Vagas Limitadas.'
    },
]

function addClassesFromSplit(element, string, separator = ' ') {
    var newText = fixTags(string, tags);
    const substrings = newText.split(separator);
    substrings.forEach((substring) => {
        element.classList.add(substring);
    });
}

function fixTags(text, tags){
    let result = '';

    for (const key in tags){
        if (text.includes(key)){
            result += tags[key] + " ";
        }
    }

    return result.trim();
}

function createCards(itens) {
    const cards = document.querySelector(".filterable_cards");
    if (!cards) {
        console.log("Erro");
    }
    else {
        itens.forEach((item) => {
            var card = document.createElement('div');
            card.classList.add("card");
            addClassesFromSplit(card, item.dia);
            addClassesFromSplit(card, item.local);
            addClassesFromSplit(card, item.atividade);
            // card.classList.add(item.dia);
            // card.classList.add(item.local);
            // card.classList.add(item.atividade);

            var cardImage = document.createElement('img');
            cardImage.src = item.imagem === "" ? "img/" + item.titulo + ".jpg" : item.imagem;

            var cardBody = document.createElement('div');
            cardBody.classList.add("card_body");

            var cardTitle = document.createElement('h6'); //h6
            cardTitle.classList.add("card_title");
            cardTitle.textContent = item.titulo;

            // var subtituloElement = document.createElement('h3');
            // subtituloElement.textContent = item.subtitulo;

            // var descricaoElement = document.createElement('div');
            // descricaoElement.innerHTML = item.descricao;

            var cardText = document.createElement('p');
            cardText.classList.add("card_text");
            cardText.textContent = item.horario;

            card.appendChild(cardImage);

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);

            card.appendChild(cardBody);

            cards.appendChild(card);
        });
    }
}

createCards(itens);

// str.charAt(0).toUpperCase() + str.slice(1)