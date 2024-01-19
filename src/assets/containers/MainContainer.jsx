const MainContainer = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-14 bg-[url(https://www.toptal.com/designers/subtlepatterns/uploads/chevron.png)] ">
      <section className="flex flex-col-reverse md:flex-row items-center gap-10 p-8 m-8">
        <div className="flex flex-col text-center gap-6">
          <div>
            <h1 className="text-lg font-bold tracking-widest place-self-center">
              Hi, my name is
              <span className="text-6xl font-bold"> Richard Dalrymple.</span>
            </h1>
          </div>
          <h1 className="text-2xl font-bold tracking-widest">
            Certified Builder of{" "}
            <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
              Cool Stuff.
            </span>
          </h1>
          <h2 className="text-xl text-start mt-6 w-5/6 place-self-center font-extralight border-l-4 border-red-600 pl-10">
            I am a Software Engineer living and working in Glasgow. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Voluptates voluptate
            pariatur exercitationem dolor dolores esse perspiciatis sed vero
            enim. Enim.
          </h2>
        </div>
        <img className="max-w-sm rounded-full" src="images/me.jpg" alt="" />
      </section>
      <section className="text-center p-8">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
          My Projects
        </h1>
        <div className="flex justify-center text-center flex-wrap my-12 text-sm">
          <div className="flex flex-col m-4 max-w-xs bg-white p-4 border-2 border-gray-400 rounded-md gap-4">
            <h2 className="font-bold">Card Title</h2>
            <p className="font-extralight">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              voluptate amet, aliquid enim facere iure magnam, ullam asperiores
              voluptatum suscipit ut dolore corrupti consequuntur vitae fugiat
              dolorum praesentium a officia quos odio minima. Cum doloremque
              porro ducimus maiores quis omnis.
            </p>
          </div>
          <div className="flex flex-col bg-white m-4 max-w-xs p-4 border-2 border-gray-400 rounded-md gap-4">
            <h2 className="font-bold">Card Title</h2>
            <p className="font-extralight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et culpa
              odit neque quisquam! Molestiae aut atque incidunt ex vel eligendi
              eveniet, nisi repudiandae unde doloremque! Magnam quasi eaque
              officia laudantium molestiae explicabo temporibus vitae, incidunt
              voluptatem animi! Saepe, reiciendis voluptas.
            </p>
          </div>
          <div className="flex flex-col bg-white m-4 max-w-xs p-4 border-2 border-gray-400 rounded-md gap-4">
            <h2 className="font-bold">Card Title</h2>
            <p className="font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              provident corporis odit quis quaerat magnam laudantium fugit
              corrupti? Aliquid quia blanditiis quisquam dolorem et eos
              aspernatur culpa eligendi commodi error? Suscipit dignissimos
              cupiditate est repellendus, autem accusamus culpa explicabo
              impedit?
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContainer;
