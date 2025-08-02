const ChemicalBottle = ({ name }) => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center group">
      <img
        src="/images/chemicalbottle.png?height=256&width=200"
        alt="Chemical Bottle"
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded shadow-lg border">
        <p className="text-black font-bold text-sm text-center leading-tight">
          {name}
        </p>
      </div>
    </div>
  );
};

export default ChemicalBottle;
