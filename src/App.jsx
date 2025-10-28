import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
// import Footer from './components/Footer'; // Kamu bisa buat komponen Footer sendiri

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        {/* Tambahkan komponen lain di sini, seperti About, Contact, atau Footer */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
