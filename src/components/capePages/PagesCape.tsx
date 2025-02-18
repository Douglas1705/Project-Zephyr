interface CapePagesProps {
  title: string;
}
function CapePages({ title }: CapePagesProps) {
  return (
    <header className="h-[310px] bg-capePages bg-cover bg-right flex flex-col justify-center items-center gap-4 mt-10">
      <img
        src="https://i.ibb.co/PGhMLmtL/Zephyr-1.png"
        alt="Image of two lines representing the Ovenmaker"
        title="Furniro-logo"
        className="w-36"
      />
      <h2 className="text-5xl font-medium">{title}</h2>
      <div className="flex gap-2 text-base">
        <p className="font-medium">Home &gt; </p>{' '}
        <span className="font-light">{title}</span>
      </div>
    </header>
  );
}

export default CapePages;
