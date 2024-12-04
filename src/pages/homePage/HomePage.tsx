import BeautifullSec from './BeautifullSec';
import BrowseSec from './BrowseSec';
import CapaSec from './CapaSec';
import FurnitureSec from './FurnitureSec';
import ProductHomePage from './ProductsHomeSec';

function HomePage() {
  return (
    <main>
      <CapaSec />
      <BrowseSec />
      <ProductHomePage />
      <BeautifullSec />
      <FurnitureSec />
    </main>
  );
}

export default HomePage;
