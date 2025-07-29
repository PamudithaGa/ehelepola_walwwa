import LogoImage from '../../assets/logos/seondary-logo.png'

type CardProps = {
  title: string;
  description: string;
  image: string;
  date: string;
  month: string;
};

const NewsCard: React.FC<CardProps> = ({ title, description, image, date, month }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden h-115">
      <img src={image} alt={title} className="h-45 w-full object-cover" />
      <div className="px-2 lg:p-4 flex gap-5 w-full mt-2">
        <div
        className="bg-primary w-1/3 h-20 p-7 flex flex-col rounded-2xl justify-center items-center ">
            <img src={LogoImage} alt="" />
        </div>
        <h2 className="font-bold text-lg mb-1 w-2/3">{title}</h2>
      </div>

       <p className="text-sm text-gray-600 p-4 lg:text-left text-justify">{description}</p>
    </div>
  );
};

export default NewsCard;
