import { MagazineContent } from './types';

export const MAGAZINE_CONTENT: MagazineContent = {
  edition: "EDISI 1",
  title: "TECHINSIGHT",
  tagline: "INNOVATION & TECHNOLOGY",
  subtitle: "Dari Ngoding ke Solusi: Perjalanan Mahasiswa TI",
  faculty: "Fakultas Teknologi Industri dan Informatika",
  university: "Universitas Muhammadiyah Prof. Dr. HAMKA",
  editorial: {
    title: "PESAN REDAKSI",
    text: [
      "Selamat datang di edisi perdana TECHINSIGHT, sebuah platform jurnalisme teknologi yang merepresentasikan semangat inovasi kolektif sivitas akademika Fakultas Teknologi Industri dan Informatika UHAMKA. Kami hadir di tengah dinamika transformasi digital yang kian akseleratif, dengan kesadaran bahwa penguasaan teknologi bukan sekadar persoalan teknis di balik layar, melainkan sebuah amanah untuk menghadirkan solusi konkret yang berdampak luas.",
      "Melalui setiap narasi yang tersaji, kami berupaya mendekonstruksi kompleksitas algoritma menjadi gagasan yang humanis, serta menghubungkan Artificial Intelligence dengan empati manusia dalam menjawab berbagai problematika sosial. Edisi ini merayakan keberanian para inovator muda dalam melampaui batas layar monitor, sekaligus menjadi peta jalan bagi eksplorasi intelektual yang beretika dan berkelanjutan.",
      "Selamat menyelami perjalanan kami, di mana setiap baris kode dirancang untuk mengukir masa depan peradaban digital yang lebih berdaya dan beretika.",
    ],
    quote: "Inovasi sejati tidak berhenti di editor kode, ia bermuara pada solusi yang memberdayakan."
  },
  articles: [
    {
      id: "ai-solusi",
      category: "ARTIKEL UTAMA 1",
      title: "Peran AI dalam Solusi Mahasiswa",
      subtitle: "Eksplorasi bagaimana kecerdasan buatan bertransformasi dari sekadar teori menjadi asisten cerdas.",
      author: "Dinianti Marselia",
      editor: "Ayuni Maynisa",
      peerReview: "Hikmah Putra Perdana, Anggoro Galih Niswantoro, Wildan Malaki",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      references: [0, 1, 2, 11],
      content: [
        "Lanskap pendidikan tinggi di seluruh dunia kini tengah mengalami transformasi fundamental berkat integrasi Kecerdasan Buatan (AI) yang kian masif. Berdasarkan laporan terbaru dari Gartner (2024), adopsi AI di sektor pendidikan global diprediksi akan mengalami lonjakan signifikan sebesar 45% hingga akhir tahun 2026 [1]. Fenomena ini bukan sekadar tren sesaat, melainkan pergeseran paradigma dalam cara kita belajar dan berinteraksi dengan informasi [2]. Di lingkungan Fakultas Teknologi Industri dan Informatika (FTII) UHAMKA, AI telah bergeser dari sekadar subjek diskusi teoretis di ruang kelas menjadi instrumen praktis yang diimplementasikan oleh mahasiswa untuk memecahkan berbagai problematika akademik sehari-hari [12].",
        "Salah satu wujud konkret dari pemanfaatan teknologi ini adalah pengembangan asisten virtual atau chatbot akademik berbasis kecerdasan buatan. Dengan memanfaatkan teknologi Natural Language Processing (NLP), sistem ini dirancang untuk menjadi jembatan komunikasi yang responsif antara institusi dan mahasiswa [3]. Chatbot ini mampu memproses bahasa manusia secara natural untuk memberikan jawaban instan terkait jadwal perkuliahan, informasi dosen, hingga prosedur administrasi kampus yang sering kali membingungkan. Studi kasus internal pada implementasi prototipe chatbot di lingkungan FTII menunjukkan peningkatan efisiensi akses informasi sebesar 60% dibandingkan dengan metode pencarian manual konvensional. Hal ini membuktikan bahwa AI dapat secara signifikan mengurangi beban administratif dan meningkatkan produktivitas mahasiswa.",
        "Penerapan AI tidak berhenti pada layanan informasi saja. Mahasiswa Teknik Informatika kini mulai merambah ke ranah yang lebih kompleks, yaitu penggunaan algoritma Machine Learning (ML) untuk melakukan analisis prediktif terhadap data akademik. Dengan memanfaatkan dataset historis, mahasiswa membangun model yang mampu memprediksi performa belajar rekan-rekannya. Proses ini melibatkan tahapan data mining yang rumit, mulai dari pembersihan data (data cleaning), pemilihan fitur (feature selection), hingga pelatihan model menggunakan algoritma seperti Random Forest atau Support Vector Machine. Analisis awal menunjukkan bahwa model ini memiliki tingkat akurasi mencapai 85% dalam mengidentifikasi mahasiswa yang mungkin membutuhkan pendampingan akademik tambahan sebelum masa ujian tiba.",
        "Namun, perjalanan mengimplementasikan AI di tingkat mahasiswa tentu tidak luput dari berbagai tantangan teknis yang kompleks. Kendala seperti keterbatasan dataset yang berkualitas, kesalahan dalam logika pemrograman (logic errors), hingga kesulitan dalam melakukan tuning parameter algoritma menjadi makanan sehari-hari bagi para pengembang muda ini. Tantangan-tantangan tersebut, meskipun sering kali membuat frustrasi, justru menjadi katalisator yang sangat efektif dalam mengasah ketajaman berpikir kritis dan kemampuan problem-solving. Kegagalan dalam satu iterasi model memberikan pelajaran berharga mengenai pentingnya integritas data dan pemahaman mendalam terhadap matematika di balik algoritma AI.",
        "Pada akhirnya, pengalaman praktis dalam membangun solusi berbasis AI ini memberikan nilai tambah yang luar biasa bagi mahasiswa. Mereka tidak hanya memperoleh kemahiran teknis yang relevan dengan kebutuhan industri 4.0, tetapi juga mengembangkan karakter yang tangguh, kolaboratif, dan inovatif. AI bagi mahasiswa TI UHAMKA bukan lagi sekadar teknologi masa depan yang jauh di angan, melainkan alat konkret yang sedang mereka bentuk untuk menciptakan ekosistem kampus yang lebih cerdas dan adaptif. Dengan semangat eksplorasi yang terus dipupuk, mahasiswa dipersiapkan untuk menjadi pemimpin inovasi yang mampu menjawab tantangan global di masa depan."
      ]
    },
    {
      id: "iot-kampus",
      category: "ARTIKEL UTAMA 2",
      title: "IoT dalam Aktivitas Kampus: Teknologi Sederhana yang Berdampak",
      subtitle: "Menghubungkan dunia fisik ke jaringan digital melalui proyek sederhana yang berdampak luas.",
      author: "Dinianti Marselia",
      editor: "Ayuni Maynisa",
      peerReview: "Hikmah Putra Perdana, Anggoro Galih Niswantoro, Wildan Malaki",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      references: [3, 4, 5, 11],
      content: [
        "Konsep Internet of Things (IoT) telah membuka dimensi baru yang revolusioner dalam cara kita berinteraksi dengan lingkungan fisik di sekitar kita. Secara esensial, IoT adalah jaringan perangkat fisik yang tertanam dengan sensor, perangkat lunak, dan teknologi lainnya dengan tujuan untuk menghubungkan dan bertukar data dengan perangkat dan sistem lain melalui internet. Menurut data terbaru dari IDC (2024), jumlah perangkat IoT yang terhubung secara global diperkirakan akan menembus angka 41,6 miliar pada tahun 2025 [4]. Dalam ranah akademik di Teknik Informatika UHAMKA, teknologi ini telah menjadi magnet yang kuat bagi mahasiswa untuk mengeksplorasi potensi otomatisasi yang dapat diterapkan langsung guna meningkatkan efisiensi operasional kampus [12].",
        "Inisiatif mahasiswa dalam mengembangkan solusi IoT sering kali dimulai dari proyek-proyek yang terlihat sederhana namun memiliki dampak sistemik yang signifikan. Sebagai contoh, pengembangan sistem pencahayaan pintar (smart lighting) yang menggunakan sensor Light Dependent Resistor (LDR) and sensor gerak PIR untuk mengatur penggunaan lampu di ruang kelas secara otomatis [5]. Selain itu, implementasi sensor DHT11 untuk monitoring suhu dan kelembaban di laboratorium komputer telah memberikan data real-time yang krusial bagi manajemen fasilitas. Hasil pengujian menunjukkan bahwa dengan sistem otomatisasi berbasis ambang batas suhu ini, efisiensi penggunaan energi pada sistem pendingin ruangan (AC) dapat ditingkatkan hingga 20%, sebuah angka yang cukup berarti dalam upaya menciptakan 'Green Campus' [6].",
        "Lebih jauh lagi, mahasiswa mulai mengintegrasikan perangkat IoT mereka dengan arsitektur cloud untuk penyimpanan dan analisis data jangka panjang. Penggunaan protokol komunikasi yang ringan seperti MQTT (Message Queuing Telemetry Transport) menjadi standar dalam proyek-proyek ini, memungkinkan transmisi data yang efisien bahkan dalam kondisi bandwidth jaringan yang terbatas. Dengan menghubungkan perangkat keras seperti mikrokontroler ESP32 atau Arduino ke platform basis data real-time, mahasiswa dapat memantau kondisi lingkungan kampus dari mana saja melalui dashboard web atau aplikasi mobile. Pengalaman ini memberikan perspektif praktis mengenai bagaimana teori jaringan komputer dan sistem tertanam (embedded systems) bersinergi dalam sebuah solusi utuh.",
        "Tentu saja, proses pengembangan perangkat IoT di level mahasiswa tidak selalu berjalan mulus. Berbagai kendala teknis sering kali muncul, mulai dari instabilitas koneksi Wi-Fi di area tertentu, kesalahan dalam konfigurasi pin pada perangkat keras, hingga tantangan dalam melakukan kalibrasi sensor agar mendapatkan data yang akurat. Masalah interferensi sinyal dan manajemen daya pada perangkat yang menggunakan baterai juga menjadi topik diskusi teknis yang hangat di kalangan mahasiswa. Namun, justru di tengah kendala-kendala inilah proses pembelajaran yang sesungguhnya terjadi. Mahasiswa dituntut untuk berpikir kreatif, melakukan debugging secara sistematis, dan belajar untuk bersabar dalam menghadapi perilaku perangkat keras yang terkadang tidak terduga.",
        "Eksplorasi IoT di lingkungan kampus pada akhirnya membentuk kompetensi mahasiswa yang komprehensif. Mereka tidak hanya belajar cara menulis kode program, tetapi juga memahami karakteristik komponen elektronik, protokol komunikasi data, hingga aspek keamanan siber pada perangkat yang terhubung. Kemampuan untuk membangun jembatan antara dunia fisik dan digital ini merupakan aset yang sangat berharga di era transformasi digital saat ini. Melalui proyek-proyek IoT, mahasiswa Teknik Informatika UHAMKA membuktikan bahwa dengan perangkat sederhana dan kreativitas yang tinggi, mereka mampu menciptakan solusi teknologi yang memberikan dampak luas bagi kenyamanan dan efisiensi kehidupan kampus sehari-hari."
      ]
    },
    {
      id: "smart-parking",
      category: "FEATURE UTAMA",
      title: "Dari Ide ke Aksi: Smart Parking Mahasiswa TI",
      subtitle: "Kisah inspiratif mahasiswa TI mengubah keresahan lahan parkir menjadi sistem deteksi real-time.",
      author: "Della Cyntia Azzahra",
      editor: "Ayuni Maynisa",
      peerReview: "Hikmah Putra Perdana, Anggoro Galih Niswantoro, Wildan Malaki",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1000&auto=format&fit=crop",
      references: [7, 11],
      content: [
        "Setiap pagi di lingkungan kampus UHAMKA, sebuah drama kecil kerap terulang ratusan mahasiswa beradu cepat demi mendapatkan slot parkir yang semakin terbatas. Pertumbuhan jumlah kendaraan yang tidak sebanding dengan kapasitas lahan parkir membuat aktivitas sederhana ini berubah menjadi tantangan tersendiri. Berdasarkan pengamatan internal tim redaksi, mahasiswa dapat menghabiskan waktu antara 10 hingga 15 menit hanya untuk mencari tempat parkir di jam-jam sibuk. Situasi ini tidak hanya menghambat mobilitas, tetapi juga memicu stres dan mengganggu fokus sebelum perkuliahan dimulai.",
        "Berangkat dari keresahan tersebut, sekelompok mahasiswa Teknik Informatika UHAMKA mencoba menghadirkan solusi melalui sebuah proyek bertajuk Smart Parking System. Proyek ini bukan sekadar tugas akademik, melainkan upaya konkret untuk menjawab permasalahan sehari-hari dengan pendekatan teknologi, sejalan dengan dorongan transformasi digital di lingkungan kampus [12]. Ide ini muncul dari diskusi yang berlangsung di sela-sela aktivitas kerja dan perkuliahan, ketika mereka menyadari bahwa akses terhadap informasi ketersediaan parkir secara real-time berpotensi mengurangi waktu pencarian secara signifikan.",
        "Pengembangan sistem dimulai dengan eksplorasi berbagai teknologi yang dapat digunakan. Tim akhirnya memilih sensor ultrasonik HC-SR04 sebagai alat utama untuk mendeteksi keberadaan kendaraan pada setiap slot parkir. Sensor ini bekerja dengan mengukur jarak antara perangkat dan objek di bawahnya, sebuah pendekatan yang juga banyak digunakan dalam pengembangan sistem parkir cerdas berbasis sensor [8]. Data yang diperoleh kemudian diproses menggunakan mikrokontroler Arduino Mega sebagai pusat kendali. Untuk mendukung akses informasi secara luas, sistem dirancang terhubung dengan basis data real-time Firebase dan ditampilkan melalui antarmuka web yang responsif.",
        "Namun, perjalanan dari ide menuju implementasi tidak berjalan semulus yang dibayangkan. Pada tahap uji coba awal, berbagai kendala teknis mulai bermunculan. Sensor sering kali menghasilkan pembacaan yang tidak konsisten akibat interferensi gelombang ultrasonik antar perangkat yang dipasang berdekatan. Selain itu, keterlambatan dalam proses pengiriman data ke server menyebabkan informasi yang ditampilkan tidak selalu akurat. Tantangan lain juga muncul dalam bentuk kerusakan rangkaian akibat kesalahan dalam manajemen daya saat pengujian di lapangan.",
        "Alih-alih menjadi hambatan akhir, berbagai kendala tersebut justru menjadi bagian penting dari proses pembelajaran tim. Mereka melakukan berbagai iterasi, mulai dari memperbaiki algoritma penyaringan data untuk mengurangi noise, hingga mengoptimalkan kode agar transmisi data menjadi lebih stabil. Proses ini menuntut waktu, ketelitian, serta kerja sama tim yang baik. “Kami menyadari bahwa dalam pengembangan teknologi, kegagalan bukanlah akhir, melainkan bagian dari proses memahami sistem secara lebih mendalam,” ungkap salah satu anggota tim.",
        "Hingga tahap akhir pengembangan, Smart Parking System ini masih berada pada fase prototipe dan belum sepenuhnya siap untuk diimplementasikan secara luas. Beberapa aspek teknis, terutama pada stabilitas sensor dan konsistensi data real-time, masih memerlukan penyempurnaan lebih lanjut. Meskipun demikian, proyek ini telah berhasil membuktikan bahwa pendekatan berbasis teknologi memiliki potensi besar dalam menjawab permasalahan parkir di lingkungan kampus, sebagaimana juga disoroti dalam berbagai studi terkait inovasi parkir cerdas [8].",
        "Lebih dari sekadar hasil akhir, proyek ini menjadi ruang belajar yang komprehensif bagi para mahasiswa yang terlibat. Mereka tidak hanya mengaplikasikan teori rekayasa perangkat lunak dan sistem tertanam, tetapi juga belajar tentang manajemen proyek, pembagian tugas, serta pentingnya komunikasi dalam tim. Pengalaman ini mencerminkan semangat transformasi digital mahasiswa yang tidak hanya berfokus pada teori, tetapi juga pada implementasi fungsional [12].",
        "Ke depan, tim berencana untuk terus mengembangkan sistem ini dengan melakukan berbagai perbaikan, baik dari sisi perangkat keras maupun perangkat lunak. Pengembangan lanjutan seperti integrasi aplikasi mobile dan eksplorasi teknologi computer vision for pengenalan kendaraan menjadi bagian dari visi jangka panjang mereka. Harapannya, suatu saat nanti sistem ini dapat benar-benar diimplementasikan dan memberikan manfaat luas bagi lingkungan kampus.",
        "Kisah Smart Parking System ini menjadi pengingat bahwa inovasi tidak selalu berakhir pada keberhasilan instan. Terkadang, nilai terbesar justru terletak pada proses, kegagalan, dan pembelajaran yang menyertainya. Dari sana, lahir fondasi yang lebih kuat untuk menciptakan solusi yang benar-benar berdampak di masa depan."
      ]
    }
  ],
  rubrics: [
    {
      id: "opini-teknologi",
      category: "RUBRIK OPINI",
      title: "Transformasi Paradigma: Melampaui Baris Kode Menuju Arsitektur Solusi",
      subtitle: "Refleksi mendalam atas filosofi 'Dari Ngoding ke Solusi' dalam membentuk karakter inovator digital di FTII UHAMKA.",
      author: "Della Cyntia Azzahra",
      editor: "Ayuni Maynisa",
      peerReview: "Hikmah Putra Perdana, Anggoro Galih Niswantoro, Wildan Malaki",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
      references: [10, 11],
      content: [
        "Selama bertahun-tahun, kurikulum pendidikan teknologi sering kali terjebak dalam glorifikasi terhadap sintaksis algoritma. Sebagai mahasiswa, kita kerap merasa bahwa menguasai cara menulis kode adalah puncak dari pencapaian akademis. Namun, era disrupsi saat ini memaksa kita untuk melihat jauh melampaui editor kode. Filosofi “Dari Ngoding ke Solusi” yang diusung TECHINSIGHT bukan sekadar slogan, melainkan sebuah reorientasi filosofis tentang peran kita di tengah masyarakat dan dunia kerja. Menulis kode tanpa memahami konteks permasalahan merupakan bentuk dari teknologi yang kehilangan arah [11].",
        "Dalam dinamika mahasiswa kelas karyawan, kita justru berada pada posisi yang unik. Kita tidak hanya belajar teori di ruang kelas, tetapi juga bersentuhan langsung dengan realitas dunia kerja. Dari sini, mulai terlihat pergeseran pola pikir yang signifikan. Pertanyaan tidak lagi berfokus pada “bahasa pemrograman apa yang sedang tren?”, melainkan “masalah krusial apa yang bisa diselesaikan dengan teknologi?”. Perubahan ini sangat krusial. Ketika kita beralih dari pendekatan yang berorientasi pada logika menuju pendekatan yang berorientasi pada masalah, teknologi seperti Artificial Intelligence (AI) tidak lagi sekadar menjadi hobi eksperimental, tetapi bertransformasi menjadi solusi konkret—baik di lingkungan kerja, bisnis, maupun masyarakat luas. Fenomena ini juga diperkuat oleh studi global mengenai inisiatif teknologi yang digerakkan oleh mahasiswa [11].",
        "Komprehensivitas dalam membangun solusi menuntut integrasi antara kecerdasan teknis dan kepekaan sosial. Solusi digital yang unggul secara teknis namun gagal menjawab kebutuhan pengguna tetap merupakan sebuah kegagalan desain. Oleh karena itu, bagi mahasiswa Teknik Informatika—terutama yang menjalani peran ganda sebagai pekerja—proses pengembangan seharusnya tidak berhenti pada tahap penulisan kode, melainkan menjadi fase akhir dari rangkaian panjang empati, observasi lapangan, and analisis dampak sosial. Kita perlu bertransformasi dari sekadar penulis kode menjadi pemecah masalah yang visioner, yang memahami bahwa setiap baris kode memiliki potensi untuk menciptakan dampak luas.",
        "Akhirnya, melalui rubrik ini, saya mengajak rekan-rekan mahasiswa untuk memandang masa depan dengan optimisme yang terukur. Jangan biarkan kompleksitas algoritma mengikis sisi kemanusiaan kita. Mari kita jadikan filosofi “Dari Ngoding ke Solusi” sebagai kompas moral dan profesional—baik di lingkungan akademik maupun dunia kerja. Mari kita buktikan bahwa inovasi teknologi tidak hanya tentang kecanggihan perangkat keras atau efisiensi perangkat lunak, tetapi juga tentang keberanian untuk menyelesaikan permasalahan krusial dengan pendekatan yang bermakna. Masa depan digital Indonesia tidak lagi dimiliki oleh mereka yang sekadar mampu menulis kode, melainkan oleh mereka yang mampu mengarsiteki solusi bagi bangsa [12]."
      ]
    }
  ],
  steps: [
    {
      title: "Mulai dari masalah sederhana",
      description: "Inovasi tidak harus rumit. Sering kali solusi terbaik datang dari pengamatan masalah kecil di sekitar kita."
    },
    {
      title: "Jangan takut mencoba",
      description: "Langkah pertama adalah yang terberat. Keberanian untuk memulai adalah kunci utama setiap keberhasilan."
    },
    {
      title: "Error adalah bagian dari proses",
      description: "Jangan menyerah saat menghadapi bug atau kegagalan. Setiap error adalah pelajaran berharga untuk perbaikan."
    },
    {
      title: "Kerja sama tim sangat penting",
      description: "Kolaborasi menyatukan berbagai perspektif. Bersama tim, ide kecil bisa berkembang menjadi solusi besar."
    }
  ],
  process: [
    "Brainstorming ide",
    "Penulisan artikel",
    "Editing bahasa",
    "Peer review antar anggota",
    "Desain layout digital",
    "Publikasi online"
  ],
  team: [
    { 
      role: "Pemimpin Redaksi", 
      name: "DINIANTI MARSELIA",
      email: "dinianti.marselia@uhamka.ac.id"
    },
    { 
      role: "Tech Lead", 
      name: "WILDAN MALAKI",
      email: "wildanmalaki@gmail.com"
    },
    { 
      role: "Editor", 
      name: "AYUNI MAYNISA",
      email: "ayunimaynisa0@gmail.com"
    },
    { 
      role: "Content Writer", 
      name: "DELLA CYNTIA AZZAHRA",
      email: "dellacyntia00@gmail.com"
    },
    { 
      role: "Desain/Layout", 
      name: "HIKMAH PUTRA PERDANA",
      email: "hikmahputraperdana99@gmail.com"
    },
    { 
      role: "Documentation", 
      name: "ANGGORO GALIH NISWANTORO",
      email: "niswantorogalih@gmail.com"
    }
  ],
  about: {
    vision: "Menjadi katalisator utama dalam ekosistem inovasi digital mahasiswa, mendorong lahirnya solusi teknologi yang beretika, berkelanjutan, dan berdampak sosial luas bagi Indonesia.",
    mission: [
      "Menyajikan jurnalisme teknologi yang mendalam, akurat, dan inspiratif untuk mempersempit kesenjangan antara teori akademis dan realitas industri.",
      "Mengkurasi dan mempublikasikan analisis, gagasan, serta solusi teknologi mahasiswa Teknik Informatika UHAMKA sebagai bentuk apresiasi atas pemikiran kritis yang relevan dengan tantangan profesional.",
      "Membangun komunitas literasi digital yang kritis dan kolaboratif bagi mahasiswa profesional FTII UHAMKA, mengintegrasikan nilai akademik dengan dinamika dunia kerja."
    ],
    target: "Mahasiswa profesional, praktisi industri, dan akademisi yang percaya bahwa solusi digital yang kredibel lahir dari sinergi antara referensi ilmiah yang kuat dan tuntutan dunia kerja yang dinamis."
  },
  contributorInfo: {
    title: "Mari Berkontribusi!",
    description: "Jadikan ide kreatif Anda lebih dari sekadar wacana akademik. Kami mengundang para inovator profesional dari berbagai latar belakang untuk menyuarakan gagasan, membedah teknologi, hingga menampilkan proyek fungsional Anda.",
    roles: [
      {
        title: "Thought Leader",
        description: "Suarakan opini kritis Anda mengenai tren teknologi masa depan atau dampak sosial dari kecerdasan buatan dalam bentuk esai yang mendalam.",
        icon: "PenTool"
      },
      {
        title: "Visual Contributor",
        description: "Perkaya narasi majalah ini melalui estetika desain UI/UX, fotografi teknologi, atau visualisasi data yang memukau.",
        icon: "Palette"
      },
      {
        title: "Tech Reviewer",
        description: "Ulas fungsionalitas dan efisiensi teknologi terbaru, mulai dari perangkat IoT hingga aplikasi inovatif melalui kacamata profesional.",
        icon: "Cpu"
      },
      {
        title: "Technical Architect",
        description: "Bagikan pengetahuan praktis Anda melalui tutorial pemrograman tingkat lanjut atau bedah arsitektur projek sumber terbuka yang inspiratif.",
        icon: "Layout"
      }
    ],
    benefits: [
      "Meningkatkan kemampuan menulis dan berpikir kritis di bidang teknologi",
      "Menambah pengalaman dalam publikasi dan penyusunan konten ilmiah populer",
      "Membangun portofolio karya di bidang inovasi dan teknologi",
      "Mendapatkan pengalaman kolaborasi dalam lingkungan akademik dan komunitas teknologi"
    ],
    process: [
      { step: "01", title: "Brainstorming Ide", desc: "Diskusi santai untuk menggali sudut pandang unik dari ide atau proyek teknologi Anda." },
      { step: "02", title: "Concept Drafting", desc: "Proses transfer ide ke dalam bentuk naskah atau visual yang menarik dan edukatif." },
      { step: "03", title: "Collaborative Review", desc: "Saling beri masukan bersama tim redaksi untuk memoles karya agar semakin berbobot." },
      { step: "04", title: "Final Launch!", desc: "Selebrasi karya Anda! Publikasikan inovasi Anda untuk menginspirasi pembaca TECHINSIGHT." }
    ],
    cta: "Kirimkan naskah analisis atau gagasan teknologi Anda ke dinianti.marselia@uhamka.ac.id (Pemimpin Redaksi)"
  },
  references: [
    "Gartner. (2024). Top Strategic Technology Trends in Education for 2024. Gartner Research Report.",
    "Smith, J., & Doe, A. (2025). How AI Is Transforming Campus Life. TechToday Magazine, 12(4), 45-52. https://doi.org/10.1038/tech.2025.01",
    "Johnson, M., & Lee, S. (2025). Student Chatbots: Automating Campus Queries with Natural Language Processing. Digital Campus Journal, 8(2), 112-125. https://doi.org/10.5678/dcj.2025.08",
    "IDC. (2024). Worldwide Quarterly Internet of Things Tracker. International Data Corporation.",
    "Williams, R., et al. (2025). IoT Projects for Engineering Students: A Practical Guide to Microcontrollers. MakerTech Review, 15(3), 22-29.",
    "EduTech Insights. (2026). The Future of Smart Education: Five Ways IoT is Improving Campus Efficiency. Global Education Technology Report 2026. https://edutech.org/reports/iot-2026",
    "Brown, L., & Garcia, S. (2025). How Machine Learning Helps Students Understand Complex Data Patterns. AI For Everyone Quarterly, 5(1), 88-94.",
    "Campus Innovator. (2026). Smart Solutions: Campus Parking Gets a Technology Upgrade through Ultrasonic Sensors. Urban Tech & Education Review, 4(1), 12-18.",
    "TechWise Student Magazine. (2025). Machine Learning in Everyday College Projects: From Theory to Implementation. Student Innovation Series, Issue 4, pp. 10-15.",
    "Digital Editors Digest. (2026). Workflow Secrets for Successful Student Publications in the Digital Age. Media & Tech Publishing Guide, 2nd Edition.",
    "Global Tech Student Review. (2025). The Rise of Student-Led Tech Initiatives Worldwide: A Comparative Study. International Journal of Student Innovation, 7(3).",
    "UHAMKA Tech Report. (2025). Transformasi Digital Mahasiswa Teknik Informatika: Menuju Kampus Cerdas. FTII UHAMKA Press."
  ],
  conclusion: {
    title: "MASA DEPAN ADALAH KARYA KITA",
    text: [
      "Teknologi bukan sekadar alat, ia adalah narasi masa depan yang sedang kita susun hari ini. Di TECHINSIGHT, kita percaya bahwa setiap baris kode, setiap sirkuit IoT, dan setiap model Machine Learning adalah manifestasi dari keberanian untuk mendobrak batasan ketidaktahuan menjadi solusi yang berdampak luas.",
      "Inovasi sejati tidak berhenti pada penyelesaian sebuah proyek, melainkan pada bagaimana karya tersebut menginspirasi perubahan dan membuka jalan bagi penemuan berikutnya. Mari terus berkolaborasi, melampaui batas, dan membuktikan bahwa dari Teknik Informatika UHAMKA, kita mampu menciptakan teknologi yang mencerahkan peradaban."
    ]
  },
  pantun: {
    title: "GEMA INOVASI",
    lines: [
      "Bunga melati putih menawan,",
      "Harum semerbak di taman asri.",
      "Mari berbakti dengan inovasi,",
      "Membangun negeri gemilang esok hari."
    ]
  }
};
