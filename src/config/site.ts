// Configuración del sitio — FlujoTV Guías y Comunidad
export const site = {
  domain: 'miflujotvplus.com',
  canonical: 'https://miflujotvplus.com',
  whatsappNumber: '51914326729',
  url: 'https://miflujotvplus.com',
  email: 'soporte@flujooficial.com',

  download: {
    firestickCode: '3912363',
    mobileApkHref: 'https://github.com/Cristian1828/apk-flujoTV/releases/download/v1.0/flujo-premium.apk',
  },

  // Videos tutoriales Wistia
  videos: {
    googleTV: {
      hombre: 'xw1xedf4qg',
      mujer: 'jfsexj7t5g',
    },
    androidTV: {
      hombre: 'rng7d90adc',
      mujer: 'hq91iqqdmk',
    },
  },

  brand: {
    name: 'FlujoTV+',
    shortName: 'FlujoTV+',
    description: 'Centro oficial de guías, soporte técnico y descargas de FlujoTV+. Aprende a instalar en Fire Stick, TV Box, Google TV, Chromecast y Android. Más de 3,000 canales en vivo, películas y series en Full HD y 4K con tecnología Anti-Freeze.',
  },

  pricing: {
    currency: '$',
    currencyCode: 'USD',
    plans: [
      {
        id: '1m',
        name: 'Mensual',
        duration: '1 Mes',
        price: 9,
        highlight: false,
        label: 'IDEAL PARA COMENZAR',
        paypalUrl: 'https://www.paypal.com/ncp/payment/EBMGFA4S6ALWN',
        features: ['+3,000 canales en vivo', 'Calidad Full HD', 'Hasta 3 pantallas', 'Soporte por WhatsApp'],
      },
      {
        id: '3m',
        name: 'Trimestral',
        duration: '3 Meses',
        price: 27,
        highlight: true,
        label: 'MÁS ELEGIDO',
        paypalUrl: 'https://www.paypal.com/ncp/payment/DRDZ57GB83GAA',
        features: ['+3,000 canales en vivo', 'Calidad Full HD y 4K', 'Hasta 3 pantallas', 'Soporte prioritario'],
      },
      {
        id: '6m',
        name: 'Semestral',
        duration: '6 + 1 Mes Gratis',
        price: 49,
        highlight: false,
        label: '+1 MES DE REGALO',
        paypalUrl: 'https://www.paypal.com/ncp/payment/PYVG9EZ448NZA',
        features: ['+3,000 canales en vivo', 'Calidad Full HD y 4K', 'Hasta 3 pantallas', 'Soporte prioritario', '7 meses en total'],
      },
      {
        id: '12m',
        name: 'Anual',
        duration: '12 + 2 Meses Gratis',
        price: 95,
        highlight: false,
        label: 'MÁXIMO AHORRO',
        paypalUrl: 'https://www.paypal.com/ncp/payment/7AMC58FVAEFLW',
        features: ['+3,000 canales en vivo', 'Calidad Full HD y 4K', 'Hasta 3 pantallas', 'Soporte VIP 24/7', '14 meses en total'],
      },
    ],
  },

  seo: {
    title: 'Flujo TV Oficial | Guía de Instalación, Soporte Técnico y Descarga APK — Fire Stick, TV Box, Google TV, Android',
    description: 'Centro oficial de Flujo TV: guías paso a paso para instalar en Fire Stick, TV Box, Google TV, Chromecast y Android. Soporte técnico 24/7 por WhatsApp. Descarga APK actualizado y código Downloader 3912363. +3,000 canales en vivo, películas y series 4K.',
    keywords: [
      // --- 1. GUÍAS E INSTALACIÓN (prioridad máxima) ---
      'guia instalacion flujo tv', 'como instalar flujo tv',
      'como instalar flujo tv fire stick', 'instalar flujo tv en fire stick',
      'como instalar flujo tv google tv', 'instalar flujo tv tv box',
      'como instalar flujo tv en tv box', 'como instalar flujo tv en celular',
      'como instalar flujo tv en xiaomi', 'tutorial flujo tv',
      'tutorial instalar flujo tv fire stick', 'tutorial flujo tv google tv',
      'guia flujo tv paso a paso', 'configurar flujo tv',
      'como instalar iptv en fire stick', 'como instalar app en fire stick',
      'como descargar app en tv box', 'como instalar apk en google tv',
      'como instalar apk en fire stick', 'instalar app en chromecast',
      'como instalar apk en tv box android',

      // --- 2. SOPORTE TÉCNICO (segunda prioridad) ---
      'soporte flujo tv', 'soporte tecnico flujo tv', 'ayuda flujo tv',
      'soporte flujo tv whatsapp', 'ayuda instalacion flujo tv',
      'flujo tv no funciona', 'flujo tv se traba', 'flujo tv no carga',
      'problemas flujo tv', 'flujo tv error', 'solucionar flujo tv',
      'como funciona flujo tv', 'flujo tv soporte 24 horas',

      // --- 3. APK / DESCARGA ---
      'flujo tv apk', 'descargar flujo tv apk', 'flujo tv apk descargar',
      'flujo tv apk ultima version', 'flujo tv apk actualizado',
      'flujo tv apk 2026', 'flujo tv apk download', 'flujo tv apk gratis',
      'flujo tv apk android', 'flujo tv apk fire stick', 'flujo tv apk tv box',
      'flujo tv codigo downloader', 'flujo tv apk codigo downloader',
      'codigo downloader flujo tv', 'downloader codigo 3912363',
      'descargar flujo tv', 'download flujo tv',

      // --- 4. MARCA ---
      'flujo tv', 'flujotv', 'flujo tv pro', 'flujo tv premium', 'flujo tv oficial',
      'flujo tv app', 'flujo television', 'flujo streaming',
      'flujo tv 2025', 'flujo tv 2026',
      'flujo tv codigo', 'flujo tv login',
      'flujotv logo', 'logo flujotv', 'flujo tv bio',

      // --- 5. DISPOSITIVOS ---
      'flujo tv fire stick', 'flujo tv fire stick codigo',
      'flujo tv amazon fire stick', 'flujo tv fire tv',
      'flujo tv tv box', 'flujo tv tv box android',
      'flujo tv google tv', 'flujo tv chromecast',
      'flujo tv chromecast google tv', 'flujo tv android tv',
      'flujo tv celular', 'flujo tv celular android', 'flujo tv tablet',
      'flujo tv xiaomi', 'flujo tv xiaomi mi stick', 'flujo tv mi box',

      // --- 6. LONG-TAIL BÚSQUEDAS REALES ---
      'canales latinos en vivo fire stick', 'ver tv latina en fire stick',
      'app para ver canales latinos', 'mejor app tv en vivo',
      'app para ver tv en fire stick', 'app para ver canales',
      'app para ver futbol en vivo', 'como ver tv en celular',
      'tv box streaming', 'fire stick streaming', 'google tv streaming',
      'chromecast streaming', 'android tv streaming',

      // --- 7. CONTENIDO ---
      'canales en vivo', 'tv en vivo', 'television en vivo',
      'ver canales en vivo', 'streaming canales en vivo',
      'peliculas 4k streaming', 'deportes en vivo', 'futbol en vivo',
      'ver futbol en vivo', 'streaming deportes', 'ver tv online',

      // --- 8. STREAMING / IPTV ---
      'streaming premium', 'streaming latino', 'streaming en español',
      'mejor streaming latino', 'iptv latino', 'iptv premium',
      'mejor iptv', 'servicio iptv', 'flujo iptv',
      'streaming 4k', 'streaming sin cortes',
      'alternativa a cable', 'tv por internet', 'television por internet',

      // --- 9. PLANES / VENTAS (última prioridad) ---
      'plan flujo tv', 'planes flujo tv', 'precio flujo tv', 'cuanto cuesta flujo tv',
      'flujo tv precio mensual', 'flujo tv precio anual',
      'activar flujo tv', 'activacion flujo tv', 'comprar flujo tv',
      'suscripcion flujo tv',
    ],
    ogImage: '/images/hero-streaming.webp',
    twitterHandle: '@flujooficial',
  },

  // Target countries for SEO
  targetCountries: [
    { code: 'PE', lang: 'es-PE', name: 'Perú' },
    { code: 'CO', lang: 'es-CO', name: 'Colombia' },
    { code: 'CL', lang: 'es-CL', name: 'Chile' },
    { code: 'MX', lang: 'es-MX', name: 'México' },
    { code: 'EC', lang: 'es-EC', name: 'Ecuador' },
    { code: 'AR', lang: 'es-AR', name: 'Argentina' },
    { code: 'PY', lang: 'es-PY', name: 'Paraguay' },
    { code: 'BO', lang: 'es-BO', name: 'Bolivia' },
    { code: 'CR', lang: 'es-CR', name: 'Costa Rica' },
    { code: 'GT', lang: 'es-GT', name: 'Guatemala' },
    { code: 'HN', lang: 'es-HN', name: 'Honduras' },
    { code: 'NI', lang: 'es-NI', name: 'Nicaragua' },
    { code: 'PA', lang: 'es-PA', name: 'Panamá' },
    { code: 'SV', lang: 'es-SV', name: 'El Salvador' },
    { code: 'DO', lang: 'es-DO', name: 'República Dominicana' },
    { code: 'UY', lang: 'es-UY', name: 'Uruguay' },
    { code: 'VE', lang: 'es-VE', name: 'Venezuela' },
    { code: 'US', lang: 'es-US', name: 'Estados Unidos' },
    { code: 'ES', lang: 'es-ES', name: 'España' },
  ],

  testimonials: [
    { id: 1, name: 'Carlos Mendoza', location: 'Ciudad de México', rating: 5, comment: 'La guía de instalación para Fire Stick fue clarísima. En 5 minutos ya tenía todo funcionando con más de 3000 canales.' },
    { id: 2, name: 'Ana Lucía Torres', location: 'Bogotá, Colombia', rating: 5, comment: 'El soporte por WhatsApp es increíble. Me ayudaron paso a paso y ahora toda mi familia disfruta del servicio en 3 pantallas.' },
    { id: 3, name: 'Roberto Salazar', location: 'Lima, Perú', rating: 5, comment: 'Probé muchas opciones de streaming pero ninguna con esta estabilidad. Cero cortes durante los partidos de fútbol en 4K.' },
    { id: 4, name: 'María Fernanda Ríos', location: 'Santiago, Chile', rating: 5, comment: 'Excelente servicio. La tecnología Anti-Freeze funciona de verdad. Lo recomiendo para deportes y películas sin pausas.' },
    { id: 5, name: 'Luis Herrera', location: 'Quito, Ecuador', rating: 5, comment: 'Instalé en mi TV Box en menos de 10 minutos gracias a las guías del sitio. Calidad excepcional y precio justo.' },
    { id: 6, name: 'Paola Gutiérrez', location: 'Buenos Aires, Argentina', rating: 5, comment: 'Lo que más valoro es que la activación fue inmediata. Pagué y en minutos ya estaba viendo canales en vivo. Muy profesional.' },
  ],

  installGuides: [
    {
      id: 'firestick',
      device: 'Amazon Fire Stick',
      icon: '',
      image: '/images/firestick-setup.webp',
      steps: [
        'Enciende tu Fire Stick y ve a Configuración → Mi Fire TV → Opciones para desarrolladores → Instalar apps desconocidas → Activar',
        'Desde la pantalla principal, busca la app "Downloader" en la tienda de Amazon y descárgala',
        'Abre Downloader e ingresa el código: 3912363',
        'Se descargará e instalará la app automáticamente. Ábrela y activa con tus credenciales',
        'Si necesitas ayuda con la activación, contáctanos por WhatsApp',
      ],
    },
    {
      id: 'tvbox',
      device: 'TV Box Android',
      icon: '',
      image: '/images/tvbox-setup.webp',
      steps: [
        'Conecta tu TV Box a tu televisor y asegúrate de tener conexión a internet',
        'Abre el navegador web integrado de tu TV Box',
        'Descarga el APK directamente desde nuestro enlace oficial',
        'Abre el archivo descargado e instala la aplicación',
        'Abre Flujo TV e ingresa tus credenciales de activación',
      ],
    },
    {
      id: 'googletv',
      device: 'Google TV / Chromecast',
      icon: '',
      image: '/images/googletv-setup.webp',
      steps: [
        'Desde tu Google TV, ve a Configuración → Seguridad y restricciones → Fuentes desconocidas → Activar',
        'Descarga la app "Downloader" desde Google Play Store',
        'Abre Downloader e ingresa el código: 3912363',
        'El archivo APK se descargará automáticamente. Instálalo cuando se solicite',
        'Abre Flujo TV e ingresa tus datos de activación',
      ],
    },
    {
      id: 'android',
      device: 'Celular / Tablet Android',
      icon: '',
      image: '/images/mobile-streaming.webp',
      steps: [
        'Desde tu celular o tablet, abre el navegador y accede a nuestro enlace de descarga directa',
        'Descarga el archivo APK oficial de Flujo TV',
        'Si aparece un aviso de seguridad, ve a Configuración → Permitir instalación de fuentes desconocidas',
        'Instala la app y ábrela',
        'Ingresa tus credenciales de activación y disfruta',
      ],
    },
    {
      id: 'xiaomi',
      device: 'Xiaomi Mi Stick',
      icon: '',
      image: '/images/devices-compatible.webp',
      steps: [
        'En tu Xiaomi Stick, ve a Configuración → Seguridad → Fuentes desconocidas → Activar',
        'Descarga la app "Downloader" desde Google Play Store en tu dispositivo',
        'Abre Downloader e ingresa el código: 3912363',
        'La aplicación se descargará e instalará automáticamente',
        'Abre Flujo TV, activa con tus credenciales y listo',
      ],
    },
  ],

  compatibleDevices: [
    { icon: 'firestick', label: 'Amazon Fire Stick', link: '/instalar/fire-stick' },
    { icon: 'tvbox', label: 'TV Box Android', link: '/instalar/tv-box' },
    { icon: 'googletv', label: 'Google TV / Chromecast', link: '/instalar/google-tv' },
    { icon: 'android', label: 'Celular / Tablet Android', link: '/instalar/android' },
    { icon: 'xiaomi', label: 'Xiaomi Mi Stick', link: '/instalar/xiaomi' },
  ],

  faq: [
    {
      question: '¿Qué es Flujo TV y qué incluye?',
      answer: 'Flujo TV es una plataforma de streaming premium que te da acceso a más de 3,000 canales en vivo, películas de estreno, series y contenido deportivo en calidad Full HD y 4K. Funciona en dispositivos Android como Fire Stick, TV Box, Google TV, Chromecast, celulares y tablets.',
    },
    {
      question: '¿En qué dispositivos puedo instalar Flujo TV?',
      answer: 'Flujo TV es compatible con cualquier dispositivo que tenga sistema Android: Amazon Fire Stick, TV Box, Google TV (Chromecast), Xiaomi Mi Stick, celulares Android y tablets Android. No es compatible con iOS (iPhone/iPad), Roku ni Smart TVs Samsung/LG de forma nativa, pero puedes conectar un TV Box o Fire Stick a estos televisores.',
    },
    {
      question: '¿Cómo descargo la app de Flujo TV?',
      answer: 'Para Fire Stick, Google TV y Xiaomi Stick: usa la app Downloader con el código 3912363. Para celulares y tablets Android: descarga el APK directamente desde nuestro enlace oficial. Para TV Box: descarga desde el navegador integrado. Consulta nuestras guías detalladas más arriba.',
    },
    {
      question: '¿Cuántas pantallas puedo usar al mismo tiempo?',
      answer: 'Tu suscripción permite hasta 3 pantallas simultáneas. Esto significa que tres personas de tu hogar pueden ver contenido diferente al mismo tiempo, cada uno desde su propio dispositivo.',
    },
    {
      question: '¿Qué velocidad de internet necesito?',
      answer: 'Recomendamos un mínimo de 10 Mbps para contenido en Full HD y de 20 a 30 Mbps de fibra óptica para disfrutar del contenido 4K sin interrupciones. La tecnología Anti-Freeze optimiza la señal para minimizar cortes.',
    },
    {
      question: '¿Tienen prueba gratis?',
      answer: 'No ofrecemos pruebas gratuitas. Garantizamos nuestro servicio con soporte técnico dedicado: te acompañamos desde la instalación hasta que todo funcione perfectamente. Tu satisfacción está asegurada con nuestro equipo de soporte 24/7.',
    },
    {
      question: '¿Cómo realizo el pago y cuánto tarda la activación?',
      answer: 'El proceso de pago se gestiona directamente con nuestro equipo de soporte por WhatsApp. Una vez confirmado el pago, la activación es inmediata: en pocos minutos estarás disfrutando de todo el contenido.',
    },
    {
      question: '¿Funciona en Smart TV Samsung o LG?',
      answer: 'Flujo TV no se instala directamente en el sistema nativo de televisores Samsung (Tizen) o LG (WebOS). Sin embargo, puedes conectar un dispositivo externo como TV Box, Amazon Fire Stick o Chromecast con Google TV a tu televisor y disfrutar del servicio sin problema.',
    },
    {
      question: '¿Cómo actualizo la app de Flujo TV?',
      answer: 'Para actualizar la app, simplemente repite el proceso de instalación con el código Downloader o descargando el APK más reciente. La nueva versión se instalará sobre la anterior y tus configuraciones se mantendrán. Te notificaremos por WhatsApp cuando haya actualizaciones disponibles.',
    },
    {
      question: '¿Qué hago si la app se congela durante un partido de fútbol?',
      answer: 'Primero, cambia la fuente del canal usando el botón de opciones del reproductor. También puedes seleccionar la calidad "Auto" para que se adapte a tu velocidad de internet. Si el problema persiste, reinicia la app y verifica que tu conexión sea estable (mínimo 10 Mbps). Como último recurso, contacta a soporte por WhatsApp.',
    },
    {
      question: '¿Puedo usar mi cuenta en más de un dispositivo?',
      answer: 'Sí, tu suscripción permite hasta 3 conexiones simultáneas. Puedes tener la app instalada en todos los dispositivos que quieras, pero solo 3 pueden estar transmitiendo al mismo tiempo. Si necesitas más pantallas, consulta nuestros planes familiares especiales.',
    },
    {
      question: '¿Cómo funciona la guía de programación (EPG)?',
      answer: 'Flujo TV incluye una Guía Electrónica de Programación (EPG) que te permite ver la programación completa de cada canal. Accede desde el menú principal y podrás navegar por horarios, ver qué programas están al aire y programar recordatorios para tus contenidos favoritos.',
    },
    {
      question: '¿Qué velocidad de internet necesito para ver contenido en 4K?',
      answer: 'Para contenido en 4K recomendamos un mínimo de 25 Mbps de fibra óptica. Para Full HD, 10 Mbps es suficiente. Nuestra tecnología Anti-Freeze optimiza la transmisión automáticamente según tu velocidad de conexión. Siempre recomendamos usar conexión por cable Ethernet en lugar de WiFi para la mejor experiencia.',
    },
    {
      question: '¿Es seguro descargar el APK de Flujo TV?',
      answer: 'Sí, todas nuestras descargas son oficiales y verificadas. El APK que ofrecemos está libre de virus y malware. Solo descarga desde los enlaces oficiales en nuestro sitio web. Nunca descargues de fuentes de terceros no autorizadas para garantizar la seguridad de tu dispositivo.',
    },
  ],
} as const;

// Helper: canonical URL
export const canonicalUrl = (path: string = ''): string => {
  const cleanPath = path.replace(/^\//, '').replace(/\/$/, '');
  return cleanPath ? `${site.canonical}/${cleanPath}` : site.canonical;
};

// Helper: WhatsApp links for purchases
export const getWhatsappLink = (plan: typeof site.pricing.plans[0]): string => {
  const messages = {
    '1m': `Hola, me interesa activar Flujo TV por 1 mes ($${plan.price} USD). ¿Podrían ayudarme con la activación?`,
    '3m': `Hola, quiero contratar Flujo TV por 3 meses ($${plan.price} USD). ¿Cómo procedo con la activación?`,
    '6m': `Hola, me interesa el plan de 6 meses + 1 GRATIS de Flujo TV ($${plan.price} USD). ¿Está disponible?`,
    '12m': `Hola, quiero la oferta anual de Flujo TV: 12 + 2 meses GRATIS por $${plan.price} USD. ¿Cómo procedo?`,
  };

  const message = messages[plan.id as keyof typeof messages] ||
    '¡Hola! Me interesa contratar Flujo TV. ¿Podrían darme más información?';

  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

// Helper: WhatsApp support link
export const getSupportWhatsappLink = (): string => {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent('Hola, necesito ayuda con la instalación de Flujo TV. ¿Podrían asistirme?')}`;
};
