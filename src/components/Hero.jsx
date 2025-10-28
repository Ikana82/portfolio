const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Hai, saya [Nama Kamu] 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Saya seorang Front-End Developer yang bersemangat dalam membangun
          antarmuka pengguna yang indah dan fungsional. Selamat datang di
          portofolio saya.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Lihat Proyek Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
