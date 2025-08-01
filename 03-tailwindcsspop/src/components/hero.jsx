function Hero() {
  return (
    <>
      <div className="flex max-w-[1000px] items-center justify-center relative left-[404px]" id="main">
        <div className=" max-w-[800px] h-auto" id="content">
          <h1 className="text-[10px] ">YOUR FEET DESERVE THE BEST</h1>
          <p className="">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="p-[20px] flex " id="herobutton">
            <button className="bg-red-700 rounded-md">Shop Now</button>
            <button className="bg-red-700 rounded-md">Category</button>
          </div>
          <div className="flex items-center " id="shopping">
            <p>avalable on gyes</p>
            <img src="/assets/flipkart.png" alt="" />
            <img src="/assets/amazon.png" alt="" />
          </div>
        </div>

        <div className=" flex" id="photo"></div>
        <img src="/assets/shoe_image.png" alt="Shoe" />
      </div>
    </>
  );
}

export default Hero;
