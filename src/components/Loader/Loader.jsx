import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={100}
      width={100}
      color="#3f51b5"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#3f51b5"
      strokeWidth={5}
      strokeWidthSecondary={5}
    />
  );
};

export default Loader;
