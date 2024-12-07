import BeautifullSec from './BeautifullSec';
import BrowseSec from './BrowseSec';
import CapaSec from './CapaSec';
import FurnitureSec from './FurnitureSec';
import ProductHomePage from './ProductsHomeSec';

function HomePage() {
  return (
    <main className="max-w-screen-2xl xl:mx-auto">
      <CapaSec />
      <BrowseSec />
      <ProductHomePage />
      <BeautifullSec />
      <FurnitureSec />
    </main>
  );
}

export default HomePage;
