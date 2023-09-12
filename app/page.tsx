import { CorporateParties } from '@/views/CorporateParties';
import { Slider } from '@/components/Slider';
import { SliderSchoolElement } from '@/components/SliderSchoolElement';
import { KidsMafia } from '@/views/KidsMafia';

import schoolData from '@/data/schoolSection.json';

const Home = () => {
  return (
    <>
      <CorporateParties />

      <div className="container">
        <Slider
          section="school"
          navigation
          pagination
          element={SliderSchoolElement}
          data={schoolData.swiperData}
        />
      </div>

      <KidsMafia />
    </>
  );
};

export default Home;
