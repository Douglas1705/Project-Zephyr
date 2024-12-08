import BeautifullSec from './BeautifullSec';
import BrowseSec from './BrowseSec';
import CapaSec from './CapaSec';
import FurnitureSec from './FurnitureSec';
import ProductHomePage from './ProductsHomeSec';

function HomePage() {
  return (
    <>
      <CapaSec />
      <main className="max-w-screen-2xl xl:mx-auto">
        <BrowseSec />
        <ProductHomePage />
        <BeautifullSec />
      </main>
      <FurnitureSec />
    </>
  );
}

export default HomePage;
