import "./App.css";
import "./css/styles.css";
import heroMe from "./assets/heroMe.jpg";
import apple from "./assets/apple.jpg";
import cocacola from "./assets/cocacola.jpg";
import nike from "./assets/nike.jpg";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";

function App() {
  return (
    <body>
      <header className="bg-blue-500 grid justify-items-center justify-center">
        <nav className="grid py-6 text-white justify-items-center justify-center gap-6 bg-red-200 w-[90%] max-w-[1200px] max-w-screen-xl overflow-hidden md:flex md:items-center md:justify-between md:bg-blue-500">
          <a href="./">
            <h2 className="text-3xl font-extrabold">Landing.</h2>
          </a>
          <div className="textItalic flex gap-4">
            <a href="#">Inicio</a>
            <a href="#">Habilidades</a>
            <a href="#">Proyecto</a>
          </div>
        </nav>
        <section className="w-[90%] min-h-[600px] max-w-screen-xl max-w-[1200px]  align-items-center justify-center items-center overflow-hidden py-14 flex flex-col gap-12 md:flex md:flex-row md:justify-start">
          <img className="max-w-lg w-full md:w-2/5" src={heroMe} alt="alt"/>

          <div className="grid justify-items-center text-white textItalic space-y-6 md:w-3/5 md:justify-items-start ">
            <h1 className="text-3xl font-bold md:text-4xl">Mi nombre es David y estaré encantado de ayudarte.</h1>

            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
              lectus, sodales interdum diam a, suscipit tempus turpis.
              Suspendisse ultricies sed quam eget malesuada. Aenean a malesuada
              felis. Suspendisse molestie odio tortor, nec scelerisque risus
              finibus vel. Duis et hendrerit dui. Donec elit neque, ultrices nec
              condimentum id, ullamcorper in urna. In eget commodo felis, a
              gravida tortor. Aliquam tortor nulla, eleifend id elit quis,
              tincidunt tempor sem. Sed ultricies commodo scelerisque. Curabitur
              sodales euismod erat et condimentum. Suspendisse fringilla justo
              ligula. Donec interdum est eu lobortis placerat. Etiam a dolor
              egestas, pellentesque lacus nec, vestibulum diam. Nunc scelerisque
              accumsan libero, at tincidunt ex. Duis nibh leo, ultricies in elit
              at, lobortis fermentum orci.
            </p>

            <a className="font-bold bg-slate-700 py-4 px-8 rounded-xl inline-block" href="#">¡Contáctame ahora!</a>
          </div>
        </section>
      </header>
      <main>
        <section className="wrapper py-20 text-center" id="habilidades">
          <h2 className="text-3xl font-bold">¡Nuestras habilidades! 👇</h2>

          <div className="mt-12 grid gap-8 max-w-md mx-auto">
            <article className="space-y-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-orange-700 w-20 mx-auto"
              >
                <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path>
              </svg>
              <h3 className="text-slate-900 text-xl font-bold">HTML + FIGMA</h3>
              <p className="w-2/3 text-slate-600 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nisi lectus, sodales interdum diam a, suscipit tempus turpis.
              </p>
            </article>

            <article className="space-y-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-blue-700 w-20 mx-auto"
              >
                <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path>
              </svg>
              <h3 className="text-slate-900 text-xl font-bold">CSS</h3>
              <p className="w-2/3 text-slate-600 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nisi lectus, sodales interdum diam a, suscipit tempus turpis.
              </p>
            </article>

            <article className="space-y-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-yellow-400 w-20 mx-auto"
              >
                <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path>
              </svg>
              <h3 className="text-slate-900 text-xl font-bold">Javascript</h3>
              <p className="w-2/3 text-slate-600 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nisi lectus, sodales interdum diam a, suscipit tempus turpis.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-slate-50 p-20" id="proyectos">
          <div className="wrapper text-center">
            <h2 className="text-3xl font-bold mb-6">¡Nuestro trabajo!</h2>
            <p className="font-light text-xg text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
              lectus, sodales interdum diam a, suscipit tempus turpis.
              Suspendisse ultricies sed quam eget malesuada. Aenean a malesuada
              felis. Suspendisse molestie odio tortor, nec scelerisque risus
              finibus vel. Duis et hendrerit dui.
            </p>

            <div className="mt-12 grid gap-12">
              <article className="w-2/5 mx-auto space-y-4">
                <img
                  src={apple}
                  alt="nuestro trabajo"
                  className="aspect-square object-cover rounded-2xl"
                />

                <h3 className="text-2xl font-medium">Apple</h3>

                <p className="text-slate-500 font-light">
                  Lorem ipsum dolor sit amet
                </p>
              </article>

              <article className="w-2/5 mx-auto space-y-4">
                <img
                  src={cocacola}
                  alt="nuestro trabajo"
                  className="aspect-square object-cover rounded-2xl"
                />

                <h3 className="text-2xl font-medium">Coca Cola</h3>

                <p className="text-slate-500 font-light">
                  Lorem ipsum dolor sit amet
                </p>
              </article>

              <article className="w-2/5 mx-auto space-y-4">
                <img
                  src={nike}
                  alt="nuestro trabajo"
                  className="aspect-square object-cover rounded-2xl"
                />

                <h3 className="text-2xl font-medium">Nike</h3>

                <p className="text-slate-500 font-light">
                  Lorem ipsum dolor sit amet
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="wrapper py-20 grid gap-20">
          <div>
            <h2 className="text-3xl font-bold">
              Dame tu correo, y te contactaré en breve
            </h2>

            <p className="font-light text-slate-600 text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
              lectus, sodales interdum diam a, suscipit tempus turpis.
              Suspendisse ultricies sed quam eget malesuada. Aenean a malesuada
              felis. Suspendisse molestie odio tortor, nec scelerisque risus
              finibus vel. Duis et hendrerit dui. Donec elit neque, ultrices nec
              condimentum id, ullamcorper in urna. In eget commodo felis, a
              gravida tortor.
            </p>
          </div>

          <form className="grid gap-6">
            <input
              type="email"
              placeholder="correo@tuyo"
              className="border border-slate-900 p-4 rounded-lg"
            />

            <input
              type="submit"
              value="¡Contáctame!"
              className="bg-orange-500 text-white py-4 px-10 rounded-lg"
            />
          </form>
        </section>

        <footer className="bg-blue-100">
          <div className="wrapper py-20">
            <section
              className="flex flex-col text-center gap-6
                                  border-b-2 border-slate-400 pb-8"
            >
              <h2 className="text-3xl text-slate-900 font-extrabold">
                Landing.
              </h2>

              <p className="text-slate-600 ">micorreo@correo.com</p>
            </section>

            <section className="flex flex-col text-center gap-6 pt-8">
              <div className="flex justify-center gap-4 text-slate-900">
                <a href="#">Inicio</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#proyectos">Proyectos</a>
              </div>

              <div className="grid grid-flow-col auto-cols-max gap-8 justify-center">
                <a href="#">
                  <img src={facebook} alt="Logo facebook" className="w-7" />
                </a>
                <a href="#">
                  <img src={instagram} alt="Logo Instagram" className="w-7" />
                </a>
                <a href="#">
                  <img src={twitter} alt="Logo Twitter" className="w-7" />
                </a>
              </div>
            </section>
          </div>
        </footer>
      </main>
    </body>
  );
}

export default App;
