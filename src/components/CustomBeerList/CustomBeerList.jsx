// import s from './CustomBeerList.module.css';

const CustomBeerList = ({ beerList = [] }) => {
  return (
    <>
      {beerList.map((data, index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default CustomBeerList;
