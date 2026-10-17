export interface ProjectItem {
  id: string;
  name: string;
  category: 'laravel' | 'kotlin' | 'iot' | 'php' | 'other';
  categoryLabel: string;
  img: string;
  demoUrl?: string;
  githubUrl?: string;
  description: string;
  techStack: string[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools & IoT';
  level: number; // 0 - 100
  color: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  type: 'education' | 'experience';
  desc: string;
  badge: string;
}

export const resumeData = {
  profile: {
    name: "Novi Herlambang",
    handle: "NoviHe",
    role: "Full Stack Developer",
    status: "READY_FOR_COMMISSION",
    birthPlace: "Ciamis, Jawa Barat",
    birthDate: "26 September 2001",
    location: "Pangandaran, Jawa Barat, Indonesia",
    coordinates: "LAT: -7.683 // LNG: 108.647",
    email: "noovv9@gmail.com",
    phone: "+62 82X-XXXX-XXXX",
    avatar: "./assets/img/profil.png",
    cvFile: "./assets/file/Resume-Novi-Herlambang.pdf",
    shortBio: "Full Stack Developer Lulusan SMKN 1 PADAHERANG Jurusan Rekayasa Perangkat Lunak (Software Engineering). Berfokus pada arsitektur web modern dengan PHP/Laravel, JavaScript, Android native dengan Kotlin, serta prototipe IoT.",
    extendedBio: "Memiliki fondasi kuat dalam rekayasa perangkat lunak sejak masa kejuruan di SMKN 1 Padaherang, diperkaya dengan pengalaman industri di PT. CitCall Teknologi Indonesia dan berbagai proyek sistem informasi riil. Terbiasa membedah masalah kompleks, mendesain skema database yang efisien, dan menghadirkan user interface responsif bertenaga tinggi.",
    stats: [
      { label: "PROYEK SELESAI", value: "10+", icon: "Cpu" },
      { label: "TAHUN KODING", value: "6+", icon: "Code" },
      { label: "TEKNOLOGI INTI", value: "8+", icon: "Layers" },
      { label: "INTEGRITAS KODE", value: "100%", icon: "Shield" },
    ]
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/NoviHe/",
      icon: "Github",
      handle: "@NoviHe",
      color: "#00f0ff"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/novi-herlambang/",
      icon: "Linkedin",
      handle: "Novi Herlambang",
      color: "#0a66c2"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/herlambang.saja/",
      icon: "Instagram",
      handle: "@herlambang.saja",
      color: "#ff007f"
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/herlambang.kun.3/",
      icon: "Facebook",
      handle: "Novi Herlambang",
      color: "#1877f2"
    }
  ],

  skills: [
    {
      name: "HTML5",
      icon: "./assets/img/Skils/html.png",
      category: "Frontend",
      level: 95,
      color: "#e34f26"
    },
    {
      name: "CSS3",
      icon: "./assets/img/Skils/css.png",
      category: "Frontend",
      level: 90,
      color: "#1572b6"
    },
    {
      name: "JavaScript",
      icon: "./assets/img/Skils/js.png",
      category: "Frontend",
      level: 88,
      color: "#f7df1e"
    },
    {
      name: "jQuery",
      icon: "./assets/img/Skils/jquery.png",
      category: "Frontend",
      level: 85,
      color: "#0769ad"
    },
    {
      name: "Bootstrap",
      icon: "./assets/img/Skils/bootstrap.png",
      category: "Frontend",
      level: 92,
      color: "#7952b3"
    },
    {
      name: "PHP",
      icon: "./assets/img/Skils/php.png",
      category: "Backend",
      level: 90,
      color: "#777bb4"
    },
    {
      name: "Laravel",
      icon: "./assets/img/Skils/laravel.png",
      category: "Backend",
      level: 94,
      color: "#ff2d20"
    },
    {
      name: "Kotlin",
      icon: "./assets/img/Skils/kotlin.png",
      category: "Mobile",
      level: 80,
      color: "#7f52ff"
    }
  ] as SkillItem[],

  additionalTech: [
    "MySQL Database", "RESTful APIs", "Git & GitHub", "Tailwind CSS",
    "IoT / ESP8266 & Arduino", "Linux Server", "Postman", "Responsive Web Design"
  ],

  timeline: [
    {
      year: "2020 - Sekarang",
      title: "Freelance Full Stack Developer",
      organization: "Independent Dev",
      type: "experience",
      desc: "Mengembangkan aplikasi web kustom berbasis Laravel, aplikasi Android native, sistem informasi perusahaan, serta integrasi database untuk berbagai klien.",
      badge: "ACTIVE"
    },
    {
      year: "2019",
      title: "Praktek Kerja Lapangan (PKL)",
      organization: "PT. CitCall Teknologi Indonesia",
      type: "experience",
      desc: "Berperan dalam pengembangan dan pengujian software backend telekomunikasi, memperluas wawasan mengenai infrastruktur sistem skala industri.",
      badge: "INDUSTRY"
    },
    {
      year: "2019",
      title: "Team Pameran IoT (Smart Home System)",
      organization: "SMKN 1 Padaherang",
      type: "experience",
      desc: "Merancang arsitektur sistem Smart Home berbasis mikrokontroler, otomatisasi relay, dan monitoring sensor nirkabel untuk pameran teknologi sekolah.",
      badge: "INNOVATION"
    },
    {
      year: "2017 - 2020",
      title: "SMK Negeri 1 Padaherang",
      organization: "Jurusan Rekayasa Perangkat Lunak (RPL)",
      type: "education",
      desc: "Mempelajari algoritma pemrograman, rekayasa web (PHP & MySQL), OOP, pengembangan aplikasi desktop, dan arsitektur database relasional.",
      badge: "GRADUATED"
    },
    {
      year: "2014 - 2017",
      title: "SMP Negeri 2 Padaherang",
      organization: "Pendidikan Menengah Pertama",
      type: "education",
      desc: "Menempuh pendidikan dasar menengah dan mulai mengeksplorasi minat dalam dunia komputer dan teknologi informasi.",
      badge: "COMPLETED"
    },
    {
      year: "2008 - 2014",
      title: "SD Negeri 2 Ciganjeng",
      organization: "Pendidikan Dasar",
      type: "education",
      desc: "Menyelesaikan pendidikan dasar di Ciganjeng, Padaherang, Pangandaran.",
      badge: "COMPLETED"
    }
  ] as TimelineItem[],

  projects: [
    {
      id: "pengaduan-app",
      name: "Laravel Pengaduan App",
      category: "laravel",
      categoryLabel: "Laravel / Web App",
      img: "./assets/img/portfolio/pengaduan.PNG",
      demoUrl: "http://pengaduan.novimovie.xyz/",
      githubUrl: "https://github.com/NoviHe/CiganjengDamai-pengaduan-app",
      description: "Aplikasi pengaduan masyarakat 'Ciganjeng Damai' berbasis Laravel dengan otentikasi multi-role (Masyarakat, Petugas, Admin), tracking status laporan real-time, dan ekspor rekapitulasi data.",
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade"],
      featured: true
    },
    {
      id: "cexcanger-app",
      name: "Kotlin CEXCANGER App",
      category: "kotlin",
      categoryLabel: "Android / Kotlin",
      img: "./assets/img/portfolio/android-kotlin_11zon.png",
      demoUrl: "",
      githubUrl: "",
      description: "Aplikasi mobile konversi nilai tukar mata uang asing secara instan dengan sinkronisasi kurs pasar keuangan terkini, interface modern dan performa native gegas.",
      techStack: ["Kotlin", "Android SDK", "REST API", "XML UI"],
      featured: true
    },
    {
      id: "laravel-sida",
      name: "Laravel Sistem Informasi Data Asset",
      category: "laravel",
      categoryLabel: "Laravel / Enterprise",
      img: "./assets/img/portfolio/laravel-sida.PNG",
      demoUrl: "",
      githubUrl: "",
      description: "Sistem Informasi Data Asset (SIDA) untuk pencatatan, inventarisasi, kategorisasi, dan monitoring depresiasi aset perusahaan berbasis web.",
      techStack: ["Laravel", "PHP", "MySQL", "DataTables", "Bootstrap"],
      featured: true
    },
    {
      id: "lelang-ikan",
      name: "PHP Lelang Ikan (Dataminer Algoritma Apriori)",
      category: "php",
      categoryLabel: "PHP / Data Mining",
      img: "./assets/img/portfolio/lelang_11zon.png",
      demoUrl: "http://lelang-ikan.novimovie.xyz/",
      githubUrl: "",
      description: "Sistem lelang perikanan terintegrasi dengan algoritma Data Mining Apriori untuk menganalisis pola asosiasi transaksi lelang hasil tangkapan nelayan.",
      techStack: ["PHP Native", "Apriori Algorithm", "MySQL", "ChartJS"],
      featured: true
    },
    {
      id: "penggajian-app",
      name: "PHP Penggajian App",
      category: "php",
      categoryLabel: "PHP / Management",
      img: "./assets/img/portfolio/penggajian.PNG",
      demoUrl: "http://penggajian.novimovie.xyz/",
      githubUrl: "",
      description: "Sistem informasi penggajian karyawan lengkap dengan penghitungan tunjangan, potongan absensi, generate slip gaji digital, dan laporan bulanan.",
      techStack: ["PHP", "MySQL", "Bootstrap", "FPDF"],
      featured: false
    },
    {
      id: "smarthome-iot",
      name: "IoT Smart Home Project",
      category: "iot",
      categoryLabel: "IoT / Hardware",
      img: "./assets/img/portfolio/smarthome.jpg",
      demoUrl: "",
      githubUrl: "",
      description: "Prototipe sistem otomasi rumah pintar (Smart Home) dengan kontrol perangkat elektronik nirkabel, sensor gerak & suhu via mikrokontroler dan antarmuka web.",
      techStack: ["Arduino / ESP8266", "C++", "Sensors", "WebSockets"],
      featured: true
    },
    {
      id: "laravel-spk",
      name: "Laravel Sistem Pendukung Keputusan (SPK)",
      category: "laravel",
      categoryLabel: "Laravel / Decision Support",
      img: "./assets/img/portfolio/spk.PNG",
      demoUrl: "",
      githubUrl: "",
      description: "Aplikasi Decision Support System (SPK) dengan kalkulasi metode pembobotan multi-kriteria untuk merekomendasikan keputusan objektif terbaik.",
      techStack: ["Laravel", "PHP", "AHP / SAW Algorithm", "Bootstrap"],
      featured: false
    },
    {
      id: "t-hypestor",
      name: "Develop Project T-Hypestor",
      category: "laravel",
      categoryLabel: "E-Commerce / Web",
      img: "./assets/img/portfolio/t-store.jpg",
      demoUrl: "",
      githubUrl: "",
      description: "Pengembangan web platform katalog produk apparel & streetwear eksklusif dengan manajemen inventaris dinamis dan keranjang pesanan.",
      techStack: ["PHP", "JavaScript", "CSS3", "MySQL"],
      featured: false
    },
    {
      id: "github-user-app",
      name: "Kotlin Github User App",
      category: "kotlin",
      categoryLabel: "Android / Kotlin",
      img: "./assets/img/portfolio/github-user.png",
      demoUrl: "",
      githubUrl: "https://github.com/NoviHe/githubUserApp_kotlin",
      description: "Aplikasi Android native untuk pencarian akun GitHub, navigasi repositori, followers, dan profil pengguna dengan GitHub Public REST API & ViewModel.",
      techStack: ["Kotlin", "GitHub API", "Retrofit", "Glide", "Coroutines"],
      featured: true
    },
    {
      id: "tbl-cargo",
      name: "Develop Project TBL-Cargo",
      category: "laravel",
      categoryLabel: "Logistics / Web",
      img: "./assets/img/portfolio/tbl.png",
      demoUrl: "",
      githubUrl: "",
      description: "Sistem pelacakan manifest kargo dan ekspedisi logistik untuk pemantauan status pengiriman barang antar wilayah secara terpusat.",
      techStack: ["Laravel", "PHP", "MySQL", "Admin Dashboard"],
      featured: false
    }
  ] as ProjectItem[]
};
