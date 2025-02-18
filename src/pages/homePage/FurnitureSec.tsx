import { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlTileLayer from 'ol/layer/Tile';
import OlXYZ from 'ol/source/XYZ';
import OlFeature from 'ol/Feature';
import OlPoint from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import OlVectorLayer from 'ol/layer/Vector';
import OlVectorSource from 'ol/source/Vector';
import OlStyle from 'ol/style/Style';
import OlIcon from 'ol/style/Icon';

interface Testimonial {
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Smith',
    image:
      'https://cdn.pixabay.com/photo/2021/01/25/19/08/man-5949295_1280.jpg',
    text: '"I loved shopping with you! The experience was amazing and the service was impeccable."',
  },
  {
    name: 'Emily Johnson',
    image:
      'https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg',
    text: '"The products are of excellent quality and the delivery was super fast. Highly recommend!"',
  },
  {
    name: 'Sophia Williams',
    image:
      'https://cdn.pixabay.com/photo/2022/05/05/01/13/woman-7175038_1280.jpg',
    text: '"The variety of products is amazing and the prices are very competitive. I will definitely be coming back for more!"',
  },
];

const storeLocations = [
  { coords: [-74.006, 40.7128], address: 'New York, USA' },
  { coords: [-118.2437, 34.0522], address: 'Los Angeles, USA' },
  { coords: [-46.6333, -23.5505], address: 'São Paulo, Brazil' },
  { coords: [-87.6298, 41.8781], address: 'Chicago, USA' },
  { coords: [-95.3584, 29.7499], address: 'Houston, USA' },
  { coords: [-84.388, 33.749], address: 'Atlanta, USA' },
  { coords: [-122.4194, 37.7749], address: 'San Francisco, USA' },
  { coords: [-43.9378, -19.9208], address: 'Belo Horizonte, Brazil' },
];

function FurnitureSec() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedAddress, setSelectedAddress] = useState(
    'Feel free to find our stores!',
  );

  useEffect(() => {
    const features = storeLocations.map(
      (store) =>
        new OlFeature({
          geometry: new OlPoint(fromLonLat(store.coords)),
          address: store.address,
        }),
    );

    const vectorSource = new OlVectorSource({
      features: features,
    });

    const vectorLayer = new OlVectorLayer({
      source: vectorSource,
      style: new OlStyle({
        image: new OlIcon({
          src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
          scale: 0.05,
        }),
      }),
    });

    const map = new OlMap({
      target: mapRef.current!,
      layers: [
        new OlTileLayer({
          source: new OlXYZ({
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
        vectorLayer,
      ],
      view: new OlView({
        center: fromLonLat([-95.7129, 37.0902]),
        zoom: 2,
      }),
    });

    map.on('pointermove', (evt) => {
      if (evt.dragging) {
        return;
      }
      const pixel = map.getEventPixel(evt.originalEvent);
      const hit = map.hasFeatureAtPixel(pixel);
      map.getTargetElement().style.cursor = hit ? 'pointer' : '';
    });

    map.on('click', (evt) => {
      const feature = map.forEachFeatureAtPixel(
        evt.pixel,
        (feature) => feature,
      );
      if (feature) {
        const address = feature.get('address');
        setSelectedAddress(address);
      }
    });

    map.updateSize();
  }, []);

  return (
    <section className="flex flex-col md:flex-row flex-wrap w-full md:w-11/12 my-14 mx-auto max-w-screen-2xl">
      <div className="hidden md:block w-full mx-auto py-4 md:w-full lg:w-6/12 overflow-hidden xl:h-full rounded-4xl border-r-4 border-gray-100  bg-neutral-50">
        <img
          src="https://i.ibb.co/PGhMLmtL/Zephyr-1.png"
          alt=""
          className="w-4/12 mx-auto"
        />
        <p className="text-center text-xl font-light tracking-widest mb-1 pb-2 mx-auto">
          {selectedAddress}
        </p>
        <div
          ref={mapRef}
          className="map-container mx-auto"
          style={{
            height: '27rem',
            width: '27rem',
            overflow: 'hidden',
            position: 'relative',
          }}
        />
      </div>
      <div className="py-10 space-y-4 w-full lg:py-0 lg:w-6/12 flex flex-col">
        <h1 className="text-center mx-auto text-2xl w-8/12 tracking-wider font-medium border-y-2 py-2">
          What do our customers say about Zephyr furniture?
        </h1>
        <div className="flex flex-col space-y-6 px-10 py-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-center md:flex-row text-center space-y-4 space-x-4 py-2 px-4 items-center md:bg-slate-100 rounded-full md:shadow-lg shadow-slate-400"
            >
              <figure className="border-radius border-4 ">
                <img src={testimonial.image} alt={`User ${index + 1}`} />
              </figure>
              <div className="w-full md:w-4/6">
                <p className="text-xl font-semibold ">{testimonial.name}</p>
                <p className="text-base tracking-wider py-4">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FurnitureSec;
