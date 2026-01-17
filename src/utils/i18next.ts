// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      headline: "Empowering Digital Experiences Through Frontend Development",
      description:
        "I'm a front-end web developer with a strong design sensibility, dedicated to transforming creative concepts into responsive, high-performance websites. From interactive UI/UX interfaces to smooth animations and scalable code, I help brands and creators build powerful digital experiences that truly connect with users.",
      codeStats: "Lines of Code & Counting",
      industrySummary:
        "Collaborated with clients across tech, gaming, and creative industries to build modern, responsive websites. Merging design precision with clean, scalable code to deliver exceptional frontend solutions.",
      discover: "Discover More",
      aboutUs: "About Us",
      desc_aboutUs: "Hi, I'm Ilham Bustomi, a Frontend Web Developer with a passion for crafting seamless, responsive, and visually compelling web experiences. My primary focus lies in building user-centered interfaces using modern frameworks like React.js, enhanced by utility-first tools such as Tailwind CSS. With over 1 years of experience in frontend engineering, I specialize in creating fast-loading, accessible, and scalable websites that look and feel great across all devices. I take pride in blending clean code with meaningful design. Whether it's implementing smooth GSAP animations or integrating immersive 3D interactions using Three.js, I approach every project with attention to performance, responsiveness, and creative flair. Beyond just 'how it looks', I care deeply about how it works—making sure every UI component is efficient, intuitive, and reusable. Currently, I collaborate with creative teams, startups, and indie game developers to turn complex ideas into elegant, functional interfaces. I'm always exploring new frontiers in web animation, motion design, and frontend architecture. Let's build something awesome together.",
      projectsTitle: "Projects",
      projectsSubtitle: "Here are some of my projects that I have worked on.",
      liveDemo: "Live Demo",
      projects: {
        project1: {
          title: "Darkblade Studio – Web Platform Development",
          desc: "Developed a fully responsive and scalable web platform for a fantasy game studio. Implemented React.js with Tailwind CSS for rapid UI building, and integrated backend APIs for player stats, login, and live leaderboards. Optimized for performance and accessibility across all devices.",
        },
        project2: {
          title: "Personal Developer Portfolio – GSAP & 3D UI",
          desc: "Created an animated portfolio site with GSAP scroll animations and interactive 3D sections using Three.js. Included custom-built CMS for easy content updates. Achieved Lighthouse performance score of 98+. Built with SEO, responsive design, and accessibility in mind.",
        },
      },
      projectList: {
        p1: { name: "Personal Website", status: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology." },
        p2: { name: "Website Portfolio V2", status: "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology." },
        p3: { name: "Website Portfolio V3", status: "Latest version of my personal portfolio website with modern design and enhanced user experience." },
        p4: { name: "Website List Joki", status: "This website is created to offer game account maintenance services: daily login, leveling, and weekly events. Safe, fast, and reliable." },
        p5: { name: "Website Shiraori Joki V2", status: "Second version of Shiraori Joki website with improved design and features for game account services." },
        p6: { name: "Project PKM", status: "PKM (Program Kreativitas Mahasiswa) project website showcasing student creativity and innovation." },
        p7: { name: "Dashboard E-Commerce", status: "E-commerce dashboard for managing fresh products with complete features for inventory, sales, and reporting." },
        p8: { name: "Lumichan AI", status: "AI-powered chatbot application with intelligent conversation capabilities and modern user interface." },
        p9: { name: "Digital Library", status: "Digital library management system for organizing and managing book collections with modern interface." },
        p10: { name: "Traffic RNN", status: "Traffic prediction application using Recurrent Neural Network (RNN) for intelligent traffic analysis." },
        p11: { name: "SawitMart", status: "Web application developed using Angular and Golang with SawitDB." },
        p12: { name: "Website PT.Cipta Hospital", status: "I created this website to promote PT. Cipta Hospital, in terms of services, etc. and this is to complete a project for a college assignment." },
        p13: { name: "Login Register", status: "A responsive Login & Register interface implementation." },
      },
    },
  },
  id: {
    translation: {
      headline: "Memberdayakan Pengalaman Digital Melalui Pengembangan Frontend",
      description: "Saya adalah pengembang web front-end dengan rasa desain yang kuat, berdedikasi untuk mengubah konsep kreatif menjadi situs web yang responsif dan berkinerja tinggi. Dari antarmuka UI/UX interaktif hingga animasi yang halus dan kode yang skalabel, saya membantu merek dan kreator membangun pengalaman digital yang kuat yang benar-benar terhubung dengan pengguna.",
      codeStats: "Baris Kode & Terus Bertambah",
      industrySummary: "Bekerja sama dengan klien di bidang teknologi, game, dan industri kreatif untuk membangun situs web modern dan responsif. Menggabungkan presisi desain dengan kode yang bersih dan skalabel untuk menghadirkan solusi frontend yang luar biasa.",
      discover: "Selengkapnya",
      aboutUs: "Tentang Kami",
      desc_aboutUs: "Halo, saya Ilham Bustomi, seorang Frontend Web Developer dengan gairah untuk menciptakan pengalaman web yang mulus, responsif, dan menarik secara visual. Fokus utama saya adalah membangun antarmuka yang berpusat pada pengguna menggunakan framework modern seperti React.js, didukung oleh tools utility-first seperti Tailwind CSS. Dengan pengalaman lebih dari 4 tahun dalam rekayasa frontend, saya mengkhususkan diri dalam membuat situs web yang cepat dimuat, dapat diakses, dan skalabel yang terlihat dan terasa hebat di semua perangkat. Saya bangga memadukan kode bersih dengan desain bermakna. Baik itu mengimplementasikan animasi GSAP yang halus atau mengintegrasikan interaksi 3D yang imersif menggunakan Three.js, saya mendekati setiap proyek dengan perhatian pada kinerja, responsivitas, dan kreativitas. Lebih dari sekadar 'bagaimana tampilannya,' saya sangat peduli dengan cara kerjanya—memastikan setiap komponen UI efisien, intuitif, dan dapat digunakan kembali. Saat ini, saya bekerja sama dengan tim kreatif, startup, dan pengembang game indie untuk mengubah ide kompleks menjadi antarmuka yang elegan dan fungsional. Saya selalu menjelajahi batas baru dalam animasi web, desain gerak, dan arsitektur frontend. Mari kita bangun sesuatu yang luar biasa bersama.",
      projectsTitle: "Proyek",
      projectsSubtitle: "Berikut adalah beberapa proyek yang telah saya kerjakan.",
      liveDemo: "Lihat Demo",
      projects: {
        project1: { title: "Darkblade Studio – Pengembangan Platform Web", desc: "Mengembangkan platform web yang responsif dan skalabel untuk studio game fantasi. Menggunakan React.js dan Tailwind CSS untuk membangun UI secara cepat, serta mengintegrasikan API backend untuk statistik pemain, login, dan papan peringkat langsung. Dioptimalkan untuk kinerja dan aksesibilitas di semua perangkat." },
        project2: { title: "Portofolio Developer Pribadi – GSAP & UI 3D", desc: "Membuat situs portofolio animasi dengan scroll animation dari GSAP dan elemen 3D interaktif menggunakan Three.js. Menyertakan CMS kustom untuk pembaruan konten yang mudah. Meraih skor performa Lighthouse 98+. Dibangun dengan fokus pada SEO, desain responsif, dan aksesibilitas." },
      },
      projectList: {
        p1: { name: "Website Pribadi", status: "Website pribadi saya, saya membuat website ini untuk menampilkan profil, skill dan proyek saya. Serta tempat saya mencoba teknologi baru." },
        p2: { name: "Website Portofolio V2", status: "Website pribadi saya, saya membuat website ini untuk menampilkan profil, skill dan proyek saya. Serta tempat saya mencoba teknologi baru." },
        p3: { name: "Website Portofolio V3", status: "Versi terbaru dari website portofolio pribadi saya dengan desain modern dan pengalaman pengguna yang lebih baik." },
        p4: { name: "Website List Joki", status: "Website ini dibuat untuk menawarkan layanan perawatan akun game: login harian, leveling, dan event mingguan. Aman, cepat, dan terpercaya." },
        p5: { name: "Website Shiraori Joki V2", status: "Versi kedua dari website Shiraori Joki dengan desain dan fitur yang lebih baik untuk layanan akun game." },
        p6: { name: "Proyek PKM", status: "Website proyek PKM (Program Kreativitas Mahasiswa) yang menampilkan kreativitas dan inovasi mahasiswa." },
        p7: { name: "Dashboard E-Commerce", status: "Dashboard e-commerce untuk mengelola produk segar dengan fitur lengkap untuk inventaris, penjualan, dan pelaporan." },
        p8: { name: "Lumichan AI", status: "Aplikasi chatbot bertenaga AI dengan kemampuan percakapan cerdas dan antarmuka pengguna modern." },
        p9: { name: "Perpustakaan Digital", status: "Sistem manajemen perpustakaan digital untuk mengorganisir dan mengelola koleksi buku dengan antarmuka modern." },
        p10: { name: "Traffic RNN", status: "Aplikasi prediksi lalu lintas menggunakan Recurrent Neural Network (RNN) untuk analisis lalu lintas cerdas." },
        p11: { name: "SawitMart", status: "Aplikasi web yang dikembangkan menggunakan Angular dan Golang dengan SawitDB." },
        p12: { name: "Website PT.Cipta Hospital", status: "Saya membuat website ini untuk mempromosikan PT. Cipta Hospital, dalam hal layanan, dll. dan ini untuk menyelesaikan proyek tugas kuliah." },
        p13: { name: "Login Register", status: "Implementasi antarmuka Login & Register yang responsif." },
      },
    },
  },
  jp: {
    translation: {
      headline: "フロントエンド開発を通じてデジタル体験を強化する",
      description: "私はデザインセンスに優れたフロントエンドウェブ開発者です。クリエイティブなコンセプトをレスポンシブで高性能なウェブサイトに変換することに専念しています。インタラクティブなUI/UXインターフェースからスムーズなアニメーション、スケーラブルなコードまで、ブランドやクリエイターがユーザーと真につながる強力なデジタル体験を構築するお手伝いをします。",
      codeStats: "コード行数 & 増加中",
      industrySummary: "テクノロジー、ゲーム、クリエイティブ業界のクライアントと協力して、モダンでレスポンシブなウェブサイトを構築。デザインの精度とクリーンでスケーラブルなコードを融合させ、卓越したフロントエンドソリューションを提供します。",
      discover: "もっと見る",
      aboutUs: "私について",
      desc_aboutUs: "こんにちは、私はIlham Bustomiです。シームレスでレスポンシブ、視覚的に魅力的なウェブ体験を作ることに情熱を持つフロントエンドウェブ開発者です。React.jsなどのモダンなフレームワークとTailwind CSSなどのユーティリティファーストツールを使用して、ユーザー中心のインターフェースを構築することに注力しています。4年以上のフロントエンドエンジニアリング経験を持ち、すべてのデバイスで見栄えが良く、快適に動作する高速でアクセシブル、スケーラブルなウェブサイトの作成を専門としています。クリーンなコードと意味のあるデザインを融合させることに誇りを持っています。GSAPのスムーズなアニメーションの実装やThree.jsを使用した没入型3Dインタラクションの統合など、すべてのプロジェクトにパフォーマンス、レスポンシブ性、クリエイティブなセンスを持って取り組んでいます。",
      projectsTitle: "プロジェクト",
      projectsSubtitle: "これまでに取り組んだプロジェクトの一部です。",
      liveDemo: "デモを見る",
      projects: {
        project1: { title: "Darkblade Studio – ウェブプラットフォーム開発", desc: "ファンタジーゲームスタジオ向けの完全レスポンシブでスケーラブルなウェブプラットフォームを開発。React.jsとTailwind CSSを使用して迅速なUI構築を実現し、プレイヤー統計、ログイン、ライブリーダーボードのバックエンドAPIを統合。すべてのデバイスでパフォーマンスとアクセシビリティを最適化。" },
        project2: { title: "個人開発者ポートフォリオ – GSAP & 3D UI", desc: "GSAPスクロールアニメーションとThree.jsを使用したインタラクティブな3Dセクションを備えたアニメーションポートフォリオサイトを作成。コンテンツ更新が簡単なカスタムCMSを含む。Lighthouseパフォーマンススコア98+を達成。SEO、レスポンシブデザイン、アクセシビリティを考慮して構築。" },
      },
      projectList: {
        p1: { name: "個人ウェブサイト", status: "私の個人ウェブサイトです。プロフィール、スキル、プロジェクトを表示するために作成しました。新しい技術を試す場所でもあります。" },
        p2: { name: "ポートフォリオV2", status: "私の個人ウェブサイトです。プロフィール、スキル、プロジェクトを表示するために作成しました。新しい技術を試す場所でもあります。" },
        p3: { name: "ポートフォリオV3", status: "モダンなデザインと向上したユーザー体験を備えた個人ポートフォリオウェブサイトの最新バージョン。" },
        p4: { name: "ジョキリストサイト", status: "ゲームアカウント管理サービスを提供するために作成されたウェブサイト：デイリーログイン、レベリング、週間イベント。安全、迅速、信頼性。" },
        p5: { name: "白織ジョキV2", status: "ゲームアカウントサービス向けのデザインと機能が改善されたShiraori Jokiウェブサイトの第2バージョン。" },
        p6: { name: "PKMプロジェクト", status: "学生の創造性と革新を紹介するPKM（学生創造性プログラム）プロジェクトウェブサイト。" },
        p7: { name: "Eコマースダッシュボード", status: "在庫、販売、レポートの完全な機能を備えた生鮮食品管理用Eコマースダッシュボード。" },
        p8: { name: "Lumichan AI", status: "インテリジェントな会話機能とモダンなユーザーインターフェースを備えたAI搭載チャットボットアプリケーション。" },
        p9: { name: "デジタル図書館", status: "モダンなインターフェースで書籍コレクションを整理・管理するデジタル図書館管理システム。" },
        p10: { name: "Traffic RNN", status: "インテリジェントな交通分析のためのリカレントニューラルネットワーク（RNN）を使用した交通予測アプリケーション。" },
        p11: { name: "SawitMart", status: "AngularとGolangをSawitDBと共に使用して開発されたウェブアプリケーション。" },
        p12: { name: "PT.Cipta Hospital", status: "PT. Cipta Hospitalのサービスなどを宣伝するために作成したウェブサイト。大学の課題プロジェクトを完了するためのものです。" },
        p13: { name: "ログイン登録", status: "レスポンシブなログイン＆登録インターフェースの実装。" },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;