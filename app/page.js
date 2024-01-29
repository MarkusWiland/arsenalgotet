export default function Home() {
  return (
    <>
    <div className="full-width min-h-[70vh]  bg-zinc-800 ">
    <div className="span-col-2 ">
      <h2 className="text-2xl text-white md:text-4xl">
        A new species
        <br /> of webcam
      </h2>
    </div>
  </div>
  <div className="flex w-full">
  <div className="bg-slat-600 flex-end ">
    <div className="flex w-[60%] justify-between">
      <h3>Nästa Match</h3>
      <span>Img</span>
    </div>
    <div className="w-[60%] flex-grow">
      <div className="flex w-full items-center">
        <h3>Champions League</h3>
        <p>Runda 5 - B 11/24/2024  20.00</p>
      </div>
      <div className="flex w-full flex-grow justify-between">
        <div>
          <span>icon</span>
          <h1>Arsenal FC</h1>
        </div>
        <div className="bg-gray-200 border border-gray-400 flex items-center justify-center">
          <h1>VS</h1>
        </div>
        <div>
          <span>icon</span>
          <h1>Arsenal FC</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-slat-600 flex-grow">
    <div className="flex justify-between">
      <h3>Nästa Match</h3>
      <span>Img</span>
    </div>
   
  </div>
</div>

    </>
  );
}
