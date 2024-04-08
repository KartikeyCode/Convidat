export default function Navbar() {
    return (
      <div className=" h-16 bg-[#0D3A79] font-Poppins flex items-center px-8 xl:px-16 sticky top-0">
        <div className="flex gap-0 items-center">
          <a href="/" className="text-white text-3xl  font-bold hover:scale-110 transition-all ">
            Convidat<span style={{ color: "#41A1CE", fontSize: "2.25rem" }}>.</span>
          </a>
        </div>
      </div>
    );
  }
  