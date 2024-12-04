interface CapePagesProps {
  title: string;
}
function CapePages({ title }: CapePagesProps) {
  return (
    <header className="h-[310px] bg-capePages bg-cover flex flex-col justify-center items-center gap-5">
      <img
        src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/logo-furniro.svg"
        alt="Image of two lines representing the Ovenmaker"
        title="Furniro-logo"
        className="w-14"
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
